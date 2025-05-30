import { useEffect, useState } from "react";
import User from "../Icons/User";
import axios from "axios";

export default function AppBar() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function func(){
      const response = await axios.get(
        "http://localhost:3000/api/v1/user/info",
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data.user);
      setUsername(response.data.user.firstName);
    };
    func();
    
  }, [username]);
  return (
    <div className="">
      <div className="flex justify-between p-4">
        <div className="text-3xl px-4 font-bold">Payments App</div>
        <div className="flex gap-2 ">
          <div className="text-slate-900 text-xl font-medium">
            Hello, {username}
          </div>
          <div className="">
            <User />
          </div>
        </div>
      </div>
      <div className="pt-2">
        <hr className="text-gray-300 " />
      </div>
    </div>
  );
}
