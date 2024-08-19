import Form from "./components/form.jsx"
import List from "./components/list.jsx"
import Notification from "./components/notification.jsx"

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification></Notification>
      <List />
      <Form />
    </div>
  )
}

export default App
