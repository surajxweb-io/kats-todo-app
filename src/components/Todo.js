import React from "react";

const Todo = ({ text, id, el, todos, setTodos }) => {
  const deleteHandeller = (e) => {
    e.preventDefault();
    setTodos(todos.filter((eachTodos) => eachTodos.id !== el.id));
  };

  const checkHandeller = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((eachTodos) => {
        if (eachTodos.id === el.id) {
          return {
            ...eachTodos,
            completed: !eachTodos.completed,
          };
        }
        return eachTodos;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${el.completed ? "completed" : ""}`}>{text}</li>

      <button className="complete-btn" onClick={checkHandeller}>
        <i className="fas fa-stamp"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandeller}>
        <i className="fas fa-trash"> </i>
      </button>
    </div>
  );
};

export default Todo;
