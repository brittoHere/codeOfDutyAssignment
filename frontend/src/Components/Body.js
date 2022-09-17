import React, { useState } from "react";
import { addTask } from "../api/todoApi";
import { addCalc } from "../api/calcApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calculator from "awesome-react-calculator";

import "./Body.css";

const Body = () => {
  const [task, setTask] = useState("");

  console.log(typeof task);

  const [calculatorResult, setCalculatorResult] = useState("");
  console.log("Calculator Result Is ", calculatorResult);

  const [error, setError] = useState(false);
  // const [popUpCalculator, setPopUpCalculator] = useState(false);

  const navigate = useNavigate();

  const re = /^[0-9\b]+$/;

  const addTodo = (item) => {
    console.log(re.test(item));
    if (re.test(item) === true) {
      setTask(parseInt(item));
    } else {
      setTask(item);
    }
  };

  const submitAddTodo = () => {
    setError(false);

    if (task === "") {
      setError(true);
    } else if (task !== "") {
      setError(false);

      if (typeof task !== "string") {
        setError(true);
        toast.error(
          "Enter numbers ? click on calculate button.Don't use +,-,/ etc special operators between values",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            progress: undefined,
          }
        );
      } else {
        addTask({ task: task })
          .then((res) => {
            console.log(res);
            setError(false);
            navigate("/todo");
          })
          .catch((err) => {
            console.log(err);
            setError(true);
          });
      }
    }
  };

  const handleInput = (newInput) => {
    console.log("New Input Is ", newInput);
  };

  const onResultChange = (resultChange) => {
    setCalculatorResult(`${resultChange.expression} ${resultChange.result}`);
    addCalc({ values: `${resultChange.expression} ${resultChange.result}` })
      .then((res) => {
        console.log(res);
        navigate("/calculate");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="banner__content">
      <h1 className="banner__title">CodeOfDuty</h1>
      <div
        style={typeof task === "number" ? { display: "none" } : null}
        className="input__box"
      >
        <input
          onChange={(e) => addTodo(e.target.value)}
          className={error ? "input__error" : "input"}
          type={typeof task === "string" ? "text" : "number"}
          required="required"
        />

        <span className="label">Add Todo</span>
      </div>

      {typeof task === "number" && (
        <div className="calculator">
          <Calculator
            onNewInput={(newInput) => handleInput(newInput)}
            onResultChange={(resultChange) => onResultChange(resultChange)}
          />
        </div>
      )}

      <div>
        <button
          style={typeof task === "number" ? { display: "none" } : null}
          onClick={() => submitAddTodo()}
          className="submit__btn"
        >
          Add Todo
        </button>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Body;
