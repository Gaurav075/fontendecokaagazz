import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/community/Hero";
import { events } from "../data/events";
import { insights } from "../data/insights";
import TabNavigation from "../components/community/TabNavigation";
import AboutCommunity from "../components/community/AboutCommunity";
import EventsGrid from "../components/community/EventsGrid";
import InsightsGrid from "../components/community/InsightsGrid";

const tabs = ["About community", "Events", "Insights"];

export default function CommunityTabKaagazz() {
  const [activeTab, setActiveTab] = useState("About community");

  return (
    <>
      <Header />
      <div className="min-h-screen font-serif bg-gray-50 text-gray-800">
        <Hero />

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="p-4 sm:p-6 max-w-6xl mx-auto">
          {activeTab === "About community" && <AboutCommunity />}
          {activeTab === "Events" && <EventsGrid events={events} />}
          {activeTab === "Insights" && <InsightsGrid insights={insights} />}
        </div>
        <Footer />
      </div>
    </>
  );
}