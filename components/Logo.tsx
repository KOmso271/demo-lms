import { BookOpen } from "lucide-react";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link
        href="/"
        prefetch={false}
        className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
      >
        <BookOpen className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold bg-linear-to-r from-primary/90 to-primary bg-clip-text text-transparent">
          Courselly
        </span>
      </Link>
    </div>
  );
}

export default Logo;
