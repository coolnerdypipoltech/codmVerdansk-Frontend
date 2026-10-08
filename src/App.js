import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import FaqsPage from './pages/Faqs/FaqsPage';
import CreatorsPage from './pages/Creators/CreatorsPage';
import './App.css';
import './variables.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/faqs" element={<FaqsPage  />} />
            <Route path="/creators" element={<CreatorsPage  />} />
           
            <Route path="*" element={<HomePage  />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
