import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList1 from "./todos/TodoList1";
import TodoList2 from "./todos/TodoList2";
import TodoList3 from "./todos/TodoList3";

function ReduxExamples() {
    return (
        <div>
            <h1>Redux Examples</h1> <br />
            <HelloRedux /> <br />
            <CounterRedux /> <br />
            <AddRedux /> <br />
            <TodoList1 /> <br />
            <TodoList2 /> <br />
            <TodoList3 /> <br />
        </div>
    );
}

export default ReduxExamples;