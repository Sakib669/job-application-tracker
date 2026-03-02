import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {}

const Navbar = ({}: Props) => {
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
