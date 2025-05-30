import { useEffect } from "react";
import EachUser from "./EachUser";
import { useRecoilState } from "recoil";
import { UserAtom } from "../store/atoms";
import axios from "axios";
import { useState } from "react";
import Input from "./Input";

export default function SearchUser() {
  const [users, setUsers] = useRecoilState(UserAtom);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    setTimeout(() => {
      const func = async () => {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/bulk",
          {
            params: { filter },
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(response.data);
        setUsers(response.data.user);
      };
      func();
    }, 500);
  }, [filter]);

  return (
    <div className="mx-6 mt-8">
      <div className="text-3xl font-bold mb-4">Users</div>

      <Input
        type="text"
        placeholder="Search Users..."
        className="px-2 border-2 border-gray-300 w-full rounded-md h-12"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />

      {users.map((value, key) => (
        <EachUser
          key={key}
          firstName={value.firstName}
          lastName={value.lastName}
          Id={value._id}
        />
      ))}
    </div>
  );
}
