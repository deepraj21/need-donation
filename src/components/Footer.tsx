
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-donation-primary" fill="#3b82f6" />
              <span className="font-bold text-xl text-donation-primary">Need-Donation</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Connecting donors directly with patients in need, ensuring 100% of donations reach beneficiaries.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-donation-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/patients" className="text-sm text-gray-600 hover:text-donation-primary transition-colors">
                  Patients
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-600 hover:text-donation-primary transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-donation-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-donation-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/upload-patient" className="text-sm text-gray-600 hover:text-donation-primary transition-colors">
                  Raise Donation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-donation-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-donation-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-600">
            © {new Date().getFullYear()} Need-Donation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
