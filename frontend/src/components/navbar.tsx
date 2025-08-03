import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLocation } from "react-router"
import { useAppDispatch } from "@/hooks/reduxHooks"
import { logout } from "@/features/auth/authSlice"

function DropDownProfile() {
    const [position, setPosition] = useState("bottom")

    const dispatch = useAppDispatch();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                    <svg className="size-6" fill="#40403f" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 472.615 472.615" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <circle cx="236.308" cy="117.504" r="111.537"></circle> </g> </g> <g> <g> <path d="M369,246.306c-1.759-1.195-5.297-3.493-5.297-3.493c-28.511,39.583-74.993,65.402-127.395,65.402 c-52.407,0-98.894-25.825-127.404-65.416c0,0-2.974,1.947-4.451,2.942C41.444,288.182,0,360.187,0,441.87v24.779h472.615V441.87 C472.615,360.549,431.538,288.822,369,246.306z"></path> </g> </g> </g></svg>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem
                        value="top"
                        onClick={() => {
                            dispatch(logout())
                        }}
                    >Log Out</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


export function Navbar({ userName }: { userName?: string }) {

    const location = useLocation()
    const hiddenPaths = ["/", "/login", "/signup"] // Add paths where navbar should be hidden

    if (hiddenPaths.includes(location.pathname)) {
        return null
    }

    return (
        <nav className="bg-sidebar border-b-border">
            <div className="container m-auto flex items-center justify-between h-16">
                <div>
                    <span className="text-lg font-semibold">Your Personalized Todo</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold">Hi, {userName}</span>
                    <DropDownProfile />
                </div>
            </div>
        </nav >
    )

}