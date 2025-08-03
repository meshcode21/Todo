import { Navigate, Route, Routes } from "react-router"
import Home from "./pages/Home"
import { Navbar } from "./components/navbar"
import Todos from "./pages/Todos"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useAppSelector } from "./hooks/reduxHooks"
import { type JSX } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {
  const { user, token } = useAppSelector((state) => state.auth);


  const ProtectedTodosRoute = ({ children }: { children: JSX.Element }) => {
    if (!token) {
      return <Navigate to={'/login'} />;
    }
    return children;
  };
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Navbar userName={user?.name.split(' ')[0]} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todos" element={
          <ProtectedTodosRoute>
            <Todos />
          </ProtectedTodosRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
}
export default App;


