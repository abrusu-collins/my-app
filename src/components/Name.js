// import React,{Component} from 'react';
function Name(props){
    let shoot=(thiss)=>{
        alert(thiss.type);
    }
        return(
            
            <h1 onClick={(event)=>shoot(event)}>{props.info.name}</h1>
            
        )
   
}

export default Name;