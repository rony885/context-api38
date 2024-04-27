// import React from 'react';

import { useContext } from "react";
import { myContext } from "../components/UserContext";
const Home = () => {
    
    const data = useContext(myContext)
    console.log(data)
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-green-600 font-semibold text-4xl">Context Api</h1>
            <div className="border border-green-600 rounded-lg mt-4 w-[25%] text-center bg-blue-200 font-medium">
              <h1>{data.userName}</h1>
              <h1>{data.phone}</h1>
              <h1>{data.address}</h1>
            </div>
        </div>
    );
};

export default Home;