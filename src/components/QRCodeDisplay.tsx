
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Check, Download } from "lucide-react";
import { toast } from "sonner";

interface QRCodeDisplayProps {
  qrCodeUrl: string;
  patientName: string;
  phoneNumber: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ qrCodeUrl, patientName, phoneNumber }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    toast.success("Phone number copied to clipboard!");
  };

  const handleDownloadQR = () => {
    // In a real app, this would download the actual QR code
    toast.info("QR code download started");
    
    // Simulating download - in a real app you'd use the actual QR code URL
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `${patientName.toLowerCase().replace(/\s+/g, '-')}-donation-qr.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="p-6 border-2 border-donation-muted">
      <div className="text-center space-y-6">
        <h3 className="text-xl font-bold text-gray-800">Scan to Donate Directly</h3>
        <p className="text-sm text-gray-600">
          100% of your donation goes directly to {patientName}
        </p>
        
        <div className="bg-white p-4 rounded-lg mx-auto max-w-[240px]">
          {/* QR Code Placeholder - In production use the real QR code image */}
          <div className="w-full aspect-square bg-gray-100 flex items-center justify-center">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/donate" 
              alt={`${patientName}'s donation QR code`} 
              className="w-full"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-center bg-donation-muted px-4 py-2 rounded-lg">
            <p className="text-gray-700 font-medium mr-2">{phoneNumber}</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={handleCopyNumber}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full border-donation-primary text-donation-primary"
            onClick={handleDownloadQR}
          >
            <Download className="h-4 w-4 mr-2" />
            Download QR Code
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QRCodeDisplay;
