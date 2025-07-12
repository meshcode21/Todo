import { AddTodoCard } from "@/components/addTodoCard"
import ListTodoCard from "@/components/listTodoCard"
import axios from "@/api/axios"
import { useEffect } from "react";
import { useNavigate } from "react-router";


export default function Todos() {

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('/todos',{
                    headers:{
                        authorization: "Bearer " + localStorage.getItem("token")
                    }
                });
                console.log(res);
            } catch (err: any) {
                console.error(err);
                if (err.status == 401)
                    navigate('/login');
            }
        })();
    })



    return (
        <div className="container m-auto p-6 flex flex-col items-center gap-2 h-[calc(100%-4rem)]">
            <AddTodoCard />
            <span className="text-lg font-semibold mt-2">Todo List</span>
            <ListTodoCard />
        </div >
    )
}
