import {useContext} from "react"
import { TodoContext } from "../../context/TodoContext";
import { useSubmit } from "../../hooks/useSubmit";
import styles from './styles.module.scss'

export const TodoForm = () => {
    const {addTodo} = useContext(TodoContext);
    const {handleSubmit,todoText,handleChange} = useSubmit({addTodo})
    
    return (
        <form
        className={styles.form}
        onSubmit={handleSubmit}
        >
            <input
            value={todoText}
            onChange={handleChange}
            placeholder="Add a todo" />
            <button type="submit">Add</button>
        </form>
    )
}
