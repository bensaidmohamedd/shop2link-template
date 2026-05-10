import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden border-slate-200/80 bg-white dark:bg-slate-900">
      <Skeleton className="aspect-[4/3] rounded-none" />
      <CardContent className="p-5">
        <div className="flex justify-between gap-4">
          <div className="flex-1 space-y-3">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <Skeleton className="h-6 w-16" />
        </div>
        <Skeleton className="mt-5 h-11 w-full rounded-full" />
      </CardContent>
    </Card>
  );
}
