import { useSelector } from "react-redux"
const Notification = () => {
  const anecdoteMostVoted = useSelector((state) => state.anecdotes)
  const notification = useSelector((state) => state.notifications)

  const anecdote = [...anecdoteMostVoted].sort((a, b) => b.votes - a.votes)
  const lastAnecdote = [...anecdoteMostVoted].pop()

  const styleAnecdote = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  }

  return (
    <div>
      {anecdote.length > 0 ? (
        <div style={styleAnecdote}>you voted {anecdote[0].content}</div>
      ) : (
        ""
      )}

      <div>
        {notification.value ? (
          <div style={{ border: "solid 3px green", borderRadius: "10px" }}>
            {notification.text} {lastAnecdote.content}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default Notification
