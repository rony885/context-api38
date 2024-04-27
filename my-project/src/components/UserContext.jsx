// import React from 'react';

import { createContext } from "react";

export const myContext = createContext()

const UserContext = ({children}) => {

    const userInfo = {
        userName: "Rony",
        phone: "01700520800",
        address: "Dhaka"
    }

    return (
        <>
            <myContext.Provider value={userInfo}>
                {children}
            </myContext.Provider>
        </>
    );
};

export default UserContext;