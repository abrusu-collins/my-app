import Missed from './Missed'

import Goal from './Goal'
function IsGoal(props){
    let isGoal=props.isGoal;
   
return isGoal?<Goal />:<Missed />;

    


 

}

export default IsGoal;