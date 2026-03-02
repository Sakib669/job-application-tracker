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
import Link from "next/link";

interface Props {}

const SignUp = ({}: Props) => {
  return (
    <div className="min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Create an account to start tracking your job applications
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="space-y-5 mb-5">
            <div className="space-y-3">
              <Label>Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-3">
              <Label>Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-3">
              <Label>Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-5">
            <Button className="flex-1 w-full cursor-pointer hover:text-gray-600">
              Submit
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
