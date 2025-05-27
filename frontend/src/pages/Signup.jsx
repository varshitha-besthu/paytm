import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function SignUp(){
    return (
        <div className="h-screen w-screen flex justify-center items-center ">
            <div className="border-2 border-gray-400 p-4 rounded-2xl ">
                <div className="font-bold text-2xl flex justify-center mb-2">Sign Up</div>
                <div className="text-slate-500 text-md pt-1 px-4 pb-4">Enter your Information to create an account</div>
                <div className="my-2">
                    <div className="text-xl font-medium">First Name</div>
                    <Input type={"text"} placeholder={"John"}/>
                </div>
                <div className="my-2">
                    <div className="text-xl font-medium">Last Name</div>
                    <Input type={"text"} placeholder={"Doe"}/>
                </div>
                <div className="my-2">
                    <div className="text-xl font-medium">Email</div>
                    <Input type={"email"} placeholder={"JohnDoe@gmail.com"}/>
                </div>
                <div className="my-2">
                    <div className="text-xl font-medium">Password</div>
                    <Input type={"password"} placeholder={"123456"}/>
                </div>
                <Button label={"Sign Up"}/>
                <div className="font-medium text-center text-lg">
                    Already have an account? 
                    <span className="underline decoration-2 cursor-pointer"> Login</span>
                </div>
            </div>
        </div>
    )
}