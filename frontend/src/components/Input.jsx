export default function Input({type, placeholder}){
    return <div>
        <input type={type} placeholder={placeholder} className="w-84 my-2 border-2 border-gray-300 rounded-xl py-2 px-4"/>
    </div>
}