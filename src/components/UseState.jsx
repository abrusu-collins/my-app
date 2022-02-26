
import {useState} from 'react';
function UseState(){
const[girl,setGirl]=useState(["Collins","Sedem","Abrusu"]);

let sets=(num)=>{
        for(let i=0;i<=girl.length-1;i++){
            let rand=Math.floor(Math.random()*(i+1));
            let randVal=num[rand];
             num[rand]=num[i];
             num[i]=randVal;

        }
        return num;
    }


return (
    <div>
    <h1>I love {girl[1]}</h1>
    <button onClick={}>Switch</button>
    </div>
);



}
export default UseState;