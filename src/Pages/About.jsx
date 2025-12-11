import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const About = () => {
  return (
    <>
    <div>
      <Helmet>
        <title>GameHub - About</title>
      </Helmet>
    </div>

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 flex flex-col gap-12">
      
     
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-white">
          About Our GameHub
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Dive into a world of thrilling games, top-rated adventures, and endless fun. 
          We curate the best titles for gamers of all kinds and bring them to you with a sleek, gamish experience.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <Link to='/games'> <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl">
          <div className="text-6xl mb-4 animate-bounce">🎮</div>
          <h2 className="text-2xl font-bold mb-2">Game Collection</h2>
          <p className="text-gray-300 text-center">
            Explore top-rated, indie, and classic games all in one place.
          </p>
        </div></Link>

       <Link to='/games'> <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl">
          <div className="text-6xl mb-4 animate-spin">⭐</div>
          <h2 className="text-2xl font-bold mb-2">Top Ratings</h2>
          <p className="text-gray-300 text-center">
            Discover the highest-rated games, carefully curated for you.
          </p>
        </div></Link>

       <Link to='/games'> <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl">
          <div className="text-6xl mb-4 animate-bounce">💡</div>
          <h2 className="text-2xl font-bold mb-2">Tips & Guides</h2>
          <p className="text-gray-300 text-center">
            Learn pro tips, walkthroughs, and secret strategies to level up.
          </p>
        </div></Link>
      </section>

      
      <section className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-center mb-4">Our Mission</h2>
        <p className="text-gray-300 text-center text-lg">
          At GameHub, our mission is to bring gamers together in a vibrant, immersive, and safe gaming community. 
          We focus on curating the best games, keeping our platform sleek and gamish, and providing a space where players can explore, compete, and grow.
        </p>
      </section>

    
      <section className="text-center">
        <p className="mb-4 text-lg text-gray-300">Ready to explore the adventure?</p>
       <Link to='/games'>
        <button className="px-6 py-3 bg-gradient-to-r from-blue-700 to-white rounded-full font-bold text-black  text-2xl transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
          Explore Games
        </button>
       </Link>
      </section>

    </div>
    </>
  );
};

export default About;
