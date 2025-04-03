
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Target, Clock, Users } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Dr. Aisha Patel",
      role: "Founder & CEO",
      bio: "A medical professional with 15 years of experience who saw firsthand the financial burden on patients."
    },
    {
      name: "Raj Sharma",
      role: "Technical Director",
      bio: "An IT professional dedicated to creating transparent platforms for social causes."
    },
    {
      name: "Sarah Johnson",
      role: "Operations Head",
      bio: "With experience in healthcare administration, Sarah ensures smooth verification processes."
    },
    {
      name: "Michael Chen",
      role: "Outreach Coordinator",
      bio: "Passionate about connecting donors with those in need through transparent channels."
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-donation-primary" fill="#3b82f6" />,
      title: "Compassion",
      description: "We believe in the power of empathy and kindness to transform lives."
    },
    {
      icon: <Target className="h-8 w-8 text-donation-primary" />,
      title: "Transparency",
      description: "We operate with complete openness in all our processes and transactions."
    },
    {
      icon: <Clock className="h-8 w-8 text-donation-primary" />,
      title: "Efficiency",
      description: "We ensure quick verification and fund transfers to help patients when they need it most."
    },
    {
      icon: <Users className="h-8 w-8 text-donation-primary" />,
      title: "Community",
      description: "We foster a community of givers and receivers built on trust and support."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
              About Need-Donation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A platform created to bridge the gap between patients in need and donors willing to help, without any intermediary fees.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Medical care" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Need-Donation was born from a simple yet powerful observation: too many patients were unable to afford critical medical care, while many people wanted to help but were hesitant due to the lack of transparency in traditional donation channels.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Founded in 2023, our platform aims to create a direct bridge between donors and patients, eliminating administrative fees and ensuring 100% of donations reach those in need.
                </p>
                <p className="text-lg text-gray-600">
                  What started as a small initiative has grown into a trusted platform that has helped hundreds of patients receive the medical care they desperately needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="mx-auto mb-4 bg-blue-50 p-3 rounded-full inline-block">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-donation-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              "To create a world where financial constraints never prevent anyone from receiving the medical care they need, by fostering a community of direct giving and absolute transparency."
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
