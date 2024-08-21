import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteSlice"
import { setNotification } from "../reducers/notificationSlice"

const Form = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    dispatch(createAnecdote(content))
    dispatch(setNotification(`new anecdote created ${content}`, 3000))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default Form
