import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
  value: false,
}

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    toggleNotification(state) {
      state.value = !state.value
      return state
    },
  },
})

export const { toggleNotification } = notificationSlice.actions

export default notificationSlice.reducer
