
import { Patient, Donation } from "./types";

export const mockPatients: Patient[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    age: 35,
    disease: "Liver Transplant",
    hospitalName: "Apollo Hospitals",
    location: "Delhi",
    requiredAmount: 1500000,
    raisedAmount: 450000,
    story: "Rahul was diagnosed with liver cirrhosis and requires an urgent liver transplant. He is the sole breadwinner for his family with two young children. The family has exhausted all their savings on previous treatments.",
    qrCodeUrl: "/qr-rahul.png",
    phoneNumber: "+91 9876543210",
    proofDocuments: [
      {
        id: "1-1",
        title: "Aadhaar Card",
        documentUrl: "/docs/aadhaar-1.jpg",
        type: "ID"
      },
      {
        id: "1-2",
        title: "Medical Report",
        documentUrl: "/docs/medical-report-1.pdf",
        type: "Medical"
      },
      {
        id: "1-3",
        title: "Hospital Estimate",
        documentUrl: "/docs/hospital-estimate-1.pdf",
        type: "Hospital"
      }
    ],
    status: "Critical",
    createdAt: "2023-12-15T10:30:00Z"
  },
  {
    id: "2",
    name: "Priya Patel",
    age: 8,
    disease: "Leukemia Treatment",
    hospitalName: "Tata Memorial Hospital",
    location: "Mumbai",
    requiredAmount: 1200000,
    raisedAmount: 780000,
    story: "Priya was diagnosed with leukemia 6 months ago. She needs continued chemotherapy and possible bone marrow transplant. Her parents are farmers with limited income and have already spent their life savings on initial treatments.",
    qrCodeUrl: "/qr-priya.png",
    phoneNumber: "+91 8765432109",
    proofDocuments: [
      {
        id: "2-1",
        title: "Aadhaar Card",
        documentUrl: "/docs/aadhaar-2.jpg",
        type: "ID"
      },
      {
        id: "2-2",
        title: "Medical Report",
        documentUrl: "/docs/medical-report-2.pdf",
        type: "Medical"
      }
    ],
    status: "Stable",
    createdAt: "2023-11-20T14:45:00Z"
  },
  {
    id: "3",
    name: "Mohammad Khan",
    age: 52,
    disease: "Cardiac Surgery",
    hospitalName: "Narayana Health",
    location: "Bangalore",
    requiredAmount: 850000,
    raisedAmount: 320000,
    story: "Mohammad suffered a major heart attack and requires bypass surgery. As a school teacher with modest income, he is unable to afford the expensive procedure. His family is looking for support to save his life.",
    qrCodeUrl: "/qr-mohammad.png",
    phoneNumber: "+91 7654321098",
    proofDocuments: [
      {
        id: "3-1",
        title: "Aadhaar Card",
        documentUrl: "/docs/aadhaar-3.jpg",
        type: "ID"
      },
      {
        id: "3-2",
        title: "Medical Report",
        documentUrl: "/docs/medical-report-3.pdf",
        type: "Medical"
      },
      {
        id: "3-3",
        title: "Hospital Estimate",
        documentUrl: "/docs/hospital-estimate-3.pdf",
        type: "Hospital"
      }
    ],
    status: "Critical",
    createdAt: "2024-01-05T09:15:00Z"
  }
];

export const mockDonations: Record<string, Donation[]> = {
  "1": [
    {
      id: "d1-1",
      patientId: "1",
      donorName: "Ananya Roy",
      amount: 50000,
      date: "2024-01-20T15:30:00Z",
      phoneNumber: "+91 9876123450"
    },
    {
      id: "d1-2",
      patientId: "1",
      donorName: "Vikram Singh",
      amount: 25000,
      date: "2024-01-18T10:15:00Z"
    },
    {
      id: "d1-3",
      patientId: "1",
      donorName: "Anonymous",
      amount: 100000,
      date: "2024-01-15T12:45:00Z"
    }
  ],
  "2": [
    {
      id: "d2-1",
      patientId: "2",
      donorName: "Kiran Desai",
      amount: 75000,
      date: "2024-01-17T09:20:00Z"
    },
    {
      id: "d2-2",
      patientId: "2",
      donorName: "Suresh Kumar",
      amount: 120000,
      date: "2024-01-12T14:30:00Z"
    }
  ],
  "3": [
    {
      id: "d3-1",
      patientId: "3",
      donorName: "Deepak Sharma",
      amount: 50000,
      date: "2024-01-22T11:10:00Z"
    },
    {
      id: "d3-2",
      patientId: "3",
      donorName: "Anonymous",
      amount: 25000,
      date: "2024-01-19T16:45:00Z"
    }
  ]
};
