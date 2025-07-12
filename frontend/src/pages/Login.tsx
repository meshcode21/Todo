import { LoginForm } from "@/components/login-form";
import { loginUser } from "@/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { loading, token, message, error } = useAppSelector((state) => state.auth)


    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        dispatch(loginUser({ email, password }));
    }

    if (message && token) {
        toast.success(message);
        navigate('/todos');
    }
    if (error) {
        toast.error(error);
    }

    return (
        <div className="container m-auto p-6 h-full flex">
            <div className="max-w-sm w-full m-auto ">
                <LoginForm onFormSubmit={handleFormSubmit} loading={loading} />
            </div>
        </div>
    )
}
