import React, { useReducer } from 'react';
import { createContext, useContext } from 'react';
import { reducer, initialState } from './reducer';

const AuthContext = createContext();
const DispatchContext = createContext();

export function AuthProvider({ children }) {
    const [user, dispatch] = useReducer(reducer, initialState);
    return (
        <AuthContext.Provider value={user}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </AuthContext.Provider>
    );
}

export function useAuthState() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthState must be used within a AuthProvider');
    }
    return context;
}

export function useAuthDispatch() {
    const context = useContext(DispatchContext);
    if (context === undefined) {
        throw new Error('useAuthDispatch must be used within a AuthProvider');
    }
    return context;
}
