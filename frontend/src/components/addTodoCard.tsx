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
        <Card className="w-full max-w-2xl m-auto border">
            <CardHeader>
                <CardTitle className="text-center text-2xl">Add Todo</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex w-full items-center gap-2">
                    <Input className="" placeholder="Anything you want to do" />
                    <Button>
                        Add Todo
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}