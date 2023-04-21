"use client";
import React, { useEffect } from "react";
import { useTasks } from "../../context/TaskContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const page = ({ params }) => {
  const { id } = params;
  const { createTask, tasks, updateTasks } = useTasks();
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log("Este es el id", id);
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setValue("title", taskToEdit.title);
      setValue("description", taskToEdit.description);
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTasks(params.id, data);
      toast.success("Task updated");
    } else {
      createTask(data);
      toast.success("Task created");
    }
    router.push("/");
  });

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column", width: "30%" }}
    >
      <input
        placeholder="write a title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>This field is required</span>}

      <textarea
        placeholder="wirte a description"
        {...register("description", { required: true })}
      />
      {errors.description && <span>this field is required</span>}

      <button>Save</button>
    </form>
  );
};

export default page;
