import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1> <br />
          <VariablesAndConstants /> <br />
          <VariableTypes /> <br />
          <BooleanVariables/> <br />
          <IfElse /> <br />
          <TernaryOperator /> <br />
       </div>
    );
 }
 export default JavaScript