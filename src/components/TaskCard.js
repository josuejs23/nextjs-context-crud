import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const TaskCard = ({ task: { title, description, id } }) => {
  const router = useRouter();
  const { removeTask } = useTasks();
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
      <span className="text-gray-400 text-xs">{id}</span>
    </div>
  );
};

export default TaskCard;
