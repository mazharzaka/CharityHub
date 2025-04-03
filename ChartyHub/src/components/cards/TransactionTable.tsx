import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
//   import Donation from "@/types/Donation"
import Transaction from "@/types/transaction";
  interface table {
    AllTransaction: Transaction[];
    Row: string[];
  }
  
  export const TransactionTable: React.FC<table> = ({ AllTransaction, Row }) => {
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
          {AllTransaction?.map((e, i) => (
            <TableRow key={i} className="hover:bg-gray-100 transition-colors duration-200">
              <TableCell className="font-medium">{e.donationId.campaignId.title}</TableCell>
              <TableCell>{e.status}</TableCell>
              <TableCell>{e.paymentMethod}</TableCell>
              <TableCell>{e.donationId.donationType}</TableCell>
              <TableCell>
                {e.createdAt ? new Date(e.createdAt).toISOString().split("T")[0] : "N/A"}
              </TableCell>
              <TableCell >{e.amount}{e.currency==='EGP'?"EGP":"$"}</TableCell>
              <TableCell >{e.transactionReference}</TableCell>
            </TableRow>
          ))}
        </TableBody>
  
      </Table>
    )
  }
  