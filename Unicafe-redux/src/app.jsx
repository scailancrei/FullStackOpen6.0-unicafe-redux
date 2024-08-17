import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { good, bad, ok, reset } from "./app/reduceSlice"

const App = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(reset())
  }
  const handleGood = () => {
    dispatch(good())
  }

  const handleOk = () => {
    dispatch(ok())
  }
  const handleBad = () => {
    dispatch(bad())
  }

  return (
    <div>
      <button onClick={handleGood}>good</button>
      <button onClick={handleOk}>ok</button>
      <button onClick={handleBad}>bad</button>
      <button onClick={handleReset}>Reset all counts</button>

      <div>good {count.good}</div>
      <div>ok {count.ok}</div>
      <div>bad {count.bad}</div>
    </div>
  )
}
export default App
