import React from "react";
import { useAuth } from "./AuthContext";

export const UserPage = () => {
    const {state} = useAuth();

    return (
        <div>
              {state.user &&<p>you are {state.user.role}</p>}
        </div>
    )
}