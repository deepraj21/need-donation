
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Search } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqItems = [
    {
      question: "How does Need-Donation work?",
      answer: "Need-Donation is a platform that connects patients in need with potential donors. Patients or their representatives can register, upload verification documents, and share their story. Donors can browse through verified cases and donate directly to the patient via UPI or other payment methods. We don't collect or handle any donation money, ensuring 100% of the funds go directly to the beneficiary."
    },
    {
      question: "Is there any fee for using the platform?",
      answer: "No, Need-Donation does not charge any platform fees, commission, or transaction costs. We believe in creating a transparent medium where 100% of the donation reaches the beneficiary. Our platform is supported by voluntary contributions and partnerships."
    },
    {
      question: "How are patients verified?",
      answer: "All patients undergo a thorough verification process. We require medical documentation, proof of identity, and hospital bills/estimates. Our team cross-verifies this information with the medical institution and ensures the case is genuine before it's listed on our platform."
    },
    {
      question: "How can I donate to a patient?",
      answer: "Simply browse through the verified patients, select one you wish to help, and click the 'Donate' button. You'll be provided with direct payment details (UPI ID, bank account) of the patient. After making the donation, you can update the donation amount on the patient's page for transparency."
    },
    {
      question: "Can I get updates about the patient I donated to?",
      answer: "Yes, patients are encouraged to post regular updates on their profile. Additionally, you can contact them directly using the provided contact information (with their consent) to check on their progress."
    },
    {
      question: "How can I list myself or someone as a patient?",
      answer: "Click on the 'Raise Donation' button and fill out the detailed form. You'll need to provide personal information, medical details, required documents for verification, and payment information. Our team will review your application and might contact you for additional information before listing."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Since donations are made directly to individuals and not through our platform, they may not qualify for tax deductions under most tax laws. However, we recommend consulting with a tax professional regarding your specific situation."
    },
    {
      question: "How is my personal information protected?",
      answer: "We take data privacy seriously. While basic information is displayed to facilitate direct donations, sensitive details are protected. Please review our Privacy Policy for comprehensive information on how we handle personal data."
    },
    {
      question: "Can I donate anonymously?",
      answer: "Yes, when updating the donation record, you can choose to remain anonymous. Your name will not be displayed on the public donation list, but the amount will still be shown for transparency."
    },
    {
      question: "What happens if a patient receives more donations than required?",
      answer: "We encourage patients to update their status when they've received sufficient funds. If excess donations are received, patients are advised to either return them or, with the donor's permission, pass them on to other patients in need."
    }
  ];
  
  const filteredFAQs = searchQuery 
    ? faqItems.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqItems;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about Need-Donation, our verification process, and how to use our platform.
            </p>
          </div>
        </div>

        {/* FAQ Search */}
        <div className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto flex">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
              <Button 
                className="ml-2 bg-donation-primary" 
                onClick={() => setSearchQuery("")}
                disabled={!searchQuery}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {filteredFAQs.length > 0 ? (
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFAQs.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No questions found matching your search. Please try another term.</p>
              </div>
            )}
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                If you couldn't find the answer to your question, please don't hesitate to reach out to our team.
              </p>
              <Button asChild className="bg-donation-primary">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
