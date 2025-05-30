import { useRecoilState } from "recoil";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import SearchUser from "../components/SearchUser";
import { UserAtom } from "../store/atoms";

export default function DashBoard(){
    
    return <div>
        <AppBar />
        <Balance />
        <SearchUser />
    </div>
    
}