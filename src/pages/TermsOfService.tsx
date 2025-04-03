
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <FileText className="h-12 w-12 text-donation-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
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
                Please read these Terms of Service ("Terms") carefully before using the Need-Donation platform. These Terms govern your access to and use of Need-Donation's website, services, and content. By accessing or using our platform, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. About Our Platform</h2>
              <p className="text-gray-600 mb-6">
                Need-Donation is a platform that connects patients in need of financial assistance for medical treatment with individuals willing to donate. We provide a space for patients to share their stories and verification details, and for donors to connect directly with them. We do not handle or process any donations directly—all transactions occur between donors and patients without our involvement.
              </p>
              
              <Separator className="my-8" />
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. User Accounts</h2>
              <p className="text-gray-600 mb-4">By creating an account on our platform, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information as needed</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use or security breach</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Patient Verification and Listings</h2>
              <p className="text-gray-600 mb-4">For patients or their representatives:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>You must provide accurate and truthful information about the medical condition, treatment needs, and financial requirements</li>
                <li>You must submit authentic documentation for verification</li>
                <li>You authorize us to verify the information with medical institutions or other relevant parties</li>
                <li>You agree to provide updates on your medical condition and the use of received funds</li>
                <li>You understand that providing false information may result in immediate removal from the platform and potential legal consequences</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Donations</h2>
              <p className="text-gray-600 mb-4">For donors:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>All donations are made directly to patients without our involvement as intermediaries</li>
                <li>We do not charge any fees for facilitating these connections</li>
                <li>You are responsible for verifying the recipient's details before making a donation</li>
                <li>We encourage you to record your donation on the platform for transparency</li>
                <li>Once a donation is made, any disputes must be resolved directly with the recipient</li>
                <li>We do not guarantee that donated funds will be used exactly as described</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Prohibited Activities</h2>
              <p className="text-gray-600 mb-4">Users may not:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide false or misleading information</li>
                <li>Impersonate others or misrepresent their affiliation with any person or entity</li>
                <li>Use the platform for fraudulent purposes</li>
                <li>Harass, threaten, or intimidate other users</li>
                <li>Attempt to access other users' accounts</li>
                <li>Use the platform to solicit for purposes other than medical treatment</li>
                <li>Attempt to bypass any security measures of the platform</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                Need-Donation serves solely as a connection platform and is not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>The accuracy of patient information (despite our verification efforts)</li>
                <li>The outcome of any medical treatment</li>
                <li>How donated funds are used by recipients</li>
                <li>Disputes between donors and patients</li>
                <li>Any direct, indirect, incidental, special, or consequential damages arising from the use of our platform</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content on the platform, including but not limited to text, graphics, logos, and software, is the property of Need-Donation and is protected by intellectual property laws. Users grant us a non-exclusive license to use, display, and distribute content they submit to the platform.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Termination</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to suspend or terminate your access to the platform at our discretion, particularly in cases of Terms violation, fraudulent activity, or misrepresentation.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We may modify these Terms at any time. Continued use of the platform after changes constitutes acceptance of the updated Terms.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-600">
                Email: legal@need-donation.com<br />
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

export default TermsOfService;
