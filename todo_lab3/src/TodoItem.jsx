import React, { useState } from 'react';

function TodoItem({ todo, onRemove }) {
  const [completed, setCompleted] = useState(false);

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
