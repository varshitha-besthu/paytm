import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleOnClick = async() => {
        const resposne = await axios.post("http://localhost:3000/api/v1/user/signin", {
            username,
            password
        }, {withCredentials : true})
        console.log(resposne);
        navigate("/dashboard");
    }
    return (
        <div className="h-screen w-screen flex justify-center items-center ">
            <div className="border-2 border-gray-400 p-4 rounded-2xl ">
                <div className="font-bold text-2xl flex justify-center mb-2">Sign In</div>
                <div className="text-slate-500 text-md pt-1 px-4 pb-4">Enter your credentials to access your account</div>
                
                <div className="my-2">
                    <div className="text-xl font-medium">Email</div>
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
                <Button label={"Sign In"} onclick={handleOnClick}/>
                <div className="font-medium text-center text-lg">
                    Don't have an account? 
                    <span className="underline decoration-2 cursor-pointer"> Sign In</span>
                </div>
            </div>
        </div>
    )
}