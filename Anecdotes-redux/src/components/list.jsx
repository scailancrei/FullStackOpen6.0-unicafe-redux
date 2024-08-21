import { useSelector, useDispatch } from "react-redux"
import { saveVotes } from "../reducers/anecdoteSlice"
const List = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const dispatch = useDispatch()

  const updateVotes = (id) => {
    dispatch(saveVotes(id))
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
              <button onClick={() => updateVotes(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default List
