import { useState } from "react";
import Button from "./button";

const Outputscreen = () => {
  let [value, setValue] = useState("");
  let [result, setResult] = useState("");

  function handleClick(number) {
    setValue(value + number);
  }

  function handleClear() {
    setValue("");
    setResult("");
  }

  function handleDelete() {
    setValue(value.slice(0, -1));
  }

  function handleCalculate() {
    setResult(eval(value));
  }

  return (
    <>
      <div>
        <input type="text" value={value} readOnly />
      </div>
      <div>
        <input type="text" value={result} readOnly />
      </div>

      <div>
        <Button onClick={() => handleClick("1")} text="1" />
        <Button onClick={() => handleClick("2")} text="2" />
        <Button onClick={() => handleClick("3")} text="3" />
        <Button onClick={() => handleClick("+")} text="+" />
      </div>
      <div>
        <Button onClick={() => handleClick("4")} text="4" />
        <Button onClick={() => handleClick("5")} text="5" />
        <Button onClick={() => handleClick("6")} text="6" />
        <Button onClick={() => handleClick("-")} text="-" />
      </div>
      <div>
        <Button onClick={() => handleClick("7")} text="7" />
        <Button onClick={() => handleClick("8")} text="8" />
        <Button onClick={() => handleClick("9")} text="9" />
        <Button onClick={() => handleClick("*")} text="*" />
      </div>
      <div>
        <Button onClick={() => handleClick("0")} text="0" />
        <Button onClick={() => handleClick(".")} text="." />
        <Button onClick={handleClear} text="C" />
        <Button onClick={() => handleClick("/")} text="/" />
      </div>
      <div>
        <Button onClick={handleDelete} text="DEL" />
        <Button onClick={handleCalculate} text="=" />
      </div>
    </>
  );
};

export default Outputscreen;
