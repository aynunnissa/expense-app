import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from './Layout/Layout';
import History from './History';
import Dashboard from './Dashboard';
import Planning from './Planning';

import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/plan" element={<Planning />} />
      </Routes>
    </Layout>
  );
}

export default App;
