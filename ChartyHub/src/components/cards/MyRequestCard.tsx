import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TextHome from "./TextHome";

const requests = [
  {
    id: 1,
    type: "money",
    amount: 500,
    currency: "EGP",
    status: "pending",
    address: "القاهرة، مصر",
  },
  {
    id: 2,
    type: "material",
    description: "ملابس شتوية للأطفال",
    status: "accepted",
    address: "الجيزة، مصر",
  },
  {
    id: 3,
    type: "volunteer",
    description: "تقديم دروس تعليمية للأطفال",
    status: "fulfilled",
    address: "الإسكندرية، مصر",
  },
];

const statusColors = {
  pending: "yellow",
  accepted: "green",
  rejected: "red",
  fulfilled: "blue",
};

export default function MyRequests() {
  return (
    <div className="flex w-full justify-center !mt-8 items-center">
    <div className="max-w-3xl w-full !mx-auto !p-6 !space-y-4">
<TextHome text="My Requests" size="text-xl"/>
      {requests.map((request) => (
        <Card key={request.id} className="w-full shadow-md !p-6">
          <CardHeader>
            <CardTitle> Type: {request.type }</CardTitle>
          </CardHeader>
          <CardContent className="">
            <p className="!mb-2"><strong>Address:</strong> {request.address}</p>
            {request.type === "money" ? (
              <p><strong>Amount:</strong> {request.amount} {request.currency}</p>
            ) : (
              <p><strong>Description:</strong> {request.description}</p>
            )}
            <Badge className={`bg-${statusColors[request.status as keyof typeof statusColors]}-500 text-white !px-2 !py-1 !my-4 rounded-full`}>{request.status}</Badge>
           
          </CardContent>
        </Card>
      ))}
    </div></div>
  );
}
