import React, { useState } from "react";
import { Link } from "react-router-dom";
// import contextApi from "../Context/contextApi";
import "./Header.css";

const Header = () => {
  const [todoHover, setTodoHover] = useState(false);
  const [calculatorHover, setCalculatorHover] = useState(false);

  // const { storeTasks } = useContext(contextApi);

  return (
    <div className="nav__bar-container">
      <a className="site__title" href="/">
        <h1>CodeOfDuty</h1>
      </a>

      <ul className="list__container">
        <li>
          <Link
            onMouseOver={() => setTodoHover(true)}
            onMouseOut={() => setTodoHover(false)}
            className="todo__list"
            to="/todo"
          >
            {" "}
            <i className="fa-solid fa-list todo__icon"></i>
            <span
              className={todoHover ? "underline__todo__text" : "todo__text"}
            >
              TodoList
            </span>
          </Link>
        </li>
        <li>
          <Link
            onMouseOver={() => setCalculatorHover(true)}
            onMouseOut={() => setCalculatorHover(false)}
            className="calculate__list"
            to="/calculate"
          >
            <i className="fa-solid fa-calculator calculator__icon"></i>
            <span
              className={
                calculatorHover
                  ? "underline__calculator__text"
                  : "calculator__text"
              }
            >
              CalculatorList
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
