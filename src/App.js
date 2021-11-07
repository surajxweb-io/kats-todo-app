import React, { useState, useEffect } from "react";
import "./App.css";
import InputComp from "./components/InputComp";
import TodoList from "./components/TodoList";
import Logo from "./components/UIComp/Logo";
import Footer from "./components/UIComp/Footer";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [fStatus, setFStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandeller();
  }, [todos, fStatus]);

  const filterHandeller = () => {
    switch (fStatus) {
      case "all":
        setFilteredTodos(todos);
        break;
      case "completed":
        setFilteredTodos(
          todos.filter((eachtodo) => eachtodo.completed === true)
        );
        break;
      case "uncompleted":
        setFilteredTodos(
          todos.filter((eachtodo) => eachtodo.completed === false)
        );
        break;
      default:
        setFilteredTodos(todos);
    }
  };
  return (
    <div className="App">
      <Logo />
      <header>
        <h1>What is the plan today?</h1>
      </header>
      <InputComp
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setFStatus={setFStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
      <Footer />
    </div>
  );
}

export default App;
