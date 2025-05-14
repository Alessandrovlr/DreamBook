import { Navigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

export const PrivateRoute = ({ children }) => {
  const { user } = useAppContext();

  return user ? children : <Navigate to="/login" />;
};