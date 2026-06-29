import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Toch Ratana - DevOps Engineer",
    template: "%s | Toch Ratana",
  },
  description:
    "Hi, I'm Toch Ratana — a passionate DevOps Engineer, Kubernets, Jenkins, GitOps, Docker, Nginx, Linux, Defactdojo, Argo CD, Terraform, Vault, Prometheus, Grafana, and cloud platforms. Explore my portfolio, projects, and coding journey from Cambodia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
