import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../assets/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTasks = (taskTitle, taskDescription) => {
    setTasks([
      ...tasks,
      { id: tasks.length, title: taskTitle, description: taskDescription },
    ]);
  };

  const deleteTask = (taskID) => {
    setTasks(tasks.filter((task) => task.id != taskID));
  };

  useEffect(() => {
    setTasks(data);
  }, []);


  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTasks,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
