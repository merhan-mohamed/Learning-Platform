import React from 'react'

const StatCard = ({ title, value, color }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between min-h-[120px]">
      <div>
        <p className="text-sm text-gray-500">
          {title}
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mt-2">
          {value}
        </h2>
      </div>

      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${color}`}
      >
        <span className="text-lg font-bold">#</span>
      </div>
    </div>
  );
};

export default StatCard;