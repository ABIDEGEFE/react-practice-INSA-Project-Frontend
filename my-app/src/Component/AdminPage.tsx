import React from "react";
import { useAuth } from "./AuthContext";

export const AdminPage = () => {
    const { state } = useAuth();
    return (
        <div>
           {state.user &&<p>you are name is {state.user.name} and your role is {state.user.role}</p>}
        </div>
    )
}