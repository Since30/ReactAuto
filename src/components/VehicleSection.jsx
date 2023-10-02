import React from "react";
import VehicleCard from "./VehicleCard";

const VehicleSection = () => {
  const vehicles = [
    {
      image: "../assets/Vehicles/DS5.jpg",
      title: "Citröen DS5",
      price: 15000,
    },
    {
      image: "../assets/Vehicles/Hybrid-2.png",
      title: "TOYOTA AYGO",
      price: 13000,
    },
    {
        image: "../assets/Vehicles/Hybrid-3.jpg",
        title: "RENAULT CAPTUR",
        price: 18000,
      },
    // ... Ajoutez autant de véhicules que nécessaire
  ];

  return (
    <section className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Véhicules à Vendre</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hover:scale-90 ease-in-out duration-300">
        {vehicles.map((vehicle, index) => (
          <VehicleCard key={index} {...vehicle} />
        ))}
      </div>
    </section>
  );
};

export default VehicleSection;
