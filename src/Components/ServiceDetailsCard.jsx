import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/services/${id}`);
        setService(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load service details');
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const buyerName = form.buyerName.value;
    const productName = form.buyerName.value;
    const price = parseInt(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const address = form.address.value;
    const note = form.note.value;
    
    const phone = form.phone.value;
    const email = form.email.value;
    const formData = {
      buyerName,
      productName,
      
      price,
      quantity,
      address,
      note,
      phone,
      OrderedAt: service?.CreatedAt,
      date: new Date().toLocaleDateString(),
      productId: service?._id,
      email
    }
    axios.post('http://localhost:5000/orders',formData)
      .then(res=>{
        console.log(res);
        form.reset();
        }
      ).catch(err=>console.error(err));
    console.log(formData);
  };

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!service) return <div className="text-center mt-10 text-gray-500">Service not found</div>;

  return (
<div className="max-w-3xl mx-auto bg-green-100/50 shadow-[0_0_40px_rgba(34,197,94,0.4)] rounded-xl mb-5 mt-5 pb-5 ">
     <div className='flex-1 '> <img src={service.imageUrl} alt={service.name} className="w-full h-100 object-cover rounded-lg mb-4" /></div>
     <div className='p-5'>
       <h1 className="text-3xl font-bold mb-2">{service.name}</h1>
      <p className="text-gray-700 mb-2">Category: {service.category}</p>
      <p className="text-gray-700 mb-2">Price: {service.price}</p>
      <p className="text-gray-700 mb-2">Location: {service.location}</p>
      {service.email && <p className="text-gray-700 mb-2">Contact: {service.email}</p>}
      {service.description && <p className="text-gray-700 mb-4">{service.description}</p>}
      {service.downloadLink && (
        <Link to={service.downloadLink}>
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">Download</button>
        </Link>
      )}
      <div className="mt-6 flex justify-between">
        <Link to="/services" className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">Back to Services</Link>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn bg-black text-white rounded-3xl" onClick={()=>document.getElementById('my_modal_5').showModal()}>Order</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
   <form onSubmit={handleOrder} className='text-black'>
            <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buyer Name *
              </label>
              <input
              defaultValue={user?.displayName}
              readOnly
              required
              name='buyerName'
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition re"
                placeholder="Buyer name"
              />
            </div>
            {/* Product/Pet Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product/Pet Name *
              </label>
              <input
              defaultValue={service?.name}
              readOnly
              required
              name='productName'
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition re"
                placeholder="Enter product or pet name"
              />
            </div>

           

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price <span className="text-gray-500 text-xs">(0 if pet is selected)</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                defaultValue={service?.price}
                readOnly
                  required
                name='price'
                  type="number"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                 
                />
              </div>
            </div>

             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="relative">
                
                <input
                  required
                name='quantity'
                  type="number"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <input
                required
                name='address'
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                placeholder="Enter Address"
              />
            </div>

            

           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <input
                required
                name='phone'
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                placeholder="Enter phone number"
              />
            </div>
           

            {/* Email (Readonly) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
              value={user?.email}
                name='email'
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
                placeholder="user@example.com"
                readOnly
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Note *
              </label>
              <textarea
                required
                name='note'
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                placeholder="Enter a note"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
              >
                Order
              </button>
            </div>
          </div>
          </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </div>
     </div>
    </div>
  );
};

export default ServiceDetails;
