import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt, FaPaw, FaMapMarkerAlt } from 'react-icons/fa';

const MyListings = () => {
  const [myservices, setMyServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:5000/myservices?email=${user?.email}`)
        .then(res => setMyServices(res.data))
        .catch(err => console.error(err));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This listing will be permanently removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ea580c", // Brand Orange
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/deleteListing/${id}`)
          .then(res => {
            if (res.data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your listing has been removed.",
                icon: "success",
                confirmButtonColor: "#ea580c"
              });
              const remaining = myservices.filter(service => service._id !== id);
              setMyServices(remaining);
            }
          })
          .catch(err => console.error(err));
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <FaPaw className="text-orange-600" /> My Listings
          </h1>
          <p className="opacity-70 mt-1">Manage all the pets and products you have posted</p>
        </div>
        <Link to="/AddListing">
          <button className="btn bg-orange-600 hover:bg-orange-700 text-white border-none rounded-full px-8">
            + Add New
          </button>
        </Link>
      </div>

      {/* Table Container with CardStyle */}
      <div className="CardStyle shadow-xl overflow-hidden border-none rounded-2xl">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead className="bg-orange-600/10 text-orange-900 dark:text-orange-100">
              <tr className="border-b border-orange-200 dark:border-stone-700">
                <th className="py-5">Item Details</th>
                <th>Price & Location</th>
                <th>Post Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            
            <tbody>
              {myservices.length > 0 ? (
                myservices.map(service => (
                  <tr key={service._id} className="hover:bg-orange-50/50 dark:hover:bg-stone-800/50 transition-colors border-b border-stone-100 dark:border-stone-800">
                    <td>
                      <div className="flex items-center gap-4">
                        <div className="avatar">
                          <div className="mask mask-squircle h-16 w-16 shadow-md">
                            <img src={service.imageUrl} alt={service.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-lg">{service.name}</div>
                          <div className="badge badge-outline badge-sm opacity-70 uppercase text-[10px] font-bold">
                            {service.category}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold text-orange-700 dark:text-orange-400">
                        {service.price} <span className="text-xs">BDT</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm opacity-60">
                        <FaMapMarkerAlt className="text-[10px]" /> {service.location}
                      </div>
                    </td>
                    <td className="opacity-70 text-sm">
                      {new Date(service.date).toLocaleDateString('en-GB')}
                    </td>
                    <td>
                      <div className="flex justify-center items-center gap-3">
                        <Link to={`/UpdateMyListings/${service._id}`}>
                          <button className="btn btn-circle btn-ghost btn-sm text-blue-600 hover:bg-blue-50" title="Edit">
                            <FaEdit className="text-xl" />
                          </button>
                        </Link>
                        <button 
                          onClick={() => handleDelete(service?._id)} 
                          className="btn btn-circle btn-ghost btn-sm text-red-500 hover:bg-red-50" 
                          title="Delete"
                        >
                          <FaTrashAlt className="text-xl" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-20 opacity-50 italic text-lg">
                    No listings found. Start by adding one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyListings;