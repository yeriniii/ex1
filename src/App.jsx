import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { plusN } from "./redux/modules/calculator";
import { minusN } from "./redux/modules/calculator";
import { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator.number);

  const plusHandler = () => {
    dispatch(plusN(number));
  };
  const minusHandler = () => {
    dispatch(minusN(number));
  };
  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={number} onChange={(e) => setNumber(+e.target.value)} />{" "}
        만큼을 <button onClick={plusHandler}>더할게요</button>{" "}
        <button onClick={minusHandler}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
