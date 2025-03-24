import Store from "@/lib/store/Auth";
import Iprotect from "@/types/Protectroute";
import { Navigate } from "react-router";

// src/components/ProtectedRoute.js
;

const ProtectedRoute = ({ children, requiredRole }:Iprotect) => {
  const { user } = Store();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole &&  requiredRole.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
