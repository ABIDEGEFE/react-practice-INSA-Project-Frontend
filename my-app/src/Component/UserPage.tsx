import React from "react";
import { useAuth } from "./AuthContext";

export const UserPage = () => {
    const {state} = useAuth();

    return (
        <div>
              {state.user &&<p>your name is {state.user.name} and your role is {state.user.role}</p>}
        </div>
    )
}