import { Button, Checkbox, Paper } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { deleteCalc, getCalcs, updateCalc } from "../api/calcApi";
import contextApi from "../Context/contextApi";

const CalculatorListBody = () => {
  const { storeTasks, setStoreTasks } = useContext(contextApi);

  const [calcDataChange, setCalcDataChange] = useState(false);
  const handleUpdate = async (currentCalc) => {
    const calcList = storeTasks;
    try {
      const calcs = [...calcList];
      const index = calcs.findIndex((calc) => calc._id === currentCalc);
      calcs[index] = { ...calcs[index] };
      calcs[index].completed = !calcs[index].completed;
      setStoreTasks(calcs);
      await updateCalc(currentCalc, { completed: calcs[index].completed });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    deleteCalc(id);
  };
  useEffect(() => {
    getCalcs().then((res) => {
      console.log(res.data);
      setStoreTasks(res.data);
      setCalcDataChange(true);
    });
  }, [storeTasks, setStoreTasks, calcDataChange]);

  return (
    <div className="list__container flex">
      <Paper elevation={3} className="container">
        <div className="heading">CalculationList : {storeTasks.length}</div>
        {storeTasks.map((res, key) => {
          return (
            <Paper key={res._id} className="flex task__container">
              <Checkbox
                onClick={() => handleUpdate(res._id)}
                checked={res.completed === true ? true : false}
              />
              <div
                className={
                  res.completed === true ? "task line__through" : "task"
                }
              >
                {res.values}
              </div>
              <Button onClick={() => handleDelete(res._id)}>Delete</Button>
            </Paper>
          );
        })}
      </Paper>
    </div>
  );
};

export default CalculatorListBody;
