import {useState} from 'react';

function Forms(){


const[name,setName]=useState("Collins");


    return(
        <form>
        <label for="name">Name</label>
        <input onChange={(e)=>{setName(e.target.value)}} type="text" name="name" ></input>
        <p>My name is {name}</p>
         <button  onClick={(e)=>{
             e.preventDefault();
             console.log(name);
         }} type="submit"> Submit</button>
        </form>
    )
}

export default Forms;