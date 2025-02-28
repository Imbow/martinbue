
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white hover:text-gray-200 transition-colors">
              <img src="/lovable-uploads/60348b7b-1316-460a-a64a-92fde2ce047d.png" alt="Martin Bue Logo" className="h-8 w-auto" />
              Martin Bue
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-gray-200 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
              <Link
                to="/work"
                className={`text-white hover:text-gray-200 transition-colors ${
                  location.pathname === "/work" ? "border-b-2 border-white" : ""
                }`}
              >
                Work
              </Link>
              <Link
                to="/about"
                className={`text-white hover:text-gray-200 transition-colors ${
                  location.pathname === "/about" ? "border-b-2 border-white" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-white hover:text-gray-200 transition-colors ${
                  location.pathname === "/contact" ? "border-b-2 border-white" : ""
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="https://www.instagram.com/martinbue90/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/work"
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Work
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <a 
                  href="https://www.instagram.com/martinbue90/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Instagram
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
