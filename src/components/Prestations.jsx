import React from "react";

const Prestations = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Nos Prestations Automobiles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PrestationCard
          title="Entretien & Réparations"
          description="Nous proposons une gamme complète de services d'entretien et de réparations pour votre véhicule."
        />
        <PrestationCard
          title="Diagnostic Avancé"
          description="Nos techniciens utilisent les dernières technologies pour diagnostiquer et résoudre les problèmes de votre véhicule."
        />
        <PrestationCard
          title="Préparation à la Vente"
          description="Mettez en valeur votre véhicule d'occasion avec nos services de préparation à la vente."
        />
        {/* Ajoutez autant de cartes de prestation que nécessaire */}
      </div>
    </div>
  );
};

const PrestationCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default Prestations;
