import { useState } from "react";
import User from "../Icons/User";
import Button from "./Button";
import Input from "./Input";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserAtom } from "../store/atoms";

export default function SendMoney(){
    const [sendMoney, setSendMoney] = useRecoilState(UserAtom);
    const handleOnClick = () => {
           setSendMoney(money => !money);
    }
    return <div className="flex justify-center items-center">
        <div className="border-2 border-gray-300 px-8 py-8 rounded-xl">
            <div className="text-2xl font-bold flex justify-center">Send Money</div>
            <div className="flex justify-start mt-4">
                <div><User /></div>
                <div className="text-xl ml-2 ">Friend's Name</div>

            </div>
            <div className="mb-4 mt-4"><Input placeholder={"Amount in Rs"} type={"number"}/></div>
            <Button label={"Intiate transfer"} onclick={handleOnClick}/>
        </div>
    </div>
}