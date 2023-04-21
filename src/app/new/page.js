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
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column", width: "30%" }}
        className="bg-gray-700 p-10"
      >
        <h2>New Task</h2>
        <input
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder="write a title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="block text-red-400 mb-2">
            This field is required
          </span>
        )}

        <textarea
          className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full"
          placeholder="wirte a description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="block text-red-400 mb-2">
            this field is required
          </span>
        )}

        <button
          className={
            "bg-blue-500 hover:bg-blue-400 rounded-sm disabled:opacity-30"
          }
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default page;
