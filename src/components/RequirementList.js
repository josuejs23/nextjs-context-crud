import React from "react";
import Requirement from "./Requirement";

const RequirementList = ({ task, id, requirements = [] }) => {
  return (
    <div>
      {requirements.map((requirement) => (
        <Requirement task={task} requirement={requirement} id={id} />
      ))}
    </div>
  );
};

export default RequirementList;
