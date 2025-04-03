import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeartHandshake, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <HeartHandshake className="h-6 w-6 text-donation-primary" />
          <span className="font-bold text-xl text-donation-primary">Need-Donation</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-donation-primary transition-colors">
            Home
          </Link>
          <Link to="/patients" className="text-sm font-medium text-gray-700 hover:text-donation-primary transition-colors">
            Patients
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium text-gray-700 hover:text-donation-primary transition-colors">
            How It Works
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-donation-primary transition-colors">
            About Us
          </Link>
        </nav>
        
        <div className="hidden md:block">
          <Link to="/upload-patient">
            <Button className="bg-donation-primary hover:bg-donation-secondary">
              Raise Donation
            </Button>
          </Link>
        </div>
        
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium text-gray-700 hover:text-donation-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/patients" 
              className="text-sm font-medium text-gray-700 hover:text-donation-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Patients
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-sm font-medium text-gray-700 hover:text-donation-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-gray-700 hover:text-donation-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/upload-patient" 
              className="inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-donation-primary hover:bg-donation-secondary">
                Raise Donation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
