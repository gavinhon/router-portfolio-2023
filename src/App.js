import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Works from './components/pages/Works';
import About from './components/pages/About';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <main className='container'>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/works' element={<Works />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
