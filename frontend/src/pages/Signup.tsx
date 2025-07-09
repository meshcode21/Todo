import { SignupForm } from "@/components/signup-form";

export default function Signup() {

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
    }

    return (
        <div className="container m-auto p-6 h-full flex">
            <div className="max-w-sm w-full m-auto ">
                <SignupForm onFormSubmit={handleFormSubmit} />
            </div>
        </div>
    )
}
