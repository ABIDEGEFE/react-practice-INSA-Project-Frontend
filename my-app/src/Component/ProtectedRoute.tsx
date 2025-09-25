import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";


interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: "admin" | "user";
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
    const { state } = useAuth();
    
    if (!state.user) {
        return <p>Please log in to access this page.</p>;
    }
    if (requiredRole && state.user.role !== requiredRole) {
        return <p>{state.user.role} is not your role.</p>
    }

    return <>{children}</>;
}

