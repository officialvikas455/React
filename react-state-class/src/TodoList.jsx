import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todo, setTodos] = useState([{task : "sample tasks", id : uuidv4(), isDone : false}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {

    setTodos((prevTodos)=>{
      return [...prevTodos, {task: newTodo, id: uuidv4()}];

    });
    setNewTodo("");
  };

  let updateTodoValue = (event) =>{
    setNewTodo(event.target.value);

  }
   //Delete method 
  let deleteTodo = (id) => {
    setTodos(todo.filter((todo) => todo.id != id ));

  }
  let markAllDone = () =>{
    setTodos(
      todo.map((todo) => {
        return {
          ...todo,
         isDone : true,
        }
      })
    )
  }

  let MarkAsDone = (id) => {
    setTodos(
      todo.map((todo) => {
        if(todo.id == id){
          return {
            ...todo,
            isDone : true,
          };
        }else{
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <br /><br /><br />
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br /><br /><br /><br />
      <hr />
      <h4>Task Todo</h4>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine : "line-through"} : {}}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={ ()=> deleteTodo(todo.id)}>Delete</button>
            <button onClick={ ()=> MarkAsDone(todo.id)}>MarkAsDone</button>
            </li>
        ))}
      </ul>
      <br /> <br />
      <button onClick={markAllDone}>Mark as All Done</button>
    </div>
  );
}