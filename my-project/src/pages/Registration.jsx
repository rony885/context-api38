// import React from 'react';
import Lottie from "lottie-react";
import registrationAnimation from "../../public/animation/registration.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    //input value
    const [fullName, setfullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [gender, setGender] = useState("")

    const history = useNavigate()

    //Input Error
    const [fullNameError, setFullNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [genderError, setGenderError] = useState("")

    const handleFullName = (event) => {
        setfullName(event.target.value)
        setFullNameError("")
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value)
        setEmailError("")
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value)
        setPasswordError("")
    }
    const handleConfirmPassword = (e)=>{
        setConfirmPassword(e.target.value)
        setConfirmPasswordError("")
    }
    const handleGender = (e)=>{
        setGender(e.target.value)
        setGenderError("")
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(fullName==""){
            setFullNameError("give me fullname")
        }
        else if(email==""){
            setEmailError("give requied email")
        }
        else if(password==""){
            setPasswordError("valid password required")
        }
        else if(confirmPassword==""){
            setConfirmPasswordError("Please give confirm password")
        }
        else if(gender==""){
            setGenderError("select gender")
        }
        else{
            console.log("Successfully")
            history("/login")
        }
    }

    return (
        <div className="container mx-auto my-5">
            <div className="main flex justify-between items-center">
                <div className="w-[45%] shadow-md bg-neutral-100">
                    <form onSubmit={handleSubmit} action="" className="text-center pb-6">
                        <h2>Registration</h2>
                        <input onChange={handleFullName} type="text" placeholder='full name' /><br />
                        {
                            fullNameError &&
                            <p>{fullNameError}</p>
                        }
                        <input onChange={handleEmail} type="text" placeholder='email' /><br />
                        {
                            emailError &&
                            <p>{emailError}</p>
                        }

                        <div onChange={handleGender} className="all_gender">
                            Gender :- 
                            <input className='gender' type="radio" name="rad1" id="" />Male
                            <input className='gender' type="radio" name='rad1' />Female
                            <input className='gender' type="radio" name='rad1' />Other
                        </div>
                        { 
                            genderError &&
                            <p>{genderError}</p>
                        }

                        <input onChange={handlePassword} type="password" placeholder='password' /><br />
                        {
                            passwordError &&
                            <p>{passwordError}</p>
                        }
                        <input onChange={handleConfirmPassword} type="password" placeholder='confirm password' /><br />
                        {
                            confirmPasswordError &&
                            <p>{confirmPasswordError}</p>
                        }
                        <button className='btn' type='submit'>Registration</button>

                    </form>
                </div>

                <div className="w-[35%]"> 
                  <Lottie animationData={registrationAnimation} />
                </div>
            </div>
        </div>
    );
};

export default Registration;
