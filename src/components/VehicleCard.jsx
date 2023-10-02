import React from "react";

const VehicleCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md mb-4 hover:scale-90 ease-in-out duration-300">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-800">€{price}</p>
    </div>
  );
};

export default VehicleCard;
