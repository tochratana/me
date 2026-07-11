import { ActivityItem } from "../types";
import { CardHeader } from "./CardHeader";
import { TimelineCardLayout } from "./TimelineCardLayout";

export function GenericCard({
  item,
  index,
  t,
}: {
  item: ActivityItem;
  index: number;
  t: (key: string) => string;
}) {
  return (
    <TimelineCardLayout index={index}>
      <CardHeader item={item} t={t} />

      {/* Description */}
      {item.description && (
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      )}

      {/* Tags / Technologies (if present for things like work or projects) */}
      {item.technologies && item.technologies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full border border-foreground/15 px-2.5 py-0.5 text-xs text-foreground/60"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </TimelineCardLayout>
  );
}
