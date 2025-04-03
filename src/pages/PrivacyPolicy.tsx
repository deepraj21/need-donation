
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-12 w-12 text-donation-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Last updated: June 15, 2023
            </p>
          </div>
        </div>
        
        {/* Content */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Need-Donation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We collect information that you provide directly to us when you:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Register as a patient or donor on our platform</li>
                <li>Upload medical documents and verification details</li>
                <li>Make or record a donation</li>
                <li>Contact us with inquiries</li>
                <li>Respond to surveys or questionnaires</li>
              </ul>
              
              <p className="text-gray-600 mb-4">The types of information we may collect include:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Personal identifiers (name, email address, phone number)</li>
                <li>Medical information (for patients)</li>
                <li>Financial information (UPI IDs, bank account details for receiving donations)</li>
                <li>Identity verification documents</li>
                <li>Donation records</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Verify patient authenticity and need</li>
                <li>Facilitate direct donations between donors and patients</li>
                <li>Maintain donation transparency</li>
                <li>Improve our platform and user experience</li>
                <li>Communicate with you about your account or transactions</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Send you updates about the platform (with your consent)</li>
              </ul>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                As our core principle is direct connection between donors and patients, certain information is intentionally shared to facilitate this process. However, we limit sharing to what is necessary and appropriate:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li><strong>Patient Information:</strong> Medical condition, treatment details, and financial need are publicly displayed (with consent) to help donors understand the case. Contact information is shared to enable direct donations.</li>
                <li><strong>Donor Information:</strong> Donors can choose whether their name appears on public donation lists.</li>
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your personal information. However, no Internet transmission is completely secure, and we cannot guarantee the security of your information.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">You may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Access and update your personal information</li>
                <li>Request deletion of your information</li>
                <li>Object to or restrict certain processing</li>
                <li>Withdraw consent (where applicable)</li>
                <li>Opt out of marketing communications</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 mb-6">
                Our services are not directed to children under 18 years of age. For minor patients, we require a legal guardian to manage the profile and any collected information.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Changes to this Privacy Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy frequently.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: privacy@need-donation.com<br />
                Phone: +91 98765 43210<br />
                Address: 123 Health Avenue, Bangalore, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
