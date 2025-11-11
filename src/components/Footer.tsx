import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/logo-trishuvaan.png"
              alt="Trishuvaan"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-sm text-gray-300">
              Empowering Industry-Ready AI Professionals
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-300 hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/who-we-are" className="text-gray-300 hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/edtech" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:support@trishuvaan.com" className="hover:text-white transition-colors">
                  support@trishuvaan.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Globe size={16} />
                <span>www.trishuvaan.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © 2025 Trishuvaan | Empowering Industry-Ready AI Professionals
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
