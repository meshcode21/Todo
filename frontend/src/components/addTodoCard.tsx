import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function AddTodoCard() {
    return (
        <Card className="w-full max-w-2xl m-auto bg-fuchsia-50 drop-shadow">
            <CardHeader>
                <CardTitle className="text-center text-2xl">Add Todo</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex w-full items-center gap-2">
                    <Input className="bg-white" placeholder="Anything you want to do" />
                    <Button type="submit">
                        Add Todo
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}