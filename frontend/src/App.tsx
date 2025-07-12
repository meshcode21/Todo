import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import { Navbar } from "./components/navbar"
import Todos from "./pages/Todos"
import Login from "./pages/Login"
import Signup from "./pages/Signup"


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </>
  )
}

export default App


