
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button";
import { SquarePen, Trash } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "@/api/myAPI";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { UpdateTodoModel } from "./updateCardModel";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { setTodos } from "@/features/todos/todosSlice";

export default function ListTodoCard({ todos }: { todos: Array<any> }) {

  //query client
  const queryClient = useQueryClient();

  // todo delete mutation
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  const [isUpdateCardPoped, setUpdateCardPop] = useState<Boolean>(false)
  const [updateingTodoID, setUpdateingTodoID] = useState<Number>(0);

  useEffect(() => {
    dispatch(setTodos(todos))
  }, [todos])

  const dispatch = useAppDispatch();

  return (
    <>
      <ScrollArea className="overflow-auto h-full rounded-md border p-4 w-full max-w-2xl m-auto shadow-md">
        <Table>
          <TableCaption>No more todos</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S.N.</TableHead>
              <TableHead>Todos</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TooltipProvider delayDuration={5}>

            <TableBody>
              {
                [...todos].reverse().map((todo, index) => (
                  <TableRow key={todo.id} className="shadow">
                    <TableCell className="font-medium">{index + 1}.</TableCell>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell className="text-right">
                      <div className="float-end flex gap-1">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button className="size-7" size={'icon'}
                              onClick={() => {
                                setUpdateingTodoID(todo.id)
                                setUpdateCardPop(true)
                              }}
                            >
                              <SquarePen />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent sideOffset={5}>
                            <p className="bg-foreground text-background rounded p-1 px-2 font-semibold">Edit your Todo</p>
                            <div className="h-0 w-0 border-x-10 border-t-8 border-x-transparent border-foreground m-auto" />
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button className="size-7" variant={'destructive'} size={'icon'}
                              onClick={() => {
                                deleteMutation.mutate(todo.id)
                              }}
                            >
                              <Trash />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent sideOffset={5}>
                            <p className="bg-foreground text-background rounded p-1 px-2 font-semibold">Delete your Todo</p>
                            <div className="h-0 w-0 border-x-10 border-t-8 border-x-transparent border-foreground m-auto" />
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </TooltipProvider>
        </Table>
      </ScrollArea>
      <UpdateTodoModel id={updateingTodoID} setCardPop={setUpdateCardPop} isCardPoped={isUpdateCardPoped} />
    </>

  )
}
