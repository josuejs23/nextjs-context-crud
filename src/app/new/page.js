"use client";
import React, { useState } from "react";
import { useTasks } from "../../context/TaskContext";
import { useRouter } from "next/navigation";

const page = () => {
  const [task, setTask] = useState();
  const { createTask, tasks } = useTasks();
  const router = useRouter();

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", width: "30%" }}
    >
      <input name="title" onChange={handleChange} placeholder="write a title" />
      <textarea
        name="description"
        onChange={handleChange}
        placeholder="wirte a description"
      />
      <button>Save</button>
    </form>
  );
};

export default page;
