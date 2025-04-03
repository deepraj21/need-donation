
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeAlert, MapPin } from "lucide-react";
import { Patient } from "@/lib/types";

interface PatientCardProps {
  patient: Patient;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  const progressPercentage = (patient.raisedAmount / patient.requiredAmount) * 100;
  
  return (
    <Card className="overflow-hidden card-hover">
      <CardContent className="p-0">
        <div className="relative">
          {/* Patient status badge */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium flex items-center ${
            patient.status === "Critical" 
              ? "bg-red-100 text-red-800" 
              : patient.status === "Stable" 
                ? "bg-yellow-100 text-yellow-800"
                : "bg-green-100 text-green-800"
          }`}>
            {patient.status === "Critical" && <BadgeAlert className="h-3 w-3 mr-1" />}
            {patient.status}
          </div>
          
          <div className="p-6">
            <h3 className="font-bold text-xl mb-1">{patient.name}</h3>
            <p className="text-sm text-gray-500 mb-3">
              {patient.age} years • {patient.disease}
            </p>
            
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <MapPin className="h-4 w-4 mr-1" />
              {patient.hospitalName}, {patient.location}
            </div>
            
            <p className="text-sm text-gray-700 line-clamp-2 mb-4">
              {patient.story}
            </p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">Raised</span>
                <span className="font-bold">
                  ₹{(patient.raisedAmount).toLocaleString()} of ₹{(patient.requiredAmount).toLocaleString()}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-donation-primary h-2 rounded-full"
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link to={`/patient/${patient.id}`} className="w-full">
          <Button className="w-full bg-donation-primary hover:bg-donation-secondary">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PatientCard;
