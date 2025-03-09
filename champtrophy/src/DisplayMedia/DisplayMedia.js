import { mediaPartners } from "../App";
import { useContext } from "react";
export default function DisplayMedia(){
    //Creating a pointer or reference for mediaPartners...
    const mPartners=useContext(mediaPartners);  
    return (<div className="container-fluid">
        <mediaPartners.Consumer>
            {value =><h1>Our media partners - {value}</h1>}
            </mediaPartners.Consumer>
    </div>
    )
}