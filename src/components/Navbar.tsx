"use client";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import SignOutButton from "./SignOutButton";
import { useSession } from "@/lib/auth-client";

interface Props {}

const Navbar =  ({}: Props) => {
  const {data: session} = useSession()
  // console.log(session);
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <Button
                className="text-gray-700 hover:text-black"
                variant={"ghost"}
                asChild
              >
                <Link href={"/dashboard"}>Dashboard</Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant={"ghost"}>
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {session.user.name[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <div>
                      <p>{session.user.name}</p>
                      <p>{session.user.email}</p>
                    </div>
                  </DropdownMenuLabel>

                  <SignOutButton />
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button
                variant={"ghost"}
                asChild
                className="text-gray-700 hover:text-black"
              >
                <Link href={"sign-in"}>Login</Link>
              </Button>
              <Button
                asChild
                className="text-gray-700 hover:bg-primary/90 hover:text-black"
              >
                <Link href={"sign-up"}>Start for free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
