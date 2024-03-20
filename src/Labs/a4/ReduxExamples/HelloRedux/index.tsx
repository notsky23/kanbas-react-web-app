import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";

function HelloRedux() {
  const { message } = useSelector((state: LabState) => state.helloReducer);
  
  return (
    <div>
      <h2>Hello Redux</h2>
      <h3>{message}</h3>
    </div>
  );
}

export default HelloRedux;