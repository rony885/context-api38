// import React from 'react';

import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Lottie from "lottie-react";
import loginAnimation from "../../public/animation/login.json"
import { useNavigate } from "react-router-dom";

const Login = () => {
    // input
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const history = useNavigate()

    // icon show
    const [showPass, setShowPass] = useState(true);
    !showPass;

    const [showConfirmPass, setShowConfirmPass] = useState(true);
    !showConfirmPass;

    
    // input error
    const [fullNameError, setFullNameError] = useState("")
    const [passwordError, setpasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] =useState("")
    
    // handle
    const handleFullName= (e)=> {
        setFullName(e.target.value)
        setFullNameError("")
    }
    const handlePassword= (e)=> {
        setPassword(e.target.value)
        setpasswordError("")
    }
    const handleConfirmPassword = (e)=>{
        setConfirmPassword(e.target.value)
        setConfirmPasswordError("")
    }
    
    // submit
    const handleSubmit= (e)=> {
        e.preventDefault()
        if(fullName==""){
            setFullNameError("give me fullName")
        }
        else if(password==""){
            setpasswordError("give me password")
        }
        else if(confirmPassword==""){
            setConfirmPasswordError("required confirmPassword")
        }
        else{
            // console.log("successfully")
            history("/navbar")
        }
    }
    
    return (
        <>
          <div className="container mx-auto flex mt-4">
            <div className="flex justify-between items-center">
                <div className="w-[45%] shadow-md bg-neutral-100">
                    <form onSubmit={handleSubmit} action="" className="text-center pb-6">
                       <h2>Login</h2>
                        <input onChange={handleFullName} type="text" placeholder="user name" />
                        {
                            fullNameError &&
                            <p>{fullNameError}</p>
                        }
                       
                        <div className="relative">
                            <input onChange={handlePassword} type={showPass? "password" : "text"} placeholder="Password" /> <br />
                            {
                                showPass?
                                <FaEyeSlash onClick={()=>setShowPass(!showPass)} className="absolute right-28 top-1 text-2xl text-green-600 cursor-pointer" />
                                :
                                <FaEye onClick={()=>setShowPass(!showPass)} className="absolute right-28 top-1 text-2xl text-green-600 cursor-pointer" />
                            }
                        </div>
                        {
                            passwordError &&
                            <p>{passwordError}</p>
                        }
                        
                        <div className="relative">
                         <input onChange={handleConfirmPassword} type={showConfirmPass? "password" : "text"} placeholder="Confirm Password" /> <br />
                         {
                            showConfirmPass?
                            <FaEyeSlash onClick={()=>setShowConfirmPass(!showConfirmPass)} className="absolute right-28 top-1 text-2xl text-green-600 cursor-pointer" />
                            :
                            <FaEye onClick={()=>setShowConfirmPass(!showConfirmPass)} className="absolute  right-28 top-1 text-2xl text-green-600 cursor-pointer" />
                         }
                        </div>
                        {
                            confirmPasswordError &&
                            <p>{confirmPasswordError}</p>
                        }
                        <button className="btn">Sign In</button>
                    </form>
                </div>
                
                    <div className="w-[45%]">
                     <Lottie animationData={loginAnimation} loop={true} />
                    </div>
                </div>
          </div> 
        </>
    );
};

export default Login;



