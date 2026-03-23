import EmailSent from "./features/auth/components/EmailSent"
import EmailVerify from "./features/auth/components/EmailVerify"
import Login from "./features/auth/components/Login"
import PersistLogin from "./features/auth/components/PersistLogin"
import Register from "./features/auth/components/Register"
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/secretary/register" element={<Register />} />
        <Route path="/secretary/login" element={<Login />} />
        <Route path="/secretary/email-sent" element={<EmailSent />} />
        <Route path="/secretary/email-verify/:id/:hash" element={<EmailVerify />} />
        <Route element={<PersistLogin />}>

        {/** We have to set up the default layout for the app. */}
          <div className="w-screen flex relative">
            <div className="w-72 fixed left-0 bg-red-300">

            </div>
            <div className="md:ml-72 relative w-full min-h-screen bg-yellow-300">
              <div className="fixed w-full bg-blue-300">

              </div>
            </div>
          </div>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
