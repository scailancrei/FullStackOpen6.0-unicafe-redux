import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import App from "./app.jsx"
import store from "./app/store.js"
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

window.store = store
