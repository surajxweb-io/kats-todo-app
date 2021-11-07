import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((eachTodos) => (
          <Todo
            el={eachTodos}
            key={eachTodos.id}
            text={eachTodos.text}
            id={eachTodos.id}
            status={eachTodos}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
