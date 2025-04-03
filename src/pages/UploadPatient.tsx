import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Upload, FileText, Check, Info } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const formSchema = z.object({
  patientName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  age: z.coerce.number().min(1, { message: "Age must be at least 1" }),
  disease: z.string().min(3, { message: "Please describe the medical condition" }),
  hospitalName: z.string().min(3, { message: "Please enter hospital name" }),
  location: z.string().min(2, { message: "Please enter location" }),
  requiredAmount: z.coerce.number().min(1, { message: "Amount must be greater than 0" }),
  story: z.string().min(50, { message: "Story must be at least 50 characters" }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number" }),
  status: z.enum(["Critical", "Stable", "Recovering"]),
});

const UploadPatient = () => {
  const [uploadingId, setUploadingId] = useState(false);
  const [uploadingMedical, setUploadingMedical] = useState(false);
  const [uploadingQR, setUploadingQR] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: "",
      age: undefined,
      disease: "",
      hospitalName: "",
      location: "",
      requiredAmount: undefined,
      story: "",
      phoneNumber: "",
      status: "Critical",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast.success("Patient details submitted for review!", {
      description: "We'll verify and publish the case soon.",
    });
  };

  const handleUploadId = () => {
    setUploadingId(true);
    setTimeout(() => {
      setUploadingId(false);
      toast.success("ID document uploaded successfully!");
    }, 1500);
  };

  const handleUploadMedical = () => {
    setUploadingMedical(true);
    setTimeout(() => {
      setUploadingMedical(false);
      toast.success("Medical documents uploaded successfully!");
    }, 1500);
  };

  const handleUploadQR = () => {
    setUploadingQR(true);
    setTimeout(() => {
      setUploadingQR(false);
      toast.success("QR code uploaded successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold gradient-heading mb-4">Raise Donation for a Patient</h1>
              <p className="text-gray-700">
                Fill the form below with accurate details. After verification, your case will be published on our platform.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Patient Information</CardTitle>
                <CardDescription>
                  Enter complete and accurate details to help donors understand the need.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="patientName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Patient Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="Enter age" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="disease"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Medical Condition</FormLabel>
                          <FormControl>
                            <Input placeholder="Describe the medical condition" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="hospitalName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Hospital Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter hospital name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="City, State" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="requiredAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Required Amount (₹)</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="Required amount" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Patient's Current Status</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Critical">Critical</SelectItem>
                                <SelectItem value="Stable">Stable</SelectItem>
                                <SelectItem value="Recovering">Recovering</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="story"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Patient's Story</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe the patient's condition, background, and need for financial assistance in detail" 
                              className="min-h-32"
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Include relevant details about the patient's condition, family background, and financial need.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter phone number" {...field} />
                          </FormControl>
                          <FormDescription>
                            This number will be visible to donors for direct communication.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="space-y-4 pt-2">
                      <h3 className="font-medium">Required Documents</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-donation-primary mr-2" />
                              <span className="font-medium">ID Proof (Aadhaar/PAN)</span>
                            </div>
                            {uploadingId ? (
                              <span className="text-sm text-gray-500">Uploading...</span>
                            ) : (
                              <Check className="h-5 w-5 text-donation-green" />
                            )}
                          </div>
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="w-full text-donation-primary" 
                            onClick={handleUploadId}
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload ID Proof
                          </Button>
                        </div>
                        
                        <div className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-donation-primary mr-2" />
                              <span className="font-medium">Medical Documents</span>
                            </div>
                            {uploadingMedical ? (
                              <span className="text-sm text-gray-500">Uploading...</span>
                            ) : (
                              <Check className="h-5 w-5 text-donation-green" />
                            )}
                          </div>
                          <Button 
                            type="button" 
                            variant="outline" 
                            className="w-full text-donation-primary" 
                            onClick={handleUploadMedical}
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Medical Reports
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-donation-primary mr-2" />
                            <span className="font-medium">QR Code for Payment</span>
                          </div>
                          {uploadingQR ? (
                            <span className="text-sm text-gray-500">Uploading...</span>
                          ) : (
                            <Check className="h-5 w-5 text-donation-green" />
                          )}
                        </div>
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="w-full text-donation-primary" 
                          onClick={handleUploadQR}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Upload UPI/Bank QR Code
                        </Button>
                        <div className="flex items-center text-sm text-gray-500 bg-gray-50 p-2 rounded-md">
                          <Info className="h-4 w-4 mr-2 flex-shrink-0" />
                          <span>This QR code will be used by donors to make direct payments to the patient's account.</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full bg-donation-primary hover:bg-donation-secondary"
                      >
                        Submit for Verification
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UploadPatient;
