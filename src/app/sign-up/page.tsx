"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/auth-client";
import { Metadata } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {}



const SignUp = ({}: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signUp.email({
        name,
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message ?? "Failed to sign up");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      setError("An unexpected error occured");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Create an account to start tracking your job applications
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-5 mb-5">
            {error && (
              <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-3">
              <Label>Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <Label>Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-3">
              <Label>Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-5">
            <Button
              disabled={loading}
              className="flex-1 w-full cursor-pointer hover:text-gray-600"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </Button>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                className=" underline cursor:pointer text-primary"
                href={"/sign-in"}
              >
                Sign In
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
