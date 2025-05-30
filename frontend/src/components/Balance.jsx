import axios from "axios";
import { useEffect, useState } from "react";

export default function Balance() {
  const [balance, setBalance] = useState(1);
  useEffect(() => {
    const func = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data.balance);
      setBalance(response.data.balance);
    };
    func();
  }, [balance]);
  return (
    <div className="flex">
      <div className="text-3xl font-bold px-6 pt-8 pb-4">Your </div>
      <div className="text-3xl font-bold px-6 pt-8 pb-4">{balance}</div>
    </div>
  );
}
