import { TodoForm } from "../components/todoForm"
import { TodoList } from "../components/todoList"
import styles from './styles.module.scss'

const Home = () => {
    return (
        <div className={styles.main}>
        <div className={styles.mainForm}>
          <h1>Vélez TodoApp</h1>
        <TodoForm />
        <TodoList />
        </div>
        </div>
  )
}

export default Home
