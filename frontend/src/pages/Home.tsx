import { NavLink } from "react-router";

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen w-screen flex-col bg-gradient-to-r from-blue-500 to-purple-600 px-4">

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md drop-shadow-gray-600">
                    🚀 Personalized Todo
                </h1>
                <h3 className="text-white text-lg font-semibold">
                    Your personal notes and todos.
                </h3>
            </div>

            <NavLink to={'/dashboard'}
                className="text-lg font-semibold text-blue-600 rounded bg-gray-100 hover:bg-gray-50 hover:scale-102 px-10 py-5 m-8"
            >
                Get Started
            </NavLink>
        </div>
    );
}
