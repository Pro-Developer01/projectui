
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login'
import Otp from './components/Login/Otp';
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route path="/sentotp" element={<Otp />} />
      
      </Routes>
    </Router>
  )
}

export default App
