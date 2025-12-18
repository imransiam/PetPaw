import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import { FaPaw, FaMapMarkerAlt, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Recommended for a professional look

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://assignment10-backend-three.vercel.app/services/${id}`);
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
    const formData = {
      buyerName: user?.displayName,
      productName: service?.name,
      price: parseFloat(service?.price),
      quantity: parseInt(form.quantity.value),
      address: form.address.value,
      note: form.note.value,
      phone: form.phone.value,
      OrderedAt: new Date().toISOString(),
      productId: service?._id,
      email: user?.email
    };

    axios.post('https://assignment10-backend-three.vercel.app/orders', formData)
      .then(res => {
        console.log(res.data);
        Swal.fire({
          title: 'Order Placed!',
          text: 'Your request has been sent successfully.',
          icon: 'success',
          confirmButtonColor: '#d97706'
        });
        document.getElementById('my_modal_5').close();
        form.reset();
      })
      .catch(err => console.error(err));
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-paw loading-lg text-orange-600"></span>
    </div>
  );

  if (error) return <div className="text-center mt-10 text-red-500 font-bold">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="CardStyle max-w-5xl mx-auto overflow-hidden shadow-2xl border-none">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left: Product Image */}
          <div className="lg:w-1/2 relative">
            <img 
              src={service.imageUrl} 
              alt={service.name} 
              className="w-full h-80 lg:h-full object-cover" 
            />
            <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              {service.category}
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:w-1/2 p-8 flex flex-col justify-center">
            <Link to="/services" className="flex items-center gap-2 text-orange-600 font-bold mb-4 hover:underline">
              <FaArrowLeft /> Back to Shop
            </Link>
            
            <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
            
            <div className="space-y-3 mb-6">
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                ${service.price}
              </p>
              <div className="flex items-center gap-3 opacity-80">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>{service.location}</span>
              </div>
              <div className="flex items-center gap-3 opacity-80">
                <FaEnvelope className="text-orange-500" />
                <span>{service.email || 'Contact support'}</span>
              </div>
            </div>

            <div className="border-t border-stone-200 dark:border-stone-700 pt-6">
              <h3 className="font-bold mb-2">Description</h3>
              <p className="opacity-80 leading-relaxed mb-8">
                {service.description || "No description provided for this lovely service."}
              </p>
              
              <button 
                className="btn bg-orange-600 hover:bg-orange-700 text-white w-full rounded-2xl border-none text-lg flex items-center gap-2"
                onClick={() => document.getElementById('my_modal_5').showModal()}
              >
                Order Now <FaPaw />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- ORDER MODAL --- */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white dark:bg-stone-900 rounded-3xl border-2 border-orange-500/20">
          <h3 className="font-bold text-2xl mb-6 text-center">Complete Your Order</h3>
          
          <form onSubmit={handleOrder} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label font-semibold">Your Name</label>
                <input value={user?.displayName} readOnly className="input input-bordered bg-stone-100 dark:bg-stone-800" />
              </div>
              <div className="form-control">
                <label className="label font-semibold">Service</label>
                <input value={service?.name} readOnly className="input input-bordered bg-stone-100 dark:bg-stone-800" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label font-semibold">Price ($)</label>
                <input value={service?.price} readOnly className="input input-bordered bg-stone-100 dark:bg-stone-800" />
              </div>
              <div className="form-control">
                <label className="label font-semibold">Quantity</label>
                <input name="quantity" type="number" min="1" defaultValue="1" required className="input input-bordered focus:border-orange-500" />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-semibold">Phone Number</label>
              <input name="phone" type="tel" placeholder="Enter phone" required className="input input-bordered focus:border-orange-500" />
            </div>

            <div className="form-control">
              <label className="label font-semibold">Delivery Address</label>
              <input name="address" type="text" placeholder="House/Street/City" required className="input input-bordered focus:border-orange-500" />
            </div>

            <div className="form-control">
              <label className="label font-semibold">Additional Note</label>
              <textarea name="note" rows="2" className="textarea textarea-bordered focus:border-orange-500" placeholder="Any special requests?"></textarea>
            </div>

            <div className="modal-action flex flex-col gap-3">
              <button type="submit" className="btn bg-orange-600 hover:bg-orange-700 text-white w-full border-none rounded-xl">
                Confirm Order
              </button>
              <button type="button" className="btn btn-ghost w-full" onClick={() => document.getElementById('my_modal_5').close()}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;