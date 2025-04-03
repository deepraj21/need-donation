import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Clock,
  FileText,
  ExternalLink,
  ArrowLeft,
  Heart,
  Phone,
  Calendar,
} from "lucide-react";
import { Patient } from "@/lib/types";
import { mockPatients, mockDonations } from "@/lib/data";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import DonationTable from "@/components/DonationTable";
import DonationModal from "@/components/DonationModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { format } from "date-fns";

const PatientDetails = () => {
  const { patientId } = useParams<{ patientId: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    // In a real app, fetch data from API
    const foundPatient = mockPatients.find(p => p.id === patientId);
    if (foundPatient) {
      setPatient(foundPatient);
    }
  }, [patientId]);

  if (!patient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Patient not found</h2>
          <Link to="/patients">
            <Button>View All Patients</Button>
          </Link>
        </div>
      </div>
    );
  }

  const progressPercentage = (patient.raisedAmount / patient.requiredAmount) * 100;
  const donations = mockDonations[patient.id] || [];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/patients" className="inline-flex items-center text-sm text-gray-600 hover:text-donation-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Patients
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Patient information - Left column (2/3 width on large screens) */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <div className={`inline-flex items-center px-3 py-1 w-fit rounded-full text-xs font-medium mb-2 ${
                    patient.status === "Critical" 
                      ? "bg-red-100 text-red-800" 
                      : patient.status === "Stable" 
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                  }`}>
                    {patient.status}
                  </div>
                  
                  <CardTitle className="text-3xl">{patient.name}</CardTitle>
                  <CardDescription className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{patient.hospitalName}, {patient.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                      <span>Age: {patient.age} years</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2">Medical Condition</h3>
                      <p className="text-gray-700">
                        {patient.disease}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-2">Story</h3>
                      <p className="text-gray-700">
                        {patient.story}
                      </p>
                    </div>
                    
                    <div className="pt-2">
                      <div className="flex justify-between items-end mb-2">
                        <div>
                          <h3 className="font-bold text-lg">Fundraising Goal</h3>
                          <p className="text-gray-500 text-sm">
                            <Clock className="h-3 w-3 inline mr-1" />
                            Started {format(new Date(patient.createdAt), 'MMMM d, yyyy')}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-xl">
                            ₹{patient.raisedAmount.toLocaleString()}
                          </span>
                          <span className="text-gray-500">
                            {" "}of ₹{patient.requiredAmount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className="bg-donation-primary h-2 rounded-full"
                          style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>{progressPercentage.toFixed(1)}% Complete</span>
                        <span>
                          ₹{(patient.requiredAmount - patient.raisedAmount).toLocaleString()} still needed
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Tabs for documents and donations */}
              <Tabs defaultValue="documents">
                <TabsList className="grid grid-cols-2 mb-6">
                  <TabsTrigger value="documents">Documents & Proof</TabsTrigger>
                  <TabsTrigger value="donations">Donations</TabsTrigger>
                </TabsList>
                
                <TabsContent value="documents">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Verification Documents</CardTitle>
                      <CardDescription>
                        Medical reports, ID proof, and hospital estimates
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {patient.proofDocuments.map(doc => (
                          <div key={doc.id} className="border rounded-lg p-4 flex items-start space-x-3">
                            <FileText className="h-6 w-6 text-donation-primary flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">{doc.title}</h4>
                              <p className="text-sm text-gray-500 mb-2">{doc.type} Document</p>
                              <Button variant="link" className="h-auto p-0 text-donation-primary">
                                View Document <ExternalLink className="h-3 w-3 ml-1" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="donations">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Recent Donations</CardTitle>
                      <CardDescription>
                        People who have already contributed
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <DonationTable donations={donations} />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Donation box - Right column (1/3 width on large screens) */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl">Make a Difference</CardTitle>
                  <CardDescription>
                    Your contribution goes directly to the patient
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-donation-muted rounded-lg p-4 flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-donation-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Contact Patient's Family</p>
                      <p className="font-medium">{patient.phoneNumber}</p>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-donation-primary hover:bg-donation-secondary"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </Button>
                  
                  <div className="text-center text-sm text-gray-500">
                    <p>
                      100% of your donation goes directly to {patient.name}. We don't charge any platform fees.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <DonationModal
        patient={patient}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      
      <Footer />
    </div>
  );
};

export default PatientDetails;
