import Register from "./features/auth/components/Register"
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
