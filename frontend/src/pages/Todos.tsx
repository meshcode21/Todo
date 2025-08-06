import { AddTodoCard } from "@/components/addTodoCard"
import ListTodoCard from "@/components/listTodoCard"
import { useAppSelector } from "@/hooks/reduxHooks";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/api/myAPI";


export default function Todos() {

    const { user } = useAppSelector((state) => state.auth);

    // queries
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
    })

    //Loading while processing or fetching data...
    if (isLoading) return <div className="text-center">Loading...</div>
    if (isError) {
        console.log("This is the error while loading todos: \n", error)
        return <div>Failed to load this todos</div>
    }

    return (
        <div className="container m-auto p-6 flex flex-col items-center gap-2 h-[calc(100%-4rem)]">
            <AddTodoCard />
            <span className="text-lg font-semibold mt-2">Todo List</span>
            <ListTodoCard todos={data} />
            {user && <span className="text-sm text-gray-500 mt-2">Welcome, {user.name}!</span>}
        </div >
    )
}
