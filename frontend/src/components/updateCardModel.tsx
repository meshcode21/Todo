import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { updateTodo } from "@/api/myAPI";
import { X } from "lucide-react";
import { useAppSelector } from "@/hooks/reduxHooks";

export const UpdateTodoModel = ({ isCardPoped, setCardPop, id }: { isCardPoped: Boolean, setCardPop: Function, id: Number }) => {
    const [todoText, setTodoText] = useState<string>("");


    const Todos = useAppSelector((state) => state.todos)
    useEffect(() => {
        const text = Todos.find((todo) => todo.todoID === id)?.todoTitle;
        setTodoText(text ? text : "")
    }, [id, Todos])

    const queryClient = useQueryClient();

    // Todo Add Mutation 
    const updateMutation = useMutation({
        mutationFn: ({ todoID, todoText }: { todoID: Number, todoText: string }) => updateTodo(todoID, todoText),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })

    return (
        <div className={`${isCardPoped ? 'block' : 'hidden'} absolute top-0 left-0 h-screen w-screen grid place-content-center bg-black/60`}>
            <Card className="w-screen max-w-md m-auto border relative pt-8">
                <Button
                    variant={'destructive'}
                    size={'icon'}
                    className="absolute size-7 top-3 right-3"
                    onClick={() => setCardPop(false)}
                ><X /></Button>
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Edit your Todo</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col w-full items-center gap-6">
                        <Input
                            placeholder="Anything you want to do"
                            value={todoText}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                if (e.key === 'Enter' && todoText.trim() !== "") {
                                    document.getElementById("update-todo-button")?.click();
                                }
                            }}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)}
                        />
                        <div className="flex gap-3">
                            <Button variant={'outline'} onClick={() => setCardPop(false)}>Cancel</Button>
                            <Button
                                id="update-todo-button"
                                onClick={() => {
                                    if (todoText.trim() !== "") {
                                        updateMutation.mutate({ todoID: id, todoText: todoText })
                                        setTodoText("");
                                        setCardPop(false);
                                    }
                                }}
                            >
                                Update
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}