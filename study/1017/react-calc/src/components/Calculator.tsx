import React from "react";
import { useState, useEffect } from "react";
import "./Calculator.css";

export default function Calculator() {
  //const [calc, setCalc] = useState(0);
  const [firstNumber, setFirstNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");

  const handNumberClick = (num: string) => {
    if (operator === "") {
      // 연산자 없으면 -> 첫번째 입력 숫자
      setFirstNumber((prev) => prev + num);
    } else {
      // 두번째 입력 숫자
      setSecondNumber((prev) => prev + num);
    }
  };

  const handleOperatorClick = (op: string) => {
    setOperator(op);
  };

  useEffect(() => {
    console.log("op : ", operator);
    console.log("sec : ", secondNumber);
  }, [firstNumber, operator, secondNumber, result]);

  const handleEqulClick = () => {
    if (firstNumber && operator && secondNumber) {
    }
    const num1 = firstNumber;
    const num2 = secondNumber;

    const res = calcurate(num1, operator, num2);

    setResult(res.toString());

    // 결과 나타낸 후, 이후 추가 계산을 위해 결과값을 첫번째 숫자로 지정
    setFirstNumber(res.toString());
    setSecondNumber(""); // 두번쨰 입력 숫자와 연산자는 "" 로 초기화
    setOperator("");
    setResult("");
  };

  const calcurate = (a: string, op: string, b: string) => {
    const n1 = parseFloat(a);
    const n2 = parseFloat(b);

    let calcResult = 0;

    switch (op) {
      case "+":
        calcResult = n1 + n2;
        return calcResult;
      case "-":
        return n1 - n2;
      case "*":
        return n1 * n2;
      case "÷":
        return n1 / n2;
      default:
        return n1;
    }
  };

  const calcDisplay = result || secondNumber || operator || firstNumber || "0";

  return (
    <div className="calculator">
      <div className="display">
        <p>{calcDisplay}</p>
      </div>

      <div className="buttons">
        {/* <button className="btn function">AC</button>
        <button className="btn function">+/-</button>
        <button className="btn function">%</button>
        <button className="btn operator">÷</button> */}

        <button className="btn number" onClick={() => handNumberClick("7")}>
          7
        </button>
        <button className="btn number" onClick={() => handNumberClick("8")}>
          8
        </button>
        <button className="btn number" onClick={() => handNumberClick("9")}>
          9
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperatorClick("*")}
        >
          ×
        </button>

        <button className="btn number" onClick={() => handNumberClick("4")}>
          4
        </button>
        <button className="btn number" onClick={() => handNumberClick("5")}>
          5
        </button>
        <button className="btn number" onClick={() => handNumberClick("6")}>
          6
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperatorClick("-")}
        >
          −
        </button>

        <button className="btn number" onClick={() => handNumberClick("1")}>
          1
        </button>
        <button className="btn number" onClick={() => handNumberClick("2")}>
          2
        </button>
        <button className="btn number" onClick={() => handNumberClick("3")}>
          3
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>

        <button className="btn zero" onClick={() => handNumberClick("0")}>
          0
        </button>
        <button className="btn number" onClick={handleEqulClick}>
          =
        </button>
        <button
          className="btn operator"
          onClick={() => handleOperatorClick("÷")}
        >
          ÷
        </button>
      </div>
    </div>
  );
}
