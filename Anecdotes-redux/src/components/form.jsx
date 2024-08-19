import { useDispatch } from "react-redux"
import { newAnecdote } from "../reducers/anecdoteSlice"
import { toggleNotification } from "../reducers/notificationSlice"

const Form = () => {
  const dispatch = useDispatch()

  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    dispatch(newAnecdote(content))
    dispatch(toggleNotification())
    setTimeout(() => {
      dispatch(toggleNotification())
    }, 3000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default Form
