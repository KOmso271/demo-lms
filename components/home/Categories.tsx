import {
  Code,
  Palette,
  TrendingUp,
  Smartphone,
  Database,
  Megaphone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: Code,
    name: "Phát triển Web",
    courses: 235,
  },
  {
    icon: Palette,
    name: "Thiết kế",
    courses: 142,
  },
  {
    icon: TrendingUp,
    name: "Kinh doanh",
    courses: 189,
  },
  {
    icon: Smartphone,
    name: "Phát triển Di động",
    courses: 98,
  },
  {
    icon: Database,
    name: "Khoa học Dữ liệu",
    courses: 156,
  },
  {
    icon: Megaphone,
    name: "Marketing",
    courses: 127,
  },
];

const Categories = () => {
  return (
    <section className="bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Khám phá danh mục khóa học
          </h2>
          <p className="text-lg text-muted-foreground">
            Tìm khóa học phù hợp cho hành trình học tập của bạn
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center space-y-3 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
                    <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.courses} khóa học
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
