import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="bg-gray-800 text-gray-400 p-6 w-64 flex flex-col gap-6">
      <Link to="/portfolio" className="flex items-center gap-2 text-white font-medium">
        <span>Portfolio</span>
      </Link>
      <Link to="/recent-transactions" className="flex items-center gap-2">
        <span>Recent Transactions</span>
      </Link>
      <Link to="/crypto-prices" className="flex items-center gap-2">
        <span>Crypto Prices</span>
      </Link>
      <Link to="/alerts" className="flex items-center gap-2">
        <span>Alerts</span>
      </Link>
    </nav>
  );
}

export default Sidebar;
