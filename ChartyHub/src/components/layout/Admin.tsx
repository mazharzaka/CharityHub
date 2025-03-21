import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { CircleDollarSign, HeartHandshake, Users } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex justify-center">
    <div className="max-w-5xl mx-auto !p-6 !space-y-6">
      <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>
      <p className="text-gray-600 text-center">Manage campaigns, donations, and users</p>
      
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="!p-6 flex flex-col items-center">
            <HeartHandshake className="text-4xl text-blue-500" />
            <p className="text-lg font-semibold">25</p>
            <p className="text-gray-600">Active Campaigns</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="!p-6 flex flex-col items-center">
            <CircleDollarSign className="text-4xl text-green-500" />
            <p className="text-lg font-semibold">$12,500</p>
            <p className="text-gray-600">Total Donations</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="!p-6 flex flex-col items-center">
            <Users className="text-4xl text-orange-500" />
            <p className="text-lg font-semibold">120</p>
            <p className="text-gray-600">Registered Users</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardContent className="!p-6">
          <h2 className="text-xl font-semibold !mb-4">Manage Campaigns</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Goal</TableCell>
                <TableCell>Raised</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Help for Orphans</TableCell>
                <TableCell>$5,000</TableCell>
                <TableCell>$3,200</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>
                  <Button variant="outline">Edit</Button>
                  <Button variant="destructive">Delete</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button className="!mt-4">Add New Campaign</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="!p-6">
          <h2 className="text-xl font-semibold !mb-4">Manage Donations</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Donor</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Campaign</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>$100</TableCell>
                <TableCell>Education Support</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell>
                  <Button variant="outline">View</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="!p-6">
          <h2 className="text-xl font-semibold !mb-4">Manage Users</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane.smith@example.com</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>
                  <Button variant="outline">Edit</Button>
                  <Button variant="destructive">Remove</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button className="!mt-4 bg-[#09cc7f]">Add New User</Button>
        </CardContent>
      </Card>
    </div></div>
  );
}
