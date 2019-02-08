import React, { useState } from "react";

import Todo from "./Todo.js";

const TodoForm = function({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit="{handleSubmit}">
        <input
          type="text"
          className="input"
          value={value}
          onchange={e => setValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default TodoForm;
