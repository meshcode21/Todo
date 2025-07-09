import { ThemeProvider } from "@/components/theme-provider"
import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Todos from "./pages/Todos"
import { Navbar } from "./components/navbar"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* theme toggle button */}
      <div className="absolute bottom-3 right-3">
        <ModeToggle />
      </div>

      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App


