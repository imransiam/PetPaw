import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import { FaPaw, FaHeart, FaShippingFast, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <Helmet>
        <title>PawMart - About Us</title>
      </Helmet>

      <div className="min-h-screen py-12 px-6 flex flex-col gap-16">
        
        
        <section className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-orange-600 tracking-tighter">
            About PawMart
          </h1>
          <p className="opacity-80 max-w-2xl mx-auto text-lg md:text-xl italic">
            Your neighborhood's favorite destination for happy tails and healthy paws. 
            Founded in 2025, we are dedicated to connecting loving families with their perfect pet companions.
          </p>
        </section>

        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          <Link to='/services' className="group">
            <div className="CardStyle p-10 h-full flex flex-col items-center text-center group-hover:-translate-y-3 shadow-xl">
              <div className="bg-orange-100 dark:bg-stone-800 p-6 rounded-full mb-6">
                <FaHeart className="text-5xl text-red-500 animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Pure Love</h2>
              <p className="opacity-70 leading-relaxed">
                Every pet in our community is treated like family. We prioritize adoption and ethical care above all else.
              </p>
            </div>
          </Link>

          <Link to='/services' className="group">
            <div className="CardStyle p-10 h-full flex flex-col items-center text-center group-hover:-translate-y-3 shadow-xl border-orange-200">
              <div className="bg-orange-100 dark:bg-stone-800 p-6 rounded-full mb-6">
                <FaCheckCircle className="text-5xl text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Quality Supplies</h2>
              <p className="opacity-70 leading-relaxed">
                From organic food to premium accessories, we curate only the best products for your furry friends.
              </p>
            </div>
          </Link>

          <Link to='/services' className="group">
            <div className="CardStyle p-10 h-full flex flex-col items-center text-center group-hover:-translate-y-3 shadow-xl">
              <div className="bg-orange-100 dark:bg-stone-800 p-6 rounded-full mb-6">
                <FaShippingFast className="text-5xl text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Fast Delivery</h2>
              <p className="opacity-70 leading-relaxed">
                Need supplies in a hurry? Our local network ensures your orders reach your doorstep in record time.
              </p>
            </div>
          </Link>
        </section>

        
        <section className="container mx-auto">
          <div className="CardStyle p-8 md:p-16 text-center space-y-6 border-none bg-orange-600 text-white shadow-2xl">
            <FaPaw className="text-6xl mx-auto opacity-20 rotate-12" />
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed opacity-90">
              At PawMart, our mission is to simplify pet parenting. Whether you are looking to adopt a new 
              friend or find the best care products, we provide a safe, transparent, and vibrant marketplace 
              where the well-being of animals always comes first.
            </p>
          </div>
        </section>

       
        <section className="text-center pb-12">
          <p className="mb-6 text-xl opacity-80">Ready to meet your new best friend?</p>
          <Link to='/services'>
            <button className="btn bg-orange-600 hover:bg-orange-700 border-none text-white px-10 py-4 rounded-full font-bold text-xl transition-all hover:scale-110 shadow-lg">
              Browse PawMart
            </button>
          </Link>
        </section>

      </div>
    </>
  );
};

export default About;