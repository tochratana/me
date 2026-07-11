import { ActivityItem } from "../types";
import { ShortCourseCard } from "./ShortCourseCard";
import { GenericCard } from "./GenericCard";

export function ActivityCard({
  item,
  index,
  t,
}: {
  item: ActivityItem;
  index: number;
  t: (key: string) => string;
}) {
  switch (item.type) {
    case "short-course":
      return <ShortCourseCard item={item} index={index} t={t} />;
    default:
      return <GenericCard item={item} index={index} t={t} />;
  }
}
