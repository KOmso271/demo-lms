import getCourseById from "@/sanity/lib/courses/getCourseById";
import { redirect } from "next/navigation";

interface CoursePageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId } = await params;
  const course = await getCourseById(courseId);

  if (!course) {
    return redirect("/");
  }

  // Redirect to the first lesson of the first module if available
  if (course.modules?.[0]?.lessons?.[0]?._id) {
    return redirect(
      `/dashboard/courses/${courseId}/lessons/${course.modules[0].lessons[0]._id}`
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Welcome to {course.title}</h2>
        <p className="text-muted-foreground text-red-300">
          This course has no content yet. Please check back later.
        </p>
        <Button />
      </div>
    </div>
  );
}

const Button = () => {
  return (
    <button className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
      Go back to dashboard
    </button>
  );
};
