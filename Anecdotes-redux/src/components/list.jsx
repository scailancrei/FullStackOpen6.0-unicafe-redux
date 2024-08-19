import { useSelector, useDispatch } from "react-redux"
import { vote } from "../reducers/anecdoteSlice"
const List = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const dispatch = useDispatch()

  const votes = (id) => {
    dispatch(vote(id))
    console.log("vote", id)
  }

  return (
    <div>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>

            <div>
              has {anecdote.votes} {""}
              <button onClick={() => votes(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default List
