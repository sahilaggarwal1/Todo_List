import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos");
  };

  const addTodo = (title, desc) => {
    console.log("I am Adding ", title, desc);
    let sno = 1; // default sno value if todos is empty

    if (todos.length > 0) {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState([
    
  ]);
  return (
    <div>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
