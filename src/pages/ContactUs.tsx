
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Our team is here to help.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 mt-4 bg-blue-50 p-3 rounded-full">
                    <Mail className="h-8 w-8 text-donation-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">support@need-donation.com</p>
                  <p className="text-gray-600">info@need-donation.com</p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 mt-4 bg-blue-50 p-3 rounded-full">
                    <Phone className="h-8 w-8 text-donation-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 12345 67890</p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 mt-4 bg-blue-50 p-3 rounded-full">
                    <MapPin className="h-8 w-8 text-donation-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">123 Health Avenue,</p>
                  <p className="text-gray-600">Bangalore, Karnataka, India</p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 mt-4 bg-blue-50 p-3 rounded-full">
                    <Clock className="h-8 w-8 text-donation-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                  <p className="text-gray-600">Monday to Friday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4">
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Your full name" 
                        required 
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Your email address" 
                        required 
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        placeholder="Subject of your message" 
                        required 
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Your message" 
                        rows={5} 
                        required 
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-donation-primary" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">How Can We Help?</h3>
                  <p className="text-gray-600 mb-6">
                    Our team is here to assist you with any questions about our platform, donation process, or patient verification. Whether you're a donor looking to contribute or a patient seeking help, we're here for you.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    If you're interested in volunteering, partnering with us, or learning more about our mission, drop us a message. We're always looking for passionate individuals and organizations to help us make healthcare accessible to all.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Emergency Contact</h4>
                  <p className="text-gray-700">
                    For urgent matters related to patient verification or donation issues, please call our emergency support line: +91 98765 11111
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
