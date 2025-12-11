import React from 'react';

const BannerSlider = () => {
  return (
    <div className="carousel w-full h-[550px]">
  <div id="slide1" className="carousel-item relative flex  bg-amber-50 w-full h-full">
    <img
      src= "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
      className="w-[50%] h-full object-top " />
      <img className='w-1/2 h-full' src='https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D'></img>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img className='w-1/2 h-full'
      src='https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0fGVufDB8fDB8fHww'
      
       />
      <img className='w-1/2 h-full' src='https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D' />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src= 'https://media.istockphoto.com/id/185291310/photo/dog-food-in-bowl.webp?a=1&b=1&s=612x612&w=0&k=20&c=CPGXSsZPa5kkXU5OCWSAThjfFn5n7InEQTniFOhFzTE='

      className="w-[50%] h-full " />
      <img src='https://images.unsplash.com/photo-1608408891486-f5cade977d19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGV0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D' 
      className='w-1/2 h-full'/>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
 
</div>
  );
};
export default BannerSlider;
