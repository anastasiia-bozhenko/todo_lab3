import React, { useState } from 'react';
import "./TodoItem.css";

function TodoItem({todo, onRemove}) {
  const [completed, setCompleted] = useState(false);

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {todo?.text??"Text"}
      </span>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
