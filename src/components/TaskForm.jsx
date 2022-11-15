import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({ title, description });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-4xl text-center mb-3 text-white font-bold capitalize font-mono">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
          required
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
          required
        />
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400 transition-transform hover:-translate-y-1 hover:scale-110" >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
