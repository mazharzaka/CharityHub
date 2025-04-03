import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Donation from "@/types/Donation"
interface table {
  AllDonations: Donation[];
  Row: string[];
}

export const HistoryTable: React.FC<table> = ({ AllDonations, Row }) => {
  return (
    <Table>
      {/* ["Donor Name", "Status","paymentStatus", "donationType","Date", "Amount"]*/}
      <TableHeader>
        <TableRow>
          {Row?.map((header: string) => (
            <TableHead key={header} className="text-left">
              {header}
            </TableHead>))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {AllDonations?.map((e, i) => (
          <TableRow key={i} className="hover:bg-gray-100 transition-colors duration-200">
            <TableCell className="font-medium">{e.donorId.Fname + " " + e.donorId.Lname}</TableCell>
            <TableCell>{e.status}</TableCell>
            <TableCell>{e.paymentMethod}</TableCell>
            <TableCell>{e.donationType}</TableCell>
            <TableCell>
              {e.createdAt ? new Date(e.createdAt).toISOString().split("T")[0] : "N/A"}
            </TableCell>
            <TableCell >{e.amount}{e.currency==='EGP'?"EGP":"$"}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
