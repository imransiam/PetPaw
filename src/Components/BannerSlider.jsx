import React from 'react';
import { Link } from 'react-router';

const BannerSlider = () => {
  const slides = [
    {
      id: "slide1",
      prev: "#slide3",
      next: "#slide2",
      img1: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop",
      img2: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&auto=format&fit=crop",
      title: "Best Friends Deserve Best Care",
      sub: "Explore our premium grooming & health services."
    },
    {
      id: "slide2",
      prev: "#slide1",
      next: "#slide3",
      img1: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=800&auto=format&fit=crop",
      img2: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=800&auto=format&fit=crop",
      title: "Purr-fect Comfort for Cats",
      sub: "Cozy beds, toys, and nutritious treats for your feline."
    },
    {
      id: "slide3",
      prev: "#slide2",
      next: "#slide1",
      img1: "https://media.istockphoto.com/id/185291310/photo/dog-food-in-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=CPGXSsZPa5kkXU5OCWSAThjfFn5n7InEQTniFOhFzTE=",
      img2: "https://images.unsplash.com/photo-1608408891486-f5cade977d19?w=800&auto=format&fit=crop",
      title: "Healthy Meals, Happy Tails",
      sub: "Organics and minerals packed in every bite."
    }
  ];

  return (
    <div className="carousel w-full h-[400px] md:h-[550px] shadow-2xl">
      {slides.map((slide) => (
        <div key={slide.id} id={slide.id} className="carousel-item relative w-full h-full group">
          
          <div className="flex w-full h-full overflow-hidden">
            <img src={slide.img1} className="w-1/2 h-full object-cover brightness-75" alt="Pet" />
            <img src={slide.img2} className="w-1/2 h-full object-cover brightness-75" alt="Pet" />
          </div>

          
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
              {slide.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-lg mb-6 drop-shadow-md">
              {slide.sub}
            </p>
           <Link to={'/services'}> <button className="btn bg-orange-600 hover:bg-orange-700 border-none text-white px-8 rounded-full">
              Shop Now
            </button></Link>
          </div>

         
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a href={slide.prev} className="btn btn-circle bg-white/20 border-none hover:bg-white/40 text-white">❮</a>
            <a href={slide.next} className="btn btn-circle bg-white/20 border-none hover:bg-white/40 text-white">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerSlider;