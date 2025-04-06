
interface Address {
  street?: string;
  city?: string;
  country?: string;
}

export interface IUser  {
  Fname: string;
  Lname: string;
  email: string;
  age: number;
  confirmPassword?: string;
  address?: Address;
  googleId?: string | null;
  password: string;
  phone: number;
  role: "donor" | "beneficiary" | "volunteer" | "admin";
//   TransactionId?: Types.ObjectId | null;
  status: "pending" | "active" | "inactive";
  date: Date;
  isVerified: boolean;
  profileImg: File|undefined;
}
