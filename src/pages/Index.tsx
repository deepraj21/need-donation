
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, CreditCard, Users, HandHeart, Shield } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import PatientCard from "@/components/PatientCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockPatients } from "@/lib/data";

const Index = () => {
  // Show only 3 patients on the homepage
  const featuredPatients = mockPatients.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold gradient-heading mb-4">How It Works</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We make the donation process transparent and direct, ensuring your help reaches those who need it most without any intermediary fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <div className="bg-donation-muted p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-donation-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Direct Connection</h3>
                <p className="text-gray-600">
                  We connect donors directly with patients, removing all intermediaries from the donation process.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <div className="bg-donation-muted p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-donation-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Zero Platform Fees</h3>
                <p className="text-gray-600">
                  Unlike other platforms, we charge absolutely no fees, ensuring 100% of donations reach patients.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                <div className="bg-donation-muted p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-donation-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Verified Cases</h3>
                <p className="text-gray-600">
                  All patient cases on our platform are verified with proper documentation for transparency.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/how-it-works">
                <Button variant="outline" className="border-donation-primary text-donation-primary">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Patients */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold gradient-heading mb-2">Patients Needing Help</h2>
                <p className="text-gray-700">Support patients in their journey to recovery.</p>
              </div>
              <Link to="/patients" className="mt-4 md:mt-0">
                <Button variant="outline" className="border-donation-primary text-donation-primary">
                  View All Patients
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPatients.map(patient => (
                <PatientCard key={patient.id} patient={patient} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-donation-muted">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6">
                <Heart className="h-4 w-4 text-donation-pink mr-2" fill="#f9a8d4" />
                <span className="text-sm font-medium">Make a difference today</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to help someone in need?
              </h2>
              
              <p className="text-gray-700 mb-8 md:px-10">
                Whether you want to donate to someone in need or raise funds for yourself or a loved one, we're here to help connect the right people together.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/patients">
                  <Button size="lg" className="bg-donation-primary hover:bg-donation-secondary">
                    <HandHeart className="h-5 w-5 mr-2" />
                    Donate Now
                  </Button>
                </Link>
                <Link to="/upload-patient">
                  <Button size="lg" variant="outline" className="border-donation-primary text-donation-primary">
                    Raise Donation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
