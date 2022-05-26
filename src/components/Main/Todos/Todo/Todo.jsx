import React from "react";
import styles from "./todo.module.css";
import { useDispatch } from "react-redux";
import { deleteTodoById, setIsChecked } from "../../../../redux/slices/todos";

export default function Todo({ todo, tabs }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapperTodoandDelete}>
      <div
        key={todo.id}
        className={styles.wrapperTodo}
        onClick={() => {
          dispatch(setIsChecked(todo.id));
        }}
      >
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => {}}
        />{" "}
        <span
          className={
            todo.completed
              ? `${styles.textTodo} ${styles.stroke}`
              : styles.textTodo
          }
        >
          {" "}
          {todo.text}
        </span>
      </div>
        {tabs[2].isActive && (
         <svg
         className={styles.path}
         xmlns="http://www.w3.org/2000/svg"
         height="48px"
         width="48px"
         onClick={() => dispatch(deleteTodoById(todo.id))}
       >
         <path d="M15 39H33Q33 39 33 39Q33 39 33 39V15H15V39Q15 39 15 39Q15 39 15 39ZM10.5 11V8H17.2L19.2 6H28.8L30.8 8H37.5V11ZM15 42Q13.8 42 12.9 41.1Q12 40.2 12 39V12H36V39Q36 40.2 35.1 41.1Q34.2 42 33 42ZM15 39H33Q33 39 33 39Q33 39 33 39H15Q15 39 15 39Q15 39 15 39Z" />
       </svg>
        )} 
      </div>
    );
  }