import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, LoaderCircle } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"

interface LoginFormProps extends React.ComponentProps<"div"> {
  onFormSubmit: React.FormEventHandler<HTMLFormElement>;
  loading: Boolean;
}

import React, { useState } from "react";
import { NavLink } from "react-router"

export function SignupForm({
  onFormSubmit,
  loading,
  className,
  ...props
}: LoginFormProps) {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create New account</CardTitle>
          <CardDescription>
            Enter your details to create new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onFormSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <Toggle
                    variant="outline"
                    className="size-9"
                    aria-label="Toggle password visibility"
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                  </Toggle>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Sign Up
                  {loading ? <LoaderCircle className="animate-spin"/> : ''}
                </Button>

              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <NavLink to={'/login'} className="underline underline-offset-4">
                login
              </NavLink>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
