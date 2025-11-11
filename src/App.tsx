import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatWeDo from './pages/WhatWeDo';
import WhoWeAre from './pages/WhoWeAre';
import EdTech from './pages/EdTech';
import CourseDetail from './pages/CourseDetail';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import InternshipDetail from './pages/InternshipDetail';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/edtech" element={<EdTech />} />
            <Route path="/course/:slug" element={<CourseDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/career/:slug" element={<CareerDetail />} />
            <Route path="/internship/:slug" element={<InternshipDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
