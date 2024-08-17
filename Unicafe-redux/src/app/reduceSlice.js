import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  good: 5,
  ok: 4,
  bad: 2,
}

const sliceReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    good(state) {
      state.good += 1
    },
    ok(state) {
      state.ok += 1
    },
    bad(state) {
      state.bad += 1
    },
    reset() {
      return sliceReducer.getInitialState()
    },
  },
})

//exporting the actions and reducer to dispatch
export const { good, ok, bad, reset } = sliceReducer.actions

export default sliceReducer.reducer
