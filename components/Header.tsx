import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { BookMarkedIcon, BookOpen, Search } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <header className="sticky top-0 z-60 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                FullSnack
              </span>
            </Link>
            <SearchInput />
          </div>

          {/* Right */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <nav className="flex items-center gap-3">
              {/* đăng nhập */}
              <SignedIn>
                <Link
                  prefetch={false}
                  href="/my-courses"
                  className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:px-4 md:py-2"
                >
                  <BookMarkedIcon className="h-4 w-4" />
                  <span className="hidden md:block">My Courses</span>
                </Link>

                {/* Nút avatar user có menu (Sign Out nằm trong menu này) */}
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: { avatarBox: "h-8 w-8" },
                  }}
                />
              </SignedIn>

              {/* chưa đăng nhập */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:px-4 md:py-2">
                    <BookMarkedIcon className="h-4 w-4" />
                    <span className="hidden md:block">Sign In</span>
                  </button>
                </SignInButton>
              </SignedOut>
            </nav>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;