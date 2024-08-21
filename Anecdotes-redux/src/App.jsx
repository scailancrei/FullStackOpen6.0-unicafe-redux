import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Form from "./components/form.jsx"
import List from "./components/list.jsx"
import Notification from "./components/notification.jsx"
import { initAnecdotes } from "./reducers/anecdoteSlice.js"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initAnecdotes())
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <List />
      <Form />
    </div>
  )
}

export default App
