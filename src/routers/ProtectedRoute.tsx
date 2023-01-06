import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = window.localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};
