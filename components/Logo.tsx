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
        <span className="text-2xl font-bold bg-gradient-to-r from-green-500/90 to-green-300 bg-clip-text text-transparent">
          Courselly
        </span>
      </Link>
    </div>
  );
}

export default Logo;
