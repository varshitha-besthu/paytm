export default function Button({label}){
    return <div>
        <div className="bg-black text-white px-4 py-2 rounded-xl flex justify-center text-xl hover:bg-gray-500 cursor-pointer">{label}</div>
    </div>
}