import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { FaPaw, FaMapMarkerAlt, FaTag, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';

const UpdateMyListing = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [service, setService] = useState(null);
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/services/${id}`)
      .then(res => {
        setService(res.data);
        setCategory(res.data.category);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      name: form.name.value,
      category,
      price: parseInt(form.price.value),
      location: form.location.value,
      description: form.description.value,
      imageUrl: form.imageUrl.value,
      date: form.date.value,
      email: form.email.value,
      CreatedAt: service?.CreatedAt,
    };

    axios.put(`http://localhost:5000/updateListing/${id}`, formData)
      .then(res => {
        console.log(res.data);
        Swal.fire({
          icon: 'success',
          title: 'Listing Updated!',
          text: 'Your changes have been saved successfully.',
          timer: 1500,
          showConfirmButton: false,
        });
        navigate('/MyListings');
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
          text: 'Something went wrong while saving.',
        });
      });
  };

  if (!service) return <div className="text-center py-20"><span className="loading loading-spinner loading-lg text-orange-600"></span></div>;

  return (
    <div className="min-h-screen py-12 px-4 flex justify-center">
      <Helmet>
        <title>PawMart - Update Listing</title>
      </Helmet>

      <div className="CardStyle w-full max-w-3xl overflow-hidden shadow-2xl border-none">
        {/* Header */}
        <div className="bg-orange-600 p-8 text-white text-center">
          <FaPaw className="text-4xl mx-auto mb-2" />
          <h2 className="text-3xl font-bold italic">Update Your Listing</h2>
          <p className="opacity-80">Edit the details for {service.name}</p>
        </div>

        <form onSubmit={handleUpdate} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="form-control md:col-span-2">
            <label className="label font-bold text-orange-700 dark:text-orange-400">Pet / Product Name *</label>
            <input
              name="name"
              defaultValue={service.name}
              required
              type="text"
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
              placeholder="e.g. Golden Retriever"
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label font-bold text-orange-700 dark:text-orange-400 flex items-center gap-2">
              <FaTag /> Category *
            </label>
            <select
              name="category"
              required
              className="select select-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="pets">Pets</option>
              <option value="food">Food</option>
              <option value="accessories">Accessories</option>
              <option value="care-products">Care Products</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label font-bold text-orange-700 dark:text-orange-400 flex items-center gap-2">
              <FaDollarSign /> Price (0 for Adoption)
            </label>
            <input
              name="price"
              defaultValue={service.price}
              type="number"
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white disabled:opacity-50"
              readOnly={category === 'pets'}
              disabled={category === 'pets'}
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label font-bold text-orange-700 dark:text-orange-400 flex items-center gap-2">
              <FaMapMarkerAlt /> Location *
            </label>
            <input
              name="location"
              defaultValue={service.location}
              required
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
            />
          </div>

          {/* Date */}
          <div className="form-control">
            <label className="label font-bold text-orange-700 dark:text-orange-400 flex items-center gap-2">
              <FaCalendarAlt /> Listing Date *
            </label>
            <input
              name="date"
              type="date"
              defaultValue={service.date}
              required
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
            />
          </div>

          {/* Image URL */}
          <div className="form-control md:col-span-2">
            <label className="label font-bold text-orange-700 dark:text-orange-400">Image URL *</label>
            <input
              name="imageUrl"
              type="url"
              defaultValue={service.imageUrl}
              required
              className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
            />
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label font-bold text-orange-700 dark:text-orange-400">Description *</label>
            <textarea
              name="description"
              defaultValue={service.description}
              rows="3"
              required
              className="textarea textarea-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-white"
            />
          </div>

          {/* Email (Readonly) */}
          <div className="form-control md:col-span-2">
            <label className="label opacity-60">Owner Email (Locked)</label>
            <input
              name="email"
              value={user?.email || ''}
              readOnly
              className="input input-bordered bg-stone-200 dark:bg-stone-900 opacity-60 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="btn bg-orange-600 hover:bg-orange-700 text-white border-none w-full rounded-xl text-lg shadow-lg hover:scale-[1.02] transition-transform"
            >
              Update Listing Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyListing;