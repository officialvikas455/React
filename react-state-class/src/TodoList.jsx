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
    <div style={styles.page}>

      {/* Card Container */}
      <div style={styles.card}>

        <h2 style={styles.title}>📝 My Todo List</h2>

        {/* Input Row */}
        <div style={styles.inputRow}>
          <input
            type="text"
            placeholder="Add a task..."
            value={newTodo}
            onChange={updateTodoValue}
            style={styles.input}
          />
          <button onClick={addNewTask} style={styles.addButton}>
            + Add Task
          </button>
        </div>

        <hr style={styles.divider} />

        <h4 style={styles.subTitle}>Tasks</h4>

        {/* Task List */}
        <ul style={styles.list}>
          {todo.map((todo) => (
            <li key={todo.id} style={styles.listItem}>

              {/* Task Text */}
              <span style={todo.isDone ? styles.donTask : styles.taskText}>
                {todo.task}
              </span>

              {/* Action Buttons */}
              <div style={styles.btnGroup}>
                <button
                  onClick={() => MarkAsDone(todo.id)}
                  style={styles.doneButton}
                >
                  ✅ Done
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  style={styles.deleteButton}
                >
                  🗑 Delete
                </button>
              </div>

            </li>
          ))}
        </ul>

        {/* Mark All Done Button */}
        <button onClick={markAllDone} style={styles.markAllButton}>
          ✔ Mark All as Done
        </button>

      </div>
    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "60px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },

  title: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "20px",
    textAlign: "center",
  },

  inputRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "10px 14px",
    fontSize: "15px",
    border: "1.5px solid #cbd5e0",
    borderRadius: "8px",
    outline: "none",
    color: "white",
    backgroundColor: "#4C51BF",  // ✅ added so white text is visible
  },

  // ✅ Fixed: was using CSS syntax, converted to JS object
  addButton: {
    padding: "10px 18px",
    fontSize: "14px",
    fontWeight: "600",
    backgroundColor: "#4C51BF",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  divider: {
    border: "none",
    borderTop: "1.5px solid #e2e8f0",
    marginBottom: "16px",
  },

  subTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#718096",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "12px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "24px",
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f7fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    padding: "12px 16px",
  },

  taskText: {
    fontSize: "15px",
    color: "#2d3748",
    flex: 1,
  },

  donTask: {
    fontSize: "15px",
    color: "#a0aec0",
    textDecorationLine: "line-through",
    flex: 1,
  },

  btnGroup: {
    display: "flex",
    gap: "8px",
    marginLeft: "12px",
  },

  doneButton: {
    padding: "6px 12px",
    fontSize: "13px",
    fontWeight: "500",
    backgroundColor: "#c6f6d5",
    color: "#276749",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  deleteButton: {
    padding: "6px 12px",
    fontSize: "13px",
    fontWeight: "500",
    backgroundColor: "#fed7d7",
    color: "#9b2c2c",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  markAllButton: {
    width: "100%",
    padding: "12px",
    fontSize: "15px",
    fontWeight: "600",
    backgroundColor: "#ebf8ff",
    color: "#2b6cb0",
    border: "1.5px solid #bee3f8",
    borderRadius: "10px",
    cursor: "pointer",
  },

};