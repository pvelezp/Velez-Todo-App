

import {useState, createContext} from 'react'
import { IProviderProps, ITodo } from '../interfaces'

interface AppContextInterface{
    todos: ITodo[];
    addTodo:(todo: ITodo) => void;
    deleteTodo:Function;
    markAsCompleted:Function;
}

export const TodoContext = createContext<AppContextInterface>({
    todos: [],
    addTodo:()=>{},
    deleteTodo:()=>{},
    markAsCompleted:()=>{}
})

export const TodoProvider:React.FC<IProviderProps> = ({children})=>{

    const [todos, setTodos] = useState<ITodo[]>([{
        id:1,text:'Test todo! Try me', isCompleted: true
    }])

    const addTodo = (newTodo:ITodo)=> setTodos(prevTodos => [...prevTodos, newTodo])

    const deleteTodo = (id:number) => setTodos(todos.filter(todo=> todo.id !== id))

    const markAsCompleted = (id:number) => 
        setTodos(todos.map(todo=>todo.id===id ? ({...todo,isCompleted: !todo.isCompleted}):todo))

    return (
        <TodoContext.Provider
        value={{
            todos,
            addTodo,
            deleteTodo,
            markAsCompleted
        }}
        >
        {children}
        </TodoContext.Provider>
    )
}