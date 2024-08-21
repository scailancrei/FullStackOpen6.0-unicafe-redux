import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
  value: false,
  text: "",
}

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    toggleNotification(state) {
      state.value = !state.value
      return state
    },
    getNotification(state, action) {
      state.text = action.payload
      return state
    },
  },
})

export const setNotification = (text, seconds) => {
  return async (dispatch) => {
    dispatch(toggleNotification())
    dispatch(getNotification(text))

    setTimeout(() => {
      dispatch(toggleNotification())
    }, seconds)
  }
}

export const { toggleNotification, getNotification } = notificationSlice.actions

export default notificationSlice.reducer
