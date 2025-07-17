import { useNavigate } from "react-router-dom"
import {Jobs} from "./Jobs"
import Header from "../components/job/Header";

export const Home =()=>{
    const navigate = useNavigate();
    return (
        <div>
            
            <Jobs/>

        </div>
    )

}