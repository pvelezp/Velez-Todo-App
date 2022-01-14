import { TodoContext } from "../../context/TodoContext"
import {useContext} from 'react'
import { ITodo } from "../../interfaces";
import {CheckCircleOutlined, DeleteOutlined} from '@ant-design/icons'
import styles from './styles.module.scss'


interface DataProp{
 data: ITodo
}

export const Todo = ({data}:DataProp) => {
    const {deleteTodo,markAsCompleted} = useContext(TodoContext);
    const{id,text, isCompleted}= data

    return (
        <div
        className={styles.todo}
        >
           <div className={styles.todoLeft}>
           <p
           className={`${isCompleted ? styles.checked : ''}`}
           >{text} </p>
           {isCompleted && <CheckCircleOutlined />}
           </div>
            <div className={styles.todoRight}>
            <input type="checkbox"
            checked={isCompleted}
            onChange={()=>markAsCompleted(id)}
            />
            <DeleteOutlined
             onClick={()=>deleteTodo(id)}
            />
            </div>

        </div>
    )
}
