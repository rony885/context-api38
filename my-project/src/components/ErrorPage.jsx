// import React from 'react';
import Lottie from "lottie-react";
import errorPage from "../../public/animation/error-animation.json"

const ErrorPage = () => {
    return (
        <div className="container mx-auto w-[45%]">
            <Lottie animationData={errorPage} />
        </div>
    );
};

export default ErrorPage;