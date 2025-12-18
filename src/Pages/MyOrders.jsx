import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaShoppingBag, FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // It's better to filter by user email so they only see their own orders
    axios.get(`http://localhost:5000/orders?email=${user?.email}`)
      .then(res => {
        setMyOrders(res.data);
      })
      .catch(err => {
        console.error("Error fetching orders:", err);
      });
  }, [user?.email]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <FaShoppingBag className="text-orange-600" /> My Orders
        </h1>
        <p className="opacity-70 mt-2 text-lg">Track your recent purchases and adoption requests</p>
      </div>

      {/* Orders Table Container */}
      <div className="CardStyle shadow-xl overflow-hidden border-none rounded-2xl">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table Header */}
            <thead className="bg-orange-600 text-white">
              <tr className="text-sm uppercase tracking-wider">
                <th className="py-4">#</th>
                <th>Item Info</th>
                <th>Pricing</th>
                <th>Quantity</th>
                <th>Delivery Details</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {myOrders.length > 0 ? (
                myOrders.map((order, index) => (
                  <tr key={order._id} className="hover:bg-orange-50/50 dark:hover:bg-stone-800/50 transition-colors border-b border-stone-100 dark:border-stone-800">
                    <td className="font-bold opacity-50">{index + 1}</td>
                    
                    <td>
                      <div className="font-bold text-lg">{order.productName}</div>
                      <div className="flex items-center gap-2 text-xs opacity-60 mt-1">
                        <FaCalendarAlt className="text-orange-500" /> {order.date}
                      </div>
                    </td>

                    <td>
                      <div className="font-semibold text-orange-700 dark:text-orange-400">
                        {order.price} BDT
                      </div>
                      <div className="text-[10px] opacity-50 font-bold uppercase">Unit Price</div>
                    </td>

                    <td>
                      <span className="bg-stone-100 dark:bg-stone-700 px-3 py-1 rounded-full font-medium">
                        x{order.quantity}
                      </span>
                    </td>

                    <td>
                      <div className="flex items-center gap-2 text-sm mb-1">
                        <FaMapMarkerAlt className="text-orange-500 text-xs" />
                        <span className="truncate max-w-[150px]">{order.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm opacity-70">
                        <FaPhoneAlt className="text-orange-500 text-xs" />
                        {order.phone}
                      </div>
                    </td>

                    <td>
                      {/* Added a dynamic status badge for visual polish */}
                      <div className="badge badge-success badge-outline gap-2 font-semibold p-3">
                        <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
                        Confirmed
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-20">
                    <div className="flex flex-col items-center opacity-40">
                       <FaShoppingBag className="text-6xl mb-4" />
                       <p className="text-xl italic">You haven't placed any orders yet.</p>
                    </div>
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

export default MyOrders;