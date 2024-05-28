"use client"
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import MobileNav from "./MobileNav";
import { useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  console.log(isSignedIn)
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Smart Mind.</span>
          </Link>

          {/* <MobileNav isAuth={!!user} /> */}

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Pricing
            </Link>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button variant="outline" className="rounded-full">
                Get started{" "}
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
