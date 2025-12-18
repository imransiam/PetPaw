import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { FaShoppingBag, FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';
import { jsPDF } from 'jspdf'; 
import autoTable from 'jspdf-autotable'; // 1. Changed import style

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axios.get(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => setMyOrders(res.data))
        .catch(err => console.error("Error fetching orders:", err));
    }
  }, [user?.email]);

  const generatePDF = (order) => {
    console.log("Generating PDF for:", order);
    
    try {
      const doc = new jsPDF();

      // Header Branding
      doc.setFontSize(22);
      doc.setTextColor(234, 88, 12); 
      doc.text("PawMart Order Invoice", 14, 20);
      
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text(`Transaction ID: ${order._id}`, 14, 28);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 33);

      // Customer Info
      doc.setFontSize(12);
      doc.setTextColor(0);
      doc.text("Customer Details", 14, 45);
      doc.line(14, 47, 60, 47); 
      
      doc.setFontSize(10);
      doc.text(`Name: ${user?.displayName || 'Valued Customer'}`, 14, 53);
      doc.text(`Email: ${user?.email}`, 14, 58);
      doc.text(`Phone: ${order.phone || 'N/A'}`, 14, 63);
      doc.text(`Address: ${order.address || 'N/A'}`, 14, 68);

      // 2. Using the standalone autoTable function (Fixes the TypeError)
      autoTable(doc, {
        startY: 75,
        head: [['Product Name', 'Quantity', 'Price (Unit)', 'Subtotal']],
        body: [
          [
            order.productName, 
            order.quantity, 
            `${order.price} BDT`, 
            `${(order.quantity * order.price)} BDT`
          ]
        ],
        headStyles: { fillColor: [234, 88, 12], textColor: [255, 255, 255] },
        alternateRowStyles: { fillColor: [255, 247, 237] },
      });

      // 3. Getting the final position from autoTable
      const finalY = doc.lastAutoTable.finalY + 10;
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text(`Total Amount Paid: ${(order.quantity * order.price)} BDT`, 14, finalY);

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(150);
      doc.text("Thank you for choosing PawMart. This is a computer-generated invoice.", 14, finalY + 15);

      doc.save(`PawMart_Invoice_${order._id.slice(-5)}.pdf`);

    } catch (error) {
      console.error("PDF Generation failed:", error);
      alert("Could not generate PDF. Check if jspdf-autotable is installed.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold flex items-center gap-3">
          <FaShoppingBag className="text-orange-600" /> My Orders
        </h1>
        <p className="opacity-70 mt-2 text-lg">Download your official PawMart receipts</p>
      </div>

      <div className="CardStyle shadow-xl overflow-hidden border-none rounded-2xl">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-orange-600 text-white">
              <tr className="text-sm uppercase tracking-wider">
                <th className="py-4">#</th>
                <th>Item Info</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Delivery Details</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order, index) => (
                <tr key={order._id} className="hover:bg-orange-50/50 dark:hover:bg-stone-800/50 transition-colors border-b border-stone-100 dark:border-stone-800 text-stone-900 dark:text-white">
                  <td className="font-bold opacity-50">{index + 1}</td>
                  <td>
                    <div className="font-bold text-lg">{order.productName}</div>
                    <div className="flex items-center gap-2 text-xs opacity-60 mt-1">
                      <FaCalendarAlt className="text-orange-500" /> {order.date}
                    </div>
                  </td>
                  <td>{order.price} BDT</td>
                  <td>x{order.quantity}</td>
                  <td>
                    <div className="text-sm">{order.address}</div>
                    <div className="text-xs opacity-70">{order.phone}</div>
                  </td>
                  <td>
                    <button 
                      onClick={() => generatePDF(order)}
                      className="btn btn-sm btn-circle btn-ghost text-orange-600 hover:bg-orange-600 hover:text-white"
                    >
                      <FaFileDownload className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;