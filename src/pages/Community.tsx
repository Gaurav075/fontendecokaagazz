import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/community/Hero";
import React, { useState } from "react";
import { events } from "../data/events";
import { insights } from "../data/insights";

const tabs = ["About community", "Events", "Insights"];

export default function CommunityTabKaagazz() {
  const [activeTab, setActiveTab] = useState("About community");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <Hero />

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 text-sm font-medium border-b-2 transition duration-300 ${
              activeTab === tab
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-6 max-w-6xl mx-auto">
        {activeTab === "About community" && (
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2">Welcome to our Community 👋🌿✨</h2>
            <p className="text-sm sm:text-base mb-4 text-gray-700">
              Welcome to the World of Kaagazz! This is more than just a space—it’s a movement...
            </p>
            <details className="mb-4">
              <summary className="cursor-pointer text-sm font-medium text-gray-800">What is this community for?</summary>
              <p className="mt-2 text-sm text-gray-700">
                By being a part of this community, you gain access to a world of creativity...
              </p>
            </details>
            <p className="text-sm sm:text-base font-medium">
              Join us as we redefine the future of sustainable stationery and craftsmanship...
            </p>
          </div>
        )}

        {activeTab === "Events" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow p-4 flex flex-col"
              >
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="h-60 w-full object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
                <p className="text-sm mt-2 text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Insights" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {insights.map((insight) => (
              <div
                key={insight.id}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
              >
                <h3 className="text-base font-semibold mb-1">{insight.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{insight.date}</p>
                <p className="text-sm text-gray-700">{insight.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Social Media Placeholder */}
      <div className="p-4 sm:p-6 bg-white border-t mt-8">
        <h3 className="text-base sm:text-lg font-semibold mb-4">Latest from Social Media</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {["Instagram", "LinkedIn"].map((platform) => (
            <div
              key={platform}
              className="h-28 sm:h-32 bg-gray-100 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm"
            >
              Embed {platform} Feed
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
