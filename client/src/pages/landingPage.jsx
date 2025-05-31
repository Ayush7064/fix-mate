import React, { useEffect, useState } from "react";
import api from "../api/api"; // adjust the path if needed

export default function LandingPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/providers")
      .then((res) => {
        setData(res.data.data); // assuming response shape is { data: [...] }
        setLoading(false);
        console.log(res.data.data);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">No data available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Service Provider Emails
        </h1>

        <ul className="space-y-3 text-lg text-gray-700">
          {data.map((provider, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded shadow hover:bg-blue-50 transition"
            >
             <p> {provider.email || "No email available"}</p>
             <p>{provider.location.city}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
