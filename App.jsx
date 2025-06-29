// src/App.jsx

import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#82CFF7] via-[#ffffff] to-[#58A55C] text-gray-800 font-sans">
      <header className="p-6 bg-[#A3603F] text-white shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">
          Tereré Token Dashboard 🧉
        </h1>
        <p className="text-sm opacity-80">
          Cultura, frescura y Web3 con alma paraguaya 🇵🇾
        </p>
      </header>

      <main className="p-6 max-w-5xl mx-auto space-y-6">
        {/* Acá van los componentes */}
        <section className="bg-white rounded-xl shadow p-5">
          <h2 className="text-xl font-semibold mb-2">Bienvenido, Chamán 🧙‍♂️</h2>
          <p className="text-gray-600">Próximamente verás tu nivel, logros y TR aquí.</p>
        </section>
      </main>

      <footer className="mt-12 p-4 text-center text-sm text-white bg-[#7A7A7A]">
        Hecho con yerba y amor digital por Alan 🍃🧊
      </footer>
    </div>
  );
}

export default App;
