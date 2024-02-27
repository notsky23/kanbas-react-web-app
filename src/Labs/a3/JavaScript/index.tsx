import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import ArrowFunctions from "./functions/ArrowFunctions";
import ES5Functions from "./functions/ES5Functions";
import FunctionDestructing from "./functions/FunctionDestructing";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import ImpliedReturn from "./functions/ImpliedReturn";
import Destructing from "./json/Destructing";
import House from "./json/House";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import TemplateLiterals from "./string/TemplateLiterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";

function JavaScript() {
    console.log('Hello World!');
    return(
       <div>
          <h1>JavaScript</h1> <br />
          <h2>Variables</h2>
          <VariablesAndConstants /> <br />
          <VariableTypes /> <br />
          <BooleanVariables/> <br />
          <h2>Conditionals</h2>
          <IfElse /> <br />
          <TernaryOperator /> <br />
          <h2>Functions</h2>
          <ES5Functions /> <br />
          <ArrowFunctions /> <br />
          <ImpliedReturn /> <br />
          <FunctionParenthesisAndParameters /> <br />
          <FunctionDestructing /> <br />
          <h2>Arrays</h2>
          <WorkingWithArrays /> <br />
          <h2>JSON</h2>
          <JsonStringify /> <br />
          <House /> <br />
          <Spreading /> <br />
          <Destructing /> <br />
          <h2>String</h2>
          <TemplateLiterals /> <br />
       </div>
    );
 }
 export default JavaScript