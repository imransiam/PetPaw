import React, {   useContext, useState } from 'react';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const AddListing = () => {
  const {user} = useContext(AuthContext);
   const [category, setCategory] = useState('');
   const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;
    const date = form.date.value;
    const email = form.email.value;
    const formData = {
      name,
      category,
      price,
      location,
      description,
      imageUrl,
      date,
      email
    }
    console.log(formData);

    axios.post('http://localhost:5000/services',formData)
      .then(res=>{
        console.log(res);
        
        }
      ).catch(err=>{
        console.error(err);
      });
   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Add List</h1>
            <p className="text-gray-600">Fill in the details to add a new listing</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='text-black'>
            <div className="space-y-6">
            {/* Product/Pet Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product/Pet Name *
              </label>
              <input
              required
              name='name'
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition re"
                placeholder="Enter product or pet name"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select 
              name='category'
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                <option value="pets">Pets</option>
                <option value="food">Food</option>
                <option value="accessories">Accessories</option>
                <option value="care-products">Care Products</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price <span className="text-gray-500 text-xs">(0 if pet is selected)</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  required
                name='price'
                  type="number"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition disabled:bg-gray-50 disabled:text-gray-600 disabled:cursor-not-allowed"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  value={category === 'pets' ? '0' : undefined}
                  readOnly={category === 'pets'}
                  disabled={category === 'pets'}
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location *
              </label>
              <input
                required
                name='location'
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                placeholder="Enter location"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                required
                name='description'
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
                placeholder="Enter a detailed description"
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL *
              </label>
              <input
                required
                name='imageUrl'
                type="url"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date *
              </label>
              <input
                required
                name='date'
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
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

            {/* Submit Button */}
            <div className="pt-4">
              <button
                
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
              >
                Add Listing
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddListing;