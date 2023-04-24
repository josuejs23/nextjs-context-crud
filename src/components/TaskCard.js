import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Requirement from "./Requirement";
import RequirementList from "./RequirementList";

const TaskCard = ({
  task: { title, description, id, requirements = [] },
  task,
}) => {
  const router = useRouter();
  const { removeTask } = useTasks();
  console.log(requirements);
  const getProgress = () => {
    return (
      (requirements.filter((requirement) => requirement.done === true).length /
        requirements.length) *
        100 || "0"
    );
  };
  const hadledDeleteClick = (e) => {
    e.stopPropagation();
    if (window.confirm("Are your sure?")) {
      removeTask(id);
      toast.success("Task deleted");
    }
  };
  return (
    <div
      className="bg-gray-700 hover:bg-slate-600 cursor-pointer px-20 py-5 m-2"
      onClick={(e) => {
        router.push(`/edit/${id}`);
      }}
    >
      <div className="flex justify-between">
        <h2>{title}</h2>
        <button
          className="inline-flex items-center bg-red-800 hover:bg-red-700 px-10 py-2 rounded-md"
          onClick={hadledDeleteClick}
        >
          Delete
        </button>
      </div>
      <p>{description}</p>
      <RequirementList requirements={requirements} id={id} task={task} />
      <span className="text-gray-400 text-xs">{id}</span>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-800">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${getProgress()}%` }}
        >
          {" "}
          {`${Math.floor(getProgress())}%`}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
