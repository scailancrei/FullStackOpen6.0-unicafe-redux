import { createSlice, current } from "@reduxjs/toolkit"

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}
const initialState = anecdotesAtStart.map(asObject)

const reducerSlice = createSlice({
  name: "anecdotes",
  initialState,
  reducers: {
    vote(state, action) {
      const anecdoteVoted = state.filter((anecd) => anecd.id === action.payload)
      anecdoteVoted[0].votes += 1

      return state
    },
    newAnecdote(state, action) {
      state.push({
        content: action.payload,
        id: getId(),
        votes: 0,
      })
    },
  },
})

export const { vote, newAnecdote } = reducerSlice.actions

export default reducerSlice.reducer
