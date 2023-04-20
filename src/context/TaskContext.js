"use client";
import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used whiting a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "my first task",
      description: "some task 1",
    },
    {
      id: uuid(),
      title: "my first task",
      description: "some task 2",
    },
    {
      id: uuid(),
      title: "my first task",
      description: "some task 3",
    },
  ]);

  const createTask = ({ title, description }) => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        title,
        description,
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };
  return (
    <TaskContext.Provider value={{ tasks, createTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
