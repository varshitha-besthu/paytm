export default function Input({type, placeholder, onChange}){
    return <div>
        <input type={type} placeholder={placeholder} className="w-full my-2 border-2 border-gray-300 rounded-xl py-2 px-4" onChange={onChange}/>
    </div>
}