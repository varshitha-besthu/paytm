import EachUser from "./EachUser";

export default function SearchUser(){
    return <div className="mx-6 mt-8">
        <div className="text-3xl font-bold mb-4">Users</div>
        <input type="text" placeholder="Search Users..." className="px-2 border-2 border-gray-300 w-full rounded-md h-12"/>
        <EachUser />
    </div>
}