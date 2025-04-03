
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, CheckCircle, Users, CreditCard, AlertCircle, RefreshCw } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Patient Registration",
      description: "Verified patients or their representatives can register on our platform by submitting required documentation for validation.",
      icon: <Users className="h-10 w-10 text-donation-primary" />
    },
    {
      title: "Verification Process",
      description: "Our team verifies the authenticity of the medical emergency and documentation to ensure transparency.",
      icon: <CheckCircle className="h-10 w-10 text-donation-primary" />
    },
    {
      title: "Direct Donation",
      description: "Donors can contribute directly to patients via UPI or other payment methods without any intermediary fees.",
      icon: <CreditCard className="h-10 w-10 text-donation-primary" />
    },
    {
      title: "Transparency",
      description: "All donations are visible on the patient's page, ensuring full accountability and transparency.",
      icon: <AlertCircle className="h-10 w-10 text-donation-primary" />
    },
    {
      title: "Updates & Follow-ups",
      description: "Regular updates on patient's progress are shared with donors to maintain an open communication channel.",
      icon: <RefreshCw className="h-10 w-10 text-donation-primary" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block p-2 bg-blue-100 rounded-full mb-4">
              <Heart className="h-8 w-8 text-donation-primary" fill="#3b82f6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
              How Need-Donation Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform connects donors directly with patients, ensuring 100% of your donation reaches those who need it, with no platform fees or commissions.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">The Process</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <Card key={index} className="card-hover border border-gray-100">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-6 mt-4 bg-blue-50 p-3 rounded-full">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Need-Donation?</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-donation-primary" /> Zero Platform Fees
                </h3>
                <p className="text-gray-600">
                  Unlike other platforms, we don't charge any commission on donations. 100% of your contribution goes directly to the patient.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-donation-primary" /> Direct Beneficiary Contact
                </h3>
                <p className="text-gray-600">
                  Connect directly with patients or their families, ensuring transparency and building trust.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-donation-primary" /> Verified Cases
                </h3>
                <p className="text-gray-600">
                  All patient cases are thoroughly verified to ensure authenticity before they're listed on our platform.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-donation-primary" /> Transparent Tracking
                </h3>
                <p className="text-gray-600">
                  Track donations and patient updates in real-time, ensuring full transparency throughout the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
