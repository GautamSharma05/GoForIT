import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Home from './pages/home_page/Home';
import AllHotel from './pages/hotel_rooms/AllHotel';
import Login from './pages/login/Login';
import Otp from './pages/login/OTP/Otp';
import Service from './pages/service_page/Service';
function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/GoForIT" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/hotel-rooms" element={<AllHotel />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Otp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
