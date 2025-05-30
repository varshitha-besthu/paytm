import { useEffect, useState } from "react";
import User from "../Icons/User";
import Button from "./Button";
import SendMoney from "./SendMoney";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { money } from "../store/money";

export default function EachUser({ firstName, lastName, Id }) {
  const navigate = useNavigate();
  const [send, setSend] = useState(false);
  const [transfer, setTransfer] = useRecoilState(money);
  const handleOnClick = () => {
    setTransfer({ Id: Id, name: firstName, amount: 0 });
    setSend(!send);
  };

  useEffect(() => {
    if (send) {
      navigate("/sendMoney");
    }

  }, [send]);

  return (
    <div className="flex justify-between mt-8">
      <div className="flex">
        <div>
          <User />
        </div>
        <div className="font-bold text-2xl ml-4">
          {firstName} {lastName}
        </div>
      </div>
      <div>
        <Button label={"Send Money"} onclick={handleOnClick} />
      </div>
    </div>
  );
}
