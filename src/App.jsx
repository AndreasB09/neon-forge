import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App;
