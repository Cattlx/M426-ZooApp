import { Navigate } from "react-router-dom";
import { getLoggedInUser } from "../utils/auth";

export default function ProtectedRoute({ children }) {
    const user = getLoggedInUser();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}