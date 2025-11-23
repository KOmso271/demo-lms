import { Search } from "lucide-react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="relative min-h-[45vh] w-full">
      <section className="relative bg-gradient-to-b from-black/10 to-gray-300/55 dark:from-white/15 dark:to-black/40 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  Học không giới hạn
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Khám phá hàng nghìn khóa học được giảng dạy bởi các giảng viên
                  chuyên nghiệp. Xây dựng kỹ năng của bạn, thăng tiến sự nghiệp
                  và đạt được mục tiêu của bạn.
                </p>
              </div>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" className="text-base">
                  Khám phá khóa học
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Dành cho doanh nghiệp
                </Button>
              </div>

              <div className="flex items-center space-x-4 rounded-lg border border-border bg-card p-4 shadow-sm">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Bạn muốn học gì?"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <Button size="sm">Tìm kiếm</Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/hero-learning.jpg"
                  alt="Sinh viên học cùng nhau"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="absolute -left-6 -top-6 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
