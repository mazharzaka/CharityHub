import Headline from "../cards/Headline"
import TextHome from "../cards/TextHome"
import { Card, CardContent } from "../ui/card"
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
function MyProfile() {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full  !p-8 space-y-6 ">
        <div className="flex w-full  !p-8 space-y-6 items-center flex-col">
          <div className="max-w-4xl w-full !p-6 space-y-6">
            <Card className=" !my-5 w-full">
              <CardContent className="!p-6 !space-y-4 flex justify-center items-center flex-col">
              <img src="https://res.cloudinary.com/dsls01rrg/image/upload/v1741202130/uploads/d5cgrz7ziwlb34kknqgk.jpg" alt=" Profile" className="w-28 h-28 rounded-full border-2 border-gray-300" />

                <TextHome text="Mazhar Mohamed Mazhar" size="text-2xl" />
                <Headline text="Donor" size="text-xl" />
              </CardContent>
            </Card>
            <Card className=" !my-5 w-full">
              <CardContent className="!p-8 !space-y-4 flex justify-center  flex-col">
                <div className="flex items-center">
                  <TextHome text="Email : " size="text-2xl" />
                  <p>Mazharmohamed556@gmail.com</p>
                </div>
                <div className="flex items-center">
                  <TextHome text="Phone : " size="text-2xl" />
                  <p>+20 1104998568</p>
                </div>
                <div className="flex items-center">
                  <TextHome text="Joined : " size="text-2xl" />
                  <p>Jan 2024</p>
                </div>
              </CardContent>

            </Card>
            <Card className=" !my-5 w-full">
              <CardContent className="!p-8  flex justify-around items-center">
                <div className="flex items-center flex-col">
                  <TextHome text="10" size="text-2xl" />
                  <p>Campaigns Supported</p>
                </div>
                <div className="flex items-center flex-col">
                  <TextHome text="$500" size="text-2xl" />
                  <p>Total Donations</p>
                </div>

              </CardContent>
            </Card>
            <Card>
        <CardContent className="!p-6">
          <h3 className="text-xl font-semibold !mb-4">Donation History</h3>
          <Table>
            <TableHead className="text-sm">
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Campaign</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>2025-03-10</TableCell>
                <TableCell>$50</TableCell>
                <TableCell>Education Support</TableCell>
                <TableCell>Completed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2025-02-22</TableCell>
                <TableCell>$100</TableCell>
                <TableCell>Emergency Relief</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile