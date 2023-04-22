"use client";
import TaskCard from "../components/TaskCard";

import { useTasks } from "../context/TaskContext";
const Page = () => {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div className="flex justify-center">
      <div className="w-7/12">
        {tasks.reverse().map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
