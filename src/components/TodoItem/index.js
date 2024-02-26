// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteTodo} = props
  const {title, id} = initialTodosList
  const deleting = () => {
    deleteTodo(id)
  }
  return (
    <li className="single-todo">
      <p>{title}</p>
      <button type="button" onClick={deleting}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
