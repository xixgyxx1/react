import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./src/component/Box";
import GrandSonBox from "./src/component/GrandSonBox";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "me", password: "pw" } });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: 3 } });
  };

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={increase}>증가</button>
      <button onClick={decrement}>감소</button>
      <h1>
        {id},{password}
      </h1>
      <button onClick={login}>로그인</button>
      <Box />
      <GrandSonBox />
    </div>
  );
}

export default App;
