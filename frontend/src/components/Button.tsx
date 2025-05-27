export default function Button({label, onclick}){
    return <div>
        <div className="bg-black text-white px-4 py-2 rounded-xl flex justify-center text-xl hover:bg-gray-500 cursor-pointer" onClick={onclick}>{label}</div>
    </div>
}