import React, { useContext, useEffect, useState } from "react";
import { getTasks, updateTask, deleteTask } from "../api/todoApi";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import contextApi from "../Context/contextApi";
import "./TodoListBody.css";

const TodoListBody = () => {
  // const [storeTasks, setStoreTasks] = useState([]);

  const { storeTasks, setStoreTasks } = useContext(contextApi);

  const [dataChange, setDataChange] = useState(false);

  const handleUpdate = async (currentTask) => {
    const tasksList = storeTasks;
    try {
      const tasks = [...tasksList];
      const index = tasks.findIndex((task) => task._id === currentTask);
      tasks[index] = { ...tasks[index] };
      tasks[index].completed = !tasks[index].completed;
      setStoreTasks(tasks);
      await updateTask(currentTask, { completed: tasks[index].completed });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    deleteTask(id);
  };

  useEffect(() => {
    getTasks()
      .then((res) => {
        setStoreTasks(res.data);
        setDataChange(true);
      })
      .catch((err) => {
        console.log(err);
        setDataChange(false);
      });
  }, [storeTasks, setStoreTasks, dataChange]);
  return (
    <div className="list__container flex">
      <Paper elevation={3} className="container">
        <div className="heading">TODOLIST : {storeTasks.length}</div>
        {storeTasks.map((res, key) => {
          return (
            <Paper key={res._id} className="flex task__container">
              <Checkbox
                checked={res.completed === true ? true : false}
                onClick={() => handleUpdate(res._id)}
              />
              <div
                className={
                  res.completed === true ? "task line__through" : "task"
                }
              >
                {res.task}
              </div>
              <Button onClick={() => handleDelete(res._id)}>Delete</Button>
            </Paper>
          );
        })}
      </Paper>
    </div>
  );
};

export default TodoListBody;
