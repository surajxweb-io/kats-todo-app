import React from "react";

const InputComp = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  setFStatus,
}) => {
  const inputTextHandeller = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandeller = (e) => {
    e.preventDefault();
    if (+inputText.trim().length === 0) {
      return;
    } else {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
    }

    setInputText("");
  };

  const fStatusHandeller = (e) => {
    setFStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandeller}
        required
        type="text"
        className="todo-input"
      />
      <button
        className="todo-button"
        type="submit"
        onClick={submitTodoHandeller}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          onChange={fStatusHandeller}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default InputComp;
