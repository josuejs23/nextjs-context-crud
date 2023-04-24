"use client";
import { createContext, useContext } from "react";
import { v4 as uuid } from "uuid";
import { useLocalStorage } from "../hooks/useLocalStorage";
export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must used whiting a provider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const createTask = ({ title, description, requirements }) => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        title,
        description,
        requirements: requirements.map((requirement) => ({
          ...requirement,
          id: uuid(),
        })),
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  const updateTasks = (id, updatedTask) => {
    console.log(updateTasks);
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    ]);
  };

  const updateRequirements = (id) => {
    console.log(tasks.find((task) => task.id === id));
  };
  return (
    <TaskContext.Provider
      value={{ tasks, createTask, removeTask, updateTasks, updateRequirements }}
    >
      {children}
    </TaskContext.Provider>
  );
};
