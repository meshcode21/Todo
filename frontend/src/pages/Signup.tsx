import { SignupForm } from "@/components/signup-form";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { useNavigate } from "react-router";
import { signupUser } from "@/features/auth/authSlice";
import { toast } from "sonner";
import { useEffect } from "react";

export default function Signup() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { loading, token, message, error } = useAppSelector((state) => state.auth)

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        dispatch(signupUser({ name, email, password }));
    }

    useEffect(() => {
        if (message && token) {
            toast.success(message);
            navigate('/todos');
        }
        if (error) {
            toast.error(error);
        }
    }, [message, token, error, navigate]);

    return (
        <div className="container m-auto p-6 h-full flex">
            <div className="max-w-sm w-full m-auto ">
                <SignupForm onFormSubmit={handleFormSubmit} loading={loading} />
            </div>
        </div>
    )
}
