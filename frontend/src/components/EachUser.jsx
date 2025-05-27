import { useState } from "react";
import User from "../Icons/User";
import Button from "./Button";
import SendMoney from "./SendMoney";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserAtom } from "../store/atoms";

export default function EachUser(){
    const [sendMoney, setSendMoney] = useRecoilState(UserAtom);
    const handleOnClick = () => {
           setSendMoney(money => !money);
    }
    if(sendMoney){
        return <SendMoney />
    }
    return <div className="flex justify-between mt-8">
        <div className="flex">
            <div><User /></div>
            <div className="font-bold text-2xl ml-4">User 1</div>
        </div>
        <div>
            <Button label={"Send Money"} onclick={handleOnClick}/>
        </div>
    </div>
}