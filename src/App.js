import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/dashboard/pages/home/Home';
import Users from './components/dashboard/pages/users/Users';
import Create from './components/dashboard/pages/users/create';
import Update from './components/dashboard/pages/users/update';
import Dashboard from './components/dashboard/fp/dashboard';
import Loginn from "./components/login0/login0";

function App() {
  return (
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginn />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
        
  </BrowserRouter>      
  );
}

export default App;
