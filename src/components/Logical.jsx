function Logical(props){
let logics=props.logics;

return(
    <div>
  {
      
      logics.length>0 && 
      <h1>You have {logics.length} logical operators</h1>
  }
  </div>
)
}

export default Logical;