
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, ArrowRight, HandHeart, CreditCard } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full bg-donation-muted px-3 py-1 text-sm">
              <Heart className="h-4 w-4 text-donation-pink mr-1" fill="#f9a8d4" />
              <span className="text-donation-primary font-medium">100% Donation Reach</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-heading leading-tight">
              Direct Connect, Maximum Impact
            </h1>
            
            <p className="text-lg text-gray-700 md:pr-8">
              We connect donors directly with patients in need, ensuring 100% of your donation reaches the beneficiaries with no platform fees, taxes, or hidden charges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/patients">
                <Button size="lg" className="bg-donation-primary hover:bg-donation-secondary">
                  Donate Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/upload-patient">
                <Button size="lg" variant="outline" className="border-donation-primary text-donation-primary">
                  Raise Donation
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-donation-muted rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-donation-muted p-3 rounded-full">
                    <HandHeart className="h-6 w-6 text-donation-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Direct Beneficiary Contact</h3>
                    <p className="text-sm text-gray-600">Connect directly with patients</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-donation-muted p-3 rounded-full">
                    <CreditCard className="h-6 w-6 text-donation-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">No Extra Charges</h3>
                    <p className="text-sm text-gray-600">100% of your donation reaches patients</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">We are just a medium, not a 3rd party</p>
                    <div className="bg-donation-muted rounded-full py-2 px-4 inline-flex items-center">
                      <Heart className="h-4 w-4 text-donation-pink mr-1" fill="#f9a8d4" />
                      <span className="text-sm font-medium">Spreading Hope</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
