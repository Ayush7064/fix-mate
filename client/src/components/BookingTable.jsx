import React from "react";
import BookingRow from "./BookingRow";

const mockData = [
  {
    service: "Plumbing Repair",
    date: "July 15, 2024",
    time: "2:00 PM",
    status: "Pending",
  },
  {
    service: "Electrical Installation",
    date: "July 18, 2024",
    time: "10:00 AM",
    status: "Pending",
  },
  {
    service: "Appliance Repair",
    date: "July 20, 2024",
    time: "3:00 PM",
    status: "Pending",
  },
];

const BookingTable = ({ activeTab }) => {
  const filtered = mockData.filter((item) => item.status === activeTab);

  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white">
      <table className="table w-full">
        <thead>
          <tr className="bg-gray-50">
            <th>Service</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, idx) => (
            <BookingRow key={idx} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
