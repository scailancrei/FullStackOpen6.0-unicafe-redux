import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./reduceSlice.js"

const store = configureStore({
  reducer: { counter: counterReducer },
})

export default store
