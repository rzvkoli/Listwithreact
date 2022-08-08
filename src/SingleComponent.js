import React ,{useState} from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function Person({tittle , info}){
    
    const [showInfo , setShowInfo] = useState(false);

    return (
    <div>
        <div className="header">
            <p className="tittle">{tittle}</p>
            <button onClick = {()=> setShowInfo (!showInfo)}>
                { showInfo ? <BsChevronUp /> :      <BsChevronDown /> }     
            </button>
        </div>
        <div className="info">
            {
              showInfo &&  <p>{info}</p>
            }
        </div>
    </div>
  )
}
