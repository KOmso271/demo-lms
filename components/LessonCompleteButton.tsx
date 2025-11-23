"use client";

import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { completeLessonAction } from "@/lib/actions/completeLessonAction";
import { uncompleteLessonAction } from "@/lib/actions/uncompleteLessonAction";
import { getLessonCompletionStatusAction } from "@/lib/actions/getLessonCompletionStatusAction";
import { cn } from "@/lib/utils";

interface LessonCompleteButtonProps {
  lessonId: string;
  clerkId: string;
}

export function LessonCompleteButton({
  lessonId,
  clerkId,
}: LessonCompleteButtonProps) {
  const [isPending, setIsPending] = useState(false);
  const [isCompleted, setIsCompleted] = useState<boolean | null>(null);
  const [isPendingTransition, startTransition] = useTransition();
  const router = useRouter();

  useEffect(() => {
    startTransition(async () => {
      try {
        const status = await getLessonCompletionStatusAction(lessonId, clerkId);
        setIsCompleted(status);
      } catch (error) {
        console.error("Error checking lesson completion status:", error);
        setIsCompleted(false);
      }
    });
  }, [lessonId, clerkId]);

  const handleToggle = async () => {
    try {
      setIsPending(true);
      if (isCompleted) {
        await uncompleteLessonAction(lessonId, clerkId);
      } else {
        await completeLessonAction(lessonId, clerkId);
      }

      startTransition(async () => {
        const newStatus = await getLessonCompletionStatusAction(
          lessonId,
          clerkId
        );
        setIsCompleted(newStatus);
      });

      router.refresh();
    } catch (error) {
      console.error("Error toggling lesson completion:", error);
    } finally {
      setIsPending(false);
    }
  };

  const isLoading = isCompleted === null || isPendingTransition;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium">
            {isCompleted
              ? "Bài học đã hoàn thành!"
              : "Sẵn sàng hoàn thành bài học này?"}
          </p>
          <p className="text-sm text-muted-foreground">
            {isCompleted
              ? "Bạn có thể đánh dấu là chưa hoàn thành nếu cần xem lại."
              : "Đánh dấu là hoàn thành khi bạn đã xong."}
          </p>
        </div>
        <Button
          onClick={handleToggle}
          disabled={isPending || isLoading}
          size="lg"
          variant="default"
          className={cn(
            "min-w-[200px] transition-all duration-200 ease-in-out",
            isCompleted
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-green-600 hover:bg-green-700 text-white"
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Updating...
            </>
          ) : isPending ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              {isCompleted ? "Đang bỏ hoàn thành..." : "Đang hoàn thành..."}
            </>
          ) : isCompleted ? (
            <>
              <XCircle className="h-4 w-4 mr-2" />
              Đánh dấu là chưa hoàn thành
            </>
          ) : (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              Đánh dấu là hoàn thành
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
