import {useState} from 'react'
import { ITodo } from '../interfaces'

interface SubmitProps{
    addTodo: (todo:ITodo)=>void;
}

export const useSubmit= ({addTodo}:SubmitProps)=>{
    const [todoText, setTodoText] = useState<string>('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodoText(e.target.value)
    }

    const handleSubmit = (e:React.SyntheticEvent) =>{  
        e.preventDefault()
        if(todoText.length<2) return;

        const newTodo = {
            id:Date.now(),
            text:todoText,
            isCompleted:false
        }
        
        addTodo(newTodo)
        setTodoText('')
    }

    return {
        todoText,
        handleSubmit,
        handleChange
    }
}