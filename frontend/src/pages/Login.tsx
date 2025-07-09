import { LoginForm } from "@/components/login-form";

export default function Login() {
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        // Here you would typically handle the login logic, e.g., API call
        console.log("Email:", email);
        console.log("Password:", password);
    }
    return (
        <div className="container m-auto p-6 h-full flex">
            <div className="max-w-sm w-full m-auto ">
                <LoginForm onFormSubmit={handleFormSubmit}/>
            </div>
        </div>
    )
}
