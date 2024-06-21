import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Portfolio from './components/Portfolio';
import Transactions from './components/Transactions';
import Prices from './components/Prices';
import Alerts from './components/Alerts';

const App = () => {
  return (
    <div className="flex">
      <Dashboard />
      <div className="flex-1 p-8 bg-gray-100 dark:bg-gray-800">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
