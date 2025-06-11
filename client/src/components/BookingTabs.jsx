import React from "react";

const tabs = ["Upcoming", "Pending", "Completed", "Cancelled"];

const BookingTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs tabs-bordered mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab tab-bordered ${tab === activeTab ? "tab-active text-blue-600 font-medium" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default BookingTabs;
