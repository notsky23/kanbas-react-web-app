import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped,   blockScoped,
        constant1,        numberArray1,   stringArray1
    ];

    const todos = [<li>Buy Milk</li>, <li>Buy Bread</li>, <li>Buy Cheese</li>];

    return (
        <>
            <h3>Working with arrays</h3>
            functionScoped = {functionScoped}
            <br />
            blockScoped = {blockScoped}
            <br />
            constant1 = {constant1}
            <br />
            numberArray1 = {numberArray1}
            <br />
            stringArray1 = {stringArray1}
            <br />
            variableArray1 = {variableArray1}
            <br />
            <h5>Todos</h5>
            <ul>{todos}</ul>
            <h5>Todos</h5>
            <ul>{todos.map((todo) => todo)}</ul>

            <ArrayIndexAndLength /> <br />
            <AddingAndRemovingDataToFromArrays /> <br />
            <ForLoops /> <br />
            <MapFunction /> <br />
            <FindFunction /> <br />
            <FindIndex /> <br />
            <FilterFunction /> <br />
        </>
      );

 }

 export default WorkingWithArrays