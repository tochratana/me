import { ActivityItem } from "../types";
import { CardHeader } from "./CardHeader";
import { TimelineCardLayout } from "./TimelineCardLayout";
import { FileBadge, FolderGit2 } from "lucide-react";

export function ShortCourseCard({
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

      {/* Technologies */}
      {item.technologies && item.technologies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full border border-foreground/15 bg-foreground/5 px-2.5 py-0.5 text-xs text-foreground/70 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Certificate */}
      {item.certificate && (
        <div className="mt-3 flex items-start gap-2 text-sm text-foreground/80">
          <FileBadge className="h-4 w-4 mt-0.5 text-foreground/60" />
          <span>
            <span className="font-semibold text-foreground/90">Certificate:</span> {item.certificate}
          </span>
        </div>
      )}

      {/* Projects Built */}
      {item.projects && item.projects.length > 0 && (
        <div className="mt-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-foreground/90">
            <FolderGit2 className="h-4 w-4 text-foreground/70" />
            Projects Built
          </div>
          <ul className="space-y-2">
            {item.projects.map((proj, idx) => (
              <li key={idx} className="text-sm">
                <span className="font-medium text-foreground">{proj.name}</span>
                <p className="text-muted-foreground text-xs mt-0.5">{proj.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </TimelineCardLayout>
  );
}
