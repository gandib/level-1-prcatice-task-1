/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = auth();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
