import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const { createTasks } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTasks(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className=" bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl text-white  mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="rounded p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="rounded p-3 w-full mb-2"
        ></textarea>
        <button className="bg-cyan-600 hover:bg-cyan-400 rounded px-3 py-2 text-white">Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
