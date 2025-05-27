import { useRef, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import {useNavigate} from "react-router-dom"
import axios from "axios";
export default function SignUp(){
    const navigate = useNavigate();
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleOnClick = async() => {
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
            username,
            password,
            firstName : fName,
            lastName : lName
        })
        console.log(response);
        navigate("/dashboard");
        
    }
    return (
        <div className="h-screen w-screen flex justify-center items-center ">
            <div className="border-2 border-gray-400 p-4 rounded-2xl ">
                <div className="font-bold text-2xl flex justify-center mb-2">Sign Up</div>
                <div className="text-slate-500 text-md pt-1 px-4 pb-4">Enter your Information to create an account</div>
                <div className="my-2">
                    <div className="text-xl font-medium">First Name</div>
                    <Input type={"text"} placeholder={"John"} onChange={(e) => {
                        setFName(e.target.value);
                    }}/>
                </div>
                <div className="my-2">
                    <div className="text-xl font-medium">Last Name</div>
                    <Input type={"text"} placeholder={"Doe"} onChange={(e) => {
                        setLName(e.target.value);
                    }}/>
                </div>
                <div className="my-2">
                    <div className="text-xl font-medium">email</div>
                    <Input type={"email"} placeholder={"JohnDoe@gmail.com"} onChange={(e) => {
                        setUsername(e.target.value);
                    }}/>
                </div> 
                <div className="my-2">
                    <div className="text-xl font-medium">Password</div>
                    <Input type={"password"} placeholder={"123456"} onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </div>
                <Button label={"Sign Up"} onclick={handleOnClick}/>
                <div className="font-medium text-center text-lg">
                    Already have an account? 
                    <span className="underline decoration-2 cursor-pointer"> Login</span>
                </div>
            </div>
        </div>
    )
}