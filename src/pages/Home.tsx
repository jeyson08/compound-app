import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-lg bg-white shadow-md rounded-lg text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Accueil</h2>
        <p className="mt-4 text-gray-600">
          Ceci est la page d'accueil de votre application.
        </p>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Cliquez ici
        </button>
      </div>
    </div>
  );
};

export default Home;
