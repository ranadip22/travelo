// import "./App.css"
import Offers from "./components/offers/Offers.jsx"
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/user/Login.jsx";
import TourType from "./components/tour-type/TourType.jsx";
import MostPopular from "./components/most-popular/Most-popular.jsx";
import Reviews from "./components/reviews/Reviews.jsx";
import Newsletter from "./components/newsletter/Newsletter.jsx";
import Register from "./components/user/Register.jsx";
import Forgot from "./components/user/Forgot.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import Dashboard from "./components/user/Dashboard.jsx";
import SearchResult from "./components/search-result/SearchResult.jsx";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/package" element={<Packages />} /> */}
            {/* <Route path="/destination" element={<Destination />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/#packages" element={<Offers />} />
            <Route path="#tours" element={<TourType />} />
            <Route path="#destination" element={<MostPopular />} />
            <Route path="#reviews" element={<Reviews />} />
            <Route path="#newsletter" element={<Newsletter />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
