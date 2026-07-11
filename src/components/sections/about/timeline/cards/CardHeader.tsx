import { CalendarDays, MapPin } from "lucide-react";
import { ActivityItem } from "../types";
export function CardHeader({
  item,
  t,
}: {
  item: ActivityItem;
  t: (key: string) => string;
}) {
  return (
    <>
      <h4 className="text-base font-bold text-foreground md:text-lg">
        {item.title}
      </h4>

      <p className="mt-0.5 text-sm font-medium text-foreground/70">
        {item.school ? `${item.organization} • ${item.school}` : item.organization}
      </p>

      {/* Period + Location */}
      <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <CalendarDays className="h-3 w-3" />
          {item.period}
        </span>
        {item.location && (
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {item.location}
          </span>
        )}
      </div>
    </>
  );
}
