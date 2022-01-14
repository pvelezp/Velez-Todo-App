import { TodoContext } from "../../context/TodoContext";
import {useContext} from 'react'
import { Todo } from "../todo";
import { ITodo } from "../../interfaces";
import styles from './styles.module.scss'

export const TodoList = () => {
    const {todos} = useContext(TodoContext);
    return (
        <div className={styles.todoList}>
        <h2>Todos</h2>
        <div className={styles.todoListTodos}>
            {!todos.length && <p>No todos. Write a todo please.</p>}
            {todos?.map((todo:ITodo)=>(
                <Todo
                key={todo.id}
                data={todo}
                />
            ))}
        </div>
        </div>
    )
}
