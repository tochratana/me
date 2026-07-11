export type ActivityType =
  | "short-course"
  | "university"
  | "school"
  | "project"
  | "competition"
  | "event"
  | "certificate"
  | "work";

export interface TimelineProject {
  name: string;
  description: string;
  role?: string;
}

export interface ActivityItem {
  type: ActivityType;
  title: string;
  organization: string;
  school?: string;
  period: string;
  location?: string;
  description?: string;
  technologies?: string[];
  certificate?: string;
  projects?: TimelineProject[];
}

export interface YearGroup {
  year: string | number;
  items: ActivityItem[];
}
