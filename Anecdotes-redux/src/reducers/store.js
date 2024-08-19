import { configureStore } from "@reduxjs/toolkit"
import anecdoteReducer from "./anecdoteSlice.js"
import notificationReducer from "./notificationSlice.js"
const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notifications: notificationReducer,
  },
})

export default store
