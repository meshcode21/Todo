import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { addTodo } from "@/features/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react"
import { useDispatch } from "react-redux";

export function AddTodoCard() {
    const [todoText, setTodoText] = useState<string>("");
    const dispatch = useDispatch();

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
                        // onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            
                        // }}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.target.value)}
                    />
                    <Button
                        onClick={() => {
                            dispatch(addTodo({ text: todoText }));
                            setTodoText("");
                        }}
                    >
                        Add Todo
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}