import { CourseCard } from "@/components/course/CourseCard";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import { getCourses } from "@/sanity/lib/courses/getCourses";
import Footer from "@/components/home/Footer";

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate at most every hour

export default async function Home() {
  const courses = await getCourses();

  return (
    <div className=" min-h-screen bg-background">
      <Hero />

      <Categories />

      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-8">
          <div className="h-px flex-1 bg-linear-to-r from-border/0 via-border to-border/0" />
          <span className="text-sm font-medium text-muted-foreground">
            Khóa học nổi bật
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-border/0 via-border to-border/0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              href={`/courses/${course.slug}`}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
