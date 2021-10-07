import { useContext } from "react";
import { ALertCon } from "./App";

function Alert() {
    const alert=useContext(ALertCon)
    if (!alert) return null;
    return (
        <div 
         style ={{
             background:'crimson',
             padding:"20px",
             textAlign:"center",
             color:"white"
         }}
        >
            <h4>This is massages vary important</h4>
        </div>
    )
}
export default Alert;