import { useState } from "react";
import User from "../Icons/User";
import Button from "./Button";
import Input from "./Input";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserAtom } from "../store/atoms";
import { money } from "../store/money";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SendMoney() {
  const [transfer, setTransfer] = useRecoilState(money);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const handleClick = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/v1/account/transfer",
      {
        amount: amount,
        to: transfer.Id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    navigate("/dashboard");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 border-gray-300 px-8 py-8 rounded-xl">
        <div className="text-2xl font-bold flex justify-center">Send Money</div>
        <div className="flex justify-start mt-4">
          <div>
            <User />
          </div>
          <div className="text-xl ml-2 ">{transfer.name}</div>
        </div>
        <div className="mb-4 mt-4">
          <Input
            placeholder={"Amount in Rs"}
            type={"number"}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <Button label={"Intiate transfer"} onclick={handleClick} />
      </div>
    </div>
  );
}
