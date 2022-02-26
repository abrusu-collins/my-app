import {useState} from 'react';
function Multiples(){

const [Details,setDetails]=useState({name:"Collins Abrusu",age:21})


    return(
        <form>
        <label for="name">Name</label>
        <input type="text" name="name"></input>
        

        <label for="Age">Age</label>
        <input type="Number" name="Age"></input>

        <button onClick={(e)=>{
            e.preventDefault();
            setDetails({name:{}})
        }}>Submit</button>
        <p> I am {Details.name}</p>
        <p> I am {Details.age } years old</p>
      
        
        </form>
    )
}

export default Multiples;