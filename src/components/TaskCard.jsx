import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className= 'text-xl font-bold capitalize' >{task.title}</h1>
      <p className=' text-gray-500 text-sm'>{task.description}</p>
      <button className=" bg-red-500 rounded-sm px-2 py-1 mt-4 hover:bg-red-700" onClick={() => deleteTask(task.id)}> Eliminar </button>
    </div>
  );
};

export default TaskCard;
