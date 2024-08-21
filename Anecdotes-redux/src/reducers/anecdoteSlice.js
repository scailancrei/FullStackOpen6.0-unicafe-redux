import { createSlice, current } from "@reduxjs/toolkit"
import services from "../services/services"

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
      const anecdoteVoted = state.filter(
        (anecd) => anecd.id === action.payload.id
      )

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

export const initAnecdotes = () => {
  return async (dispatch) => {
    const response = await services.getAll()
    dispatch(setAnecdote(response))
  }
}

export const saveVotes = (id) => {
  return async (dispatch) => {
    const response = await services.modifyVotes(id)

    dispatch(vote(response))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const response = await services.addAnecdote(content)
    dispatch(newAnecdote(response))
  }
}

export const { vote, newAnecdote, setAnecdote } = reducerSlice.actions

export default reducerSlice.reducer
