
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import QRCodeDisplay from "./QRCodeDisplay";
import { Patient } from "@/lib/types";
import { useState } from "react";
import { toast } from "sonner";

interface DonationModalProps {
  patient: Patient;
  open: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ patient, open, onClose }) => {
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [step, setStep] = useState<"form" | "qr">("form");

  const handleProceed = () => {
    if (!donorName) {
      toast.error("Please enter your name");
      return;
    }
    setStep("qr");
  };

  const handleClose = () => {
    setStep("form");
    setDonorName("");
    setDonorPhone("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {step === "form" ? "Donate to " + patient.name : "Scan QR Code to Donate"}
          </DialogTitle>
        </DialogHeader>
        
        {step === "form" ? (
          <div className="space-y-4 py-4">
            <p className="text-sm text-center text-gray-600 mb-4">
              Please enter your details. This information helps the patient's family track and acknowledge donations.
            </p>
            <div className="space-y-2">
              <label htmlFor="donorName" className="text-sm font-medium">
                Your Name*
              </label>
              <input
                id="donorName"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your name"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="donorPhone" className="text-sm font-medium flex items-center justify-between">
                <span>Your Phone (Optional)</span>
                <span className="text-xs text-gray-500">For donation confirmation</span>
              </label>
              <input
                id="donorPhone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your phone number"
                value={donorPhone}
                onChange={(e) => setDonorPhone(e.target.value)}
              />
            </div>
          </div>
        ) : (
          <div className="py-4">
            <QRCodeDisplay
              qrCodeUrl={patient.qrCodeUrl}
              patientName={patient.name}
              phoneNumber={patient.phoneNumber}
            />
          </div>
        )}
        
        <DialogFooter>
          {step === "form" ? (
            <Button 
              onClick={handleProceed} 
              className="w-full bg-donation-primary hover:bg-donation-secondary"
            >
              Proceed to Donation
            </Button>
          ) : (
            <Button 
              variant="outline" 
              onClick={handleClose}
              className="w-full"
            >
              Close
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
