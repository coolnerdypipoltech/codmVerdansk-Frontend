import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SpashScreen/SplashScreen';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import FaqsPage from './pages/Faqs/FaqsPage';
import CreatorsPage from './pages/Creators/CreatorsPage';
import RegisterPage from './pages/Register/RegisterPage';

import './App.css';
import './variables.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SplashScreen></SplashScreen>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/faqs" element={<FaqsPage  />} />
            <Route path="/creators" element={<CreatorsPage  />} />
            <Route path="/register" element={<RegisterPage  />} />
            

            <Route path="*" element={<HomePage  />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
