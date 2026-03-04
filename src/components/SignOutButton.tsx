"use client";

import { signOut } from "@/lib/auth-client";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";

interface Props {}

const SignOutButton = ({}: Props) => {
  const router = useRouter();
  return (
    <DropdownMenuItem
      onClick={async () => {
        const result = await signOut();
        if (result.data) {
          router.push("/sign-in");
        }
        else{
            alert('Error signing out')
        }
      }}
    >
      Log Out
    </DropdownMenuItem>
  );
};

export default SignOutButton;
