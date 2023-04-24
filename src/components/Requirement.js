"use client";
import { useTasks } from "@/context/TaskContext";
import React, { useState } from "react";

const Requirement = ({
  task,
  id,
  requirement: { description, done, id: reqId },
}) => {
  const [complete, setComplete] = useState(done);

  const { updateTasks, tasks } = useTasks();

  const handleDoneClick = (e) => {
    e.stopPropagation();
    setComplete(!complete);
    const taskToUpdate = tasks.find((task) => task.id === id);
    updateTasks(id, {
      ...taskToUpdate,
      ...taskToUpdate.requirements.map((requirement) =>
        requirement.id === reqId
          ? { ...requirement, done: complete }
          : requirement
      ),
    });
    console.log(tasks[0].requirements);
  };

  return (
    <div style={{ display: "flex" }}>
      {description ? (
        <>
          <span
            onClick={handleDoneClick}
            className={`${complete ? "line-through" : ""}`}
          >
            {description}!
          </span>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Requirement;
