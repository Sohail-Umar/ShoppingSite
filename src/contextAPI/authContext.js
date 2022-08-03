import React from "react";

const CreateAuthStateContext = React.createContext(undefined);
const CreateAuthDispatchContext = React.createContext(undefined);

function AuthProvider({ children }) {
    const [isAuthenticated, setAuthentication] = React.useState(false);

    const handleAuthChange = (isAuthenticated) => {
        setAuthentication(isAuthenticated)
    };

    return (
        <CreateAuthStateContext.Provider value={isAuthenticated}>
            <CreateAuthDispatchContext.Provider value={handleAuthChange}>
                {children}
            </CreateAuthDispatchContext.Provider>
        </CreateAuthStateContext.Provider>
    );
}
const useCreateAuthStateContext = () => {
    const context = React.useContext(CreateAuthStateContext);

    if (context === undefined) {
        throw ("CreateAuthStateContext must be in AuthProvider");
    }

    return context;
}


const useCreateAuthDispatchContext = () => {
    const context = React.useContext(CreateAuthDispatchContext);

    if (context === undefined) {
        throw ("CreateAuthDispatchContext must be call in AuthProvider");
    }
    return context;
}

export {
    AuthProvider,
    useCreateAuthDispatchContext,
    useCreateAuthStateContext
}