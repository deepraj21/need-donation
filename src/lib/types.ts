
export interface Patient {
  id: string;
  name: string;
  age: number;
  disease: string;
  hospitalName: string;
  location: string;
  requiredAmount: number;
  raisedAmount: number;
  story: string;
  qrCodeUrl: string;
  phoneNumber: string;
  proofDocuments: ProofDocument[];
  status: "Critical" | "Stable" | "Recovering";
  createdAt: string;
}

export interface ProofDocument {
  id: string;
  title: string;
  documentUrl: string;
  type: "ID" | "Medical" | "Hospital" | "Other";
}

export interface Donation {
  id: string;
  patientId: string;
  donorName: string;
  amount: number;
  date: string;
  phoneNumber?: string;
}
