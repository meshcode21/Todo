import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import { Navbar } from "./components/navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App