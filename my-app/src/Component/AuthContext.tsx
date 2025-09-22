import { createContext, ReactNode, useContext, useReducer, useState } from "react";


interface User {
    name: string;
}

interface AuthState {
    user: User | null;
}

interface Competition {
    status: 'none' | 'accepte'
}

type AuthActions = { type: 'LOGIN SUCCESS'; payload: User }

const initialState: AuthState = {
    user: null
};

const authReducer = (state: AuthState, action: AuthActions): AuthState => {
    switch (action.type) {
        case 'LOGIN SUCCESS':
            return { ...state, user: action.payload };
        default:
            return state;
    }
}   


interface AuthContextType {
    state: AuthState;
    login: (email: string, password: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (email: string, password: string) => {

        const mockUser: User = { name: 'Teshome' };
        dispatch({ type: 'LOGIN SUCCESS', payload: mockUser });
    };

    const value = { state, login };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


