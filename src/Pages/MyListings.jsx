import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';

const MyListings = () => {
  const [myservices, setMyServices] = useState([]);
  const {user} = useContext(AuthContext);
  useEffect(()=>{
    axios.get(`http://localhost:5000/myservices?email=${user?.email}`)
    .then(res => setMyServices(res.data))
    .catch(err => console.error(err));
  },[user?.email])
  console.log(myservices);
  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/deleteListing/${id}`)
    .then(res=> {
      console.log(res.data);
      const remaining = myservices.filter(service => service._id !== id);
      setMyServices(remaining);
    })
    .catch(err => console.log(err)
    )

  }
  return (
    <div>
      My Listings Page
      <div className="overflow-x-auto">
  <table className="table">
   
   
    <tbody>
     
      {
        myservices?.map(service => (
          <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={service.imageUrl}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{service.name}</div>
              <div className="text-sm opacity-50"> {service.category}</div>
            </div>
          </div>
        </td>
        <td>
          {service.price} <span>BDT</span>
          <br />
          <span className="badge badge-ghost badge-sm">{service.location}</span>
        </td>
        <td>Purple</td>
        <td className='flex space-x-3'>
          <button onChange={()=> handleDelete(service?._id)} className="btn btn-error text-[15px] btn-xs">Delete</button>
          <Link to={`/UpdateMyListings/${service._id}`}><button className="btn btn-primary btn-xs text-[15px]">Edit</button></Link>
        </td>
      </tr>
        ))
      }
     
    </tbody>
    
  </table>
</div>
    </div>
  );
};

export default MyListings;