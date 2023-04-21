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
      style={{ background: "#202020", color: "white" }}
      onClick={(e) => {
        router.push(`/edit/${id}`);
      }}
    >
      <h2>{title}</h2>
      <button onClick={hadledDeleteClick}>Delete</button>
      <p>{description}</p>
    </div>
  );
};

export default TaskCard;
