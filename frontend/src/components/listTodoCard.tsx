
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
import { BookmarkCheck, SquarePen, Trash } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store";
import { removeTodo } from "@/features/todos/todosSlice";

export default function ListTodoCard() {
  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch();
  return (
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
        <TableBody>
          {
            todos.map((todo, index) => (
              <TableRow key={todo.id} className="shadow">
                <TableCell className="font-medium">{index + 1}.</TableCell>
                <TableCell>{todo.text}</TableCell>
                <TableCell className="text-right">
                  <div className="float-end flex gap-1">
                    <Button className="size-7" variant={'secondary'} size={'icon'}> <BookmarkCheck /> </Button>
                    <Button className="size-7" size={'icon'}> <SquarePen /> </Button>
                    <Button className="size-7" variant={'destructive'} size={'icon'}
                      onClick={() => {
                        // alert(todo.id)
                        dispatch(removeTodo({ id: todo.id }))
                      }}
                    > <Trash /> </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
          {/* <TableRow className="shadow">
            <TableCell className="font-medium">1.</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell className="text-right">
              <div className="float-end flex gap-1">
                <Button className="size-7" variant={'secondary'} size={'icon'}> <BookmarkCheck /> </Button>
                <Button className="size-7" size={'icon'}> <SquarePen /> </Button>
                <Button className="size-7" variant={'destructive'} size={'icon'}> <Trash /> </Button>
              </div>
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}
