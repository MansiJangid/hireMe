import { useNavigate } from "react-router-dom"
import {Jobs} from "./Jobs"

export const Home =()=>{
    const navigate = useNavigate();
    return (
        <div>
            <Jobs/>
        </div>
    )

}