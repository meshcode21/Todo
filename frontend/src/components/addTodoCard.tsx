import { postTodo } from "@/api/myAPI";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { addTodo } from "@/features/todos/todosSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react"
import { useDispatch } from "react-redux";

export function AddTodoCard() {
    // const dispatch = useDispatch();
    const [todoText, setTodoText] = useState<string>("");

    const queryClient = useQueryClient();

    // Mutation 
    const mutation = useMutation({
        mutationFn: postTodo,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })

    return (
        <Card className="w-full max-w-2xl m-auto border">
            <CardHeader>
                <CardTitle className="text-center text-2xl">Add Todo</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex w-full items-center gap-2">
                    <Input
                        placeholder="Anything you want to do"
                        value={todoText}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter' && todoText.trim() !== "") {
                                document.getElementById("add-todo-button")?.click();
                            }
                        }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)}
                    />
                    <Button
                        id="add-todo-button"
                        onClick={() => {
                            if (todoText.trim() !== "") {
                                // dispatch(addTodo({ text: todoText }));
                                mutation.mutate(todoText)
                                setTodoText("");
                            }
                        }}
                    >
                        Add Todo
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}