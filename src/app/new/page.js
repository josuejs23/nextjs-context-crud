"use client";
import React, { useState, useEffect } from "react";
import { useTasks } from "../../context/TaskContext";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const { id } = params;
  const [task, setTask] = useState({ title: "", description: "" });
  const { createTask, tasks = [] } = useTasks();
  const router = useRouter();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  useEffect(() => {
    console.log("Este es el id", id);
    const taskToEdit = tasks.find((task) => task.id === id);
    taskToEdit
      ? setTask({
          title: taskToEdit.title,
          description: taskToEdit.description,
        })
      : null;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      console.log("Editando...");
    } else {
      createTask(task);
    }
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", width: "30%" }}
    >
      <input
        name="title"
        onChange={handleChange}
        placeholder="write a title"
        value={task.title}
      />
      <textarea
        name="description"
        onChange={handleChange}
        placeholder="wirte a description"
        value={task.description}
      />
      <button>Save</button>
    </form>
  );
};

export default page;
