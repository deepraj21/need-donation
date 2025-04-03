
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Donation } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";

interface DonationTableProps {
  donations: Donation[];
}

const DonationTable: React.FC<DonationTableProps> = ({ donations }) => {
  if (donations.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No donations received yet. Be the first to donate!</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Donor</TableHead>
            <TableHead className="text-right">Amount (₹)</TableHead>
            <TableHead className="text-right">When</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donations.map((donation) => (
            <TableRow key={donation.id}>
              <TableCell className="font-medium">
                {donation.donorName}
              </TableCell>
              <TableCell className="text-right">
                {donation.amount.toLocaleString()}
              </TableCell>
              <TableCell className="text-right text-sm text-gray-500">
                {formatDistanceToNow(new Date(donation.date), { addSuffix: true })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DonationTable;
