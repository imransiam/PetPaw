import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaPlusCircle, FaPaw, FaImage, FaMapMarkerAlt, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

const AddListing = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const formData = {
      name: form.name.value,
      category,
      price: category === 'pets' ? 0 : parseInt(form.price.value),
      location: form.location.value,
      description: form.description.value,
      imageUrl: form.imageUrl.value,
      date: form.date.value,
      email: user?.email,
      CreatedAt: new Date().toISOString()
    };

    axios.post('https://assignment10-backend-three.vercel.app/services', formData)
      .then(res => {
        if (res.data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Listing Added!",
            text: "Your post is now live.",
            timer: 2000,
            showConfirmButton: false,
            confirmButtonColor: '#ea580c'
          });
          form.reset();
          setCategory('');
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something went wrong. Please try again.',
        });
      });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="CardStyle shadow-2xl overflow-hidden border-none">
          
          {/* PawMart Header */}
          <div className="bg-orange-600 p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <FaPlusCircle className="text-5xl" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Add New Listing</h1>
            <p className="text-orange-100 opacity-90">Fill in the details to list your pet or product</p>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product/Pet Name */}
              <div className="form-control">
                <label className="label font-bold flex gap-2">
                   Name *
                </label>
                <input
                  required
                  name='name'
                  type="text"
                  placeholder="Enter name"
                  className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800"
                />
              </div>

              {/* Category */}
              <div className="form-control">
                <label className="label font-bold">Category *</label>
                <select 
                  required
                  name='category'
                  className="select select-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="" disabled>Select category</option>
                  <option value="pets">Pets</option>
                  <option value="food">Food</option>
                  <option value="accessories">Accessories</option>
                  <option value="grooming">Care Products</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price */}
              <div className="form-control">
                <label className="label font-bold">Price ($)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50">$</span>
                  <input
                    required
                    name='price'
                    type="number"
                    className="input input-bordered w-full pl-8 focus:outline-orange-500 disabled:opacity-50 bg-stone-50 dark:bg-stone-800"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    value={category === 'pets' ? '0' : undefined}
                    readOnly={category === 'pets'}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="form-control">
                <label className="label font-bold flex gap-2">
                   Location *
                </label>
                <input
                  required
                  name='location'
                  type="text"
                  placeholder="Enter location"
                  className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800"
                />
              </div>
            </div>

            {/* Image URL */}
            <div className="form-control">
              <label className="label font-bold flex gap-2">
                 Image URL *
              </label>
              <input
                required
                name='imageUrl'
                type="url"
                placeholder="Enter image URL"
                className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800"
              />
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label font-bold">Description *</label>
              <textarea
                required
                name='description'
                rows="4"
                placeholder="Enter description"
                className="textarea textarea-bordered focus:outline-orange-500 h-32 bg-stone-50 dark:bg-stone-800"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div className="form-control">
                <label className="label font-bold flex gap-2">
                   Date *
                </label>
                <input
                  required
                  name='date'
                  type="date"
                  className="input input-bordered focus:outline-orange-500 bg-stone-50 dark:bg-stone-800"
                />
              </div>

              {/* User Email */}
              <div className="form-control">
                <label className="label font-bold flex gap-2">
                   Email
                </label>
                <input
                  value={user?.email || ''}
                  readOnly
                  className="input input-bordered bg-stone-200 dark:bg-stone-700 cursor-not-allowed opacity-70 font-medium"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="btn bg-orange-600 hover:bg-orange-700 border-none text-white w-full rounded-xl text-lg flex gap-2 h-14"
              >
                Submit Listing <FaPlusCircle />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddListing;