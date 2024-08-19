import { useSelector } from "react-redux"
const Notification = () => {
  const anecdoteMostVoted = useSelector((state) => state.anecdotes)
  const notification = useSelector((state) => state.notifications.value)

  const anecdote = [...anecdoteMostVoted].sort((a, b) => b.votes - a.votes)
  const lastAnecdote = [...anecdoteMostVoted].pop()

  const styleAnecdote = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  }

  return (
    <div>
      <div style={styleAnecdote}>you voted {anecdote[0].content}</div>

      <div>
        {notification ? (
          <div style={{ border: "solid 3px green", borderRadius: "10px" }}>
            New anecdote created: {lastAnecdote.content}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Notification
