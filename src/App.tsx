import { Route, Routes } from "react-router-dom";

import Layout from './Layout/Layout';
import Home from './Home';
import History from './History';
import Dashboard from './Dashboard';
import NewExp from './NewExpense';

import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/statistic" element={<Dashboard />} />
        <Route path="/new" element={<NewExp />} />
      </Routes>
    </Layout>
  );
}

export default App;
