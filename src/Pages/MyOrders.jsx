import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaShoppingBag, FaCalendarAlt, FaFileDownload } from 'react-icons/fa';
import { jsPDF } from 'jspdf'; 
import autoTable from 'jspdf-autotable';

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axios.get(`https://assignment10-backend-three.vercel.app/orders?email=${user?.email}`)
        .then(res => setMyOrders(res.data))
        .catch(err => console.error("Error fetching orders:", err));
    }
  }, [user?.email]);

  const generatePDF = (order) => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(22);
      doc.setTextColor(234, 88, 12); 
      doc.text("PawMart Order Invoice", 14, 20);
      doc.setFontSize(10);
      doc.text(`Transaction: ${order._id}`, 14, 28);
      
      autoTable(doc, {
        startY: 40,
        head: [['Product', 'Qty', 'Price', 'Total']],
        body: [[order.productName, order.quantity, `${order.price} BDT`, `${(order.quantity * order.price)} BDT`]],
        headStyles: { fillColor: [234, 88, 12] },
      });
      doc.save(`Invoice_${order._id.slice(-5)}.pdf`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      
      <div className="mb-10">
        <h1 className="text-4xl font-bold flex items-center gap-3 text-inherit">
          <FaShoppingBag className="text-orange-600" /> 
          <span>My Orders</span>
        </h1>
        <p className="mt-2 text-lg opacity-80 text-inherit">
          Manage your purchases and receipts
        </p>
      </div>

      
      <div className="CardStyle overflow-hidden">
        <div className="overflow-x-auto">
         
          <table className="w-full text-left">
            <thead className="bg-orange-600 text-white">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4">Item Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Qty</th>
                <th className="p-4">Shipping Info</th>
                <th className="p-4 text-center">Invoice</th>
              </tr>
            </thead>
            <tbody className="text-inherit">
              {myOrders.map((order, index) => (
                <tr 
                  key={order._id} 
                  className="border-b border-orange-100 dark:border-stone-800 hover:bg-orange-50/30 dark:hover:bg-stone-800/30 transition-all"
                >
                  <td className="p-4 font-bold opacity-50">{index + 1}</td>
                  
                  <td className="p-4">
                    <div className="font-bold text-lg">{order.productName}</div>
                    <div className="flex items-center gap-2 text-xs opacity-60">
                      <FaCalendarAlt className="text-orange-500" /> {order.date || 'Recent'}
                    </div>
                  </td>

                  <td className="p-4 font-semibold">{order.price} BDT</td>
                  <td className="p-4">x{order.quantity}</td>
                  
                  <td className="p-4">
                    <div className="text-sm font-medium">{order.address}</div>
                    <div className="text-xs opacity-70">{order.phone}</div>
                  </td>

                  <td className="p-4 text-center">
                    <button 
                      onClick={() => generatePDF(order)}
                      className="p-2 rounded-full text-orange-600 hover:bg-orange-600 hover:text-white transition-all"
                    >
                      <FaFileDownload size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {myOrders.length === 0 && (
            <div className="text-center py-20 italic opacity-50">
              No orders found in your history.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;