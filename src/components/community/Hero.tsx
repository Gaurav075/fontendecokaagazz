import React from 'react'

const Header = () => {
  return (
    <div className="relative bg-white shadow-md rounded-b-2xl overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1529429611276-203c9793b27c?auto=format&fit=crop&w=1500&q=80"
      alt="Hero"
      className="w-full h-48 sm:h-64 object-cover"
    />
    <div className="absolute inset-0 bg-gray-300 flex flex-col justify-center items-center text-white px-4 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">The World of Kaagazz</h1>
      <p className="text-sm sm:text-base max-w-xl">
        Join a network of eco-warriors. Share ideas, learn from success stories, and get tips to become more sustainable. Let’s achieve a cleaner environment together!
      </p>
      <button className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm shadow hover:bg-gray-100 transition">
        Join Community →
      </button>
    </div>
  </div>
  )
}

export default Header
