import Link from "next/link";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Trao quyền cho người học trên toàn thế giới với nền giáo dục chất
              lượng và hướng dẫn của chuyên gia.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Khóa học</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Phát triển Web
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Khoa học Dữ liệu
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Thiết kế
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Công ty</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Điều khoản dịch vụ
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Chính sách cookie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Courselly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
