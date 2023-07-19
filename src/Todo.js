import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css"

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, inputValue]);
    setInputValue("");
  }

  function handleDelete(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
