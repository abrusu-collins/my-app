
import {useState} from 'react';
function UseState(){
const[Boy,setBoy]=useState("Collins");



return (
    <div>
    <h1>I love {Boy}</h1>
    <button onClick={()=>setBoy("Sedem")}>Switch</button>
    </div>
);



}
export default UseState;