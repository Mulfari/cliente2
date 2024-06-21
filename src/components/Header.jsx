import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Crypto Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="bg-transparent hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
          <span className="sr-only">Toggle user menu</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
