import { createSlice, current } from "@reduxjs/toolkit"

const anecdotesAtStart = []

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
        content: action.payload.content,
        id: getId(),
        votes: 0,
      })
    },
    setAnecdote(state, action) {
      return action.payload
    },
  },
})

export const { vote, newAnecdote, setAnecdote } = reducerSlice.actions

export default reducerSlice.reducer
