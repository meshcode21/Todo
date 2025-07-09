import { AddTodoCard } from "@/components/addTodoCard"
import ListTodoCard from "@/components/listTodoCard"


export default function Todos() {
    return (
        <div className="container m-auto p-6 flex flex-col gap-6 h-[calc(100%-4rem)]">
            <AddTodoCard />
            <ListTodoCard />
        </div >
    )
}
