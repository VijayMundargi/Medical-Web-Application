import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ShiftInfoCard = ({ name, email, role, shift, status }) => (
  <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 relative">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-gray-800">
        👨‍💼 Staff Information
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Name</span>
        <span className="text-gray-800 font-semibold">{name}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Email</span>
        <span className="text-gray-800 font-semibold">{email}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Role</span>
        <span className="text-gray-800 font-semibold">{role}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Shift</span>
        <span className="text-gray-800 font-semibold">{shift}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">Status</span>
        <span
          className={`px-3 py-1 text-sm rounded-full font-semibold ${
            status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </div>
    </CardContent>
  </Card>
);

export default ShiftInfoCard;
