import User from "../Icons/User";

export default function AppBar(){
    return<div className="">
        <div className="flex justify-between p-4">
            <div className="text-3xl px-4 font-bold">Payments App</div>
            <div className="flex gap-2 ">
                <div className="text-slate-900 text-xl font-medium">Hello, User</div>
                <div className=""><User /></div>
            </div>
        </div>
        <div className="pt-2"><hr className="text-gray-300 " /></div>
        
    </div>
}