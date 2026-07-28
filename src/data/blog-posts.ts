export interface BlogPost {
  title: string;
  date: string;
  description: string;
  slug: string;
  image: string; // Path to cover image in /public
  content: string; // Full blog content (supports simple paragraphs)
}

/**
 * ✏️ To add a new blog post, just add an object to this array.
 * The most recent post should be first.
 * Place your cover image in /public/blog/ and reference it here.
 */
export const blogPosts: BlogPost[] = [
  {
    title: "Infrac K3s — Automated K3s Cluster Setup with One Command",
    date: "July 28, 2026",
    slug: "infrac-k3s-automated-cluster-setup",
    image: "/blog/k3s-cluster-setup.jpg",
    description:
      "Every time I needed a fresh Kubernetes environment I had to repeat the same manual steps. So I built Infrac K3s — one command, full cluster ready. K3s + Helm + Ingress-Nginx + ArgoCD + cert-manager, all automated with Ansible.",
    content: `Every time I wanted a fresh Kubernetes environment — for testing, for a new project, for learning — I had to repeat the same manual steps. Install K3s, install Helm, set up Ingress, configure ArgoCD… It was exhausting.

So I built Infrac K3s: one command, full cluster ready.

K3s is a lightweight, production-grade Kubernetes distribution by Rancher. It's the same real Kubernetes — just packaged into a single binary and designed to be simple to install. Unlike full Kubernetes (kubeadm), K3s installs with a single curl command, runs on as little as 512MB of RAM, and is perfect for VMs, edge devices, or local dev machines.

With just one command — just install — the automation sets up the entire stack: K3s as the Kubernetes engine, Helm as the package manager, Ingress-Nginx to route external traffic into the cluster, ArgoCD for GitOps-based auto-deployment from your Git repository, Kubernetes Dashboard as a visual web UI, and cert-manager to handle SSL certificates automatically via Let's Encrypt.

One of the design decisions I'm most proud of is the dual-mode support. You set a single variable in your config — k3s_install_mode: "standalone" for a single-server dev or test environment, or k3s_install_mode: "ha" for a 3-node production-grade cluster with embedded etcd. Standalone is perfect when you're learning or experimenting on a single VM. HA spreads across three master nodes — if one dies, the cluster survives.

I also added Vagrant support for people who don't have a VPS. With a simple Vagrantfile, you can spin up a local Ubuntu VM with 2GB of RAM, run just install against it, and have a fully working Kubernetes cluster on your laptop — no cloud account needed. This turned out to be one of the most-appreciated features for people learning DevOps.

Getting started is intentionally minimal. Clone the repo, install the dependencies (Python pip and just), edit inventory/hosts.ini with your server IP, and run just install. The Ansible playbook takes care of everything else.

The reason I chose Ansible as the automation layer is its agentless design — no software needs to be installed on your target servers. It connects via SSH, runs its tasks idempotently, and leaves. You can run the same playbook ten times and get the same result every time. Playbooks are plain YAML that reads almost like English, which makes them easy to review, audit, and modify.

Building this project taught me a lot about how Kubernetes networking actually works — following a request from the Ingress controller down through Services and into Pods. I got hands-on with GitOps using ArgoCD, treating Git as the single source of truth for all deployments. I learned how cert-manager integrates with Let's Encrypt to provision and rotate TLS certificates automatically. And I gained a much deeper appreciation for writing reusable Ansible roles.

What's next? I'm planning to add Prometheus and Grafana for cluster monitoring, Longhorn for distributed persistent storage, and a full written guide for setting up the HA mode on real 3-node VPS infrastructure.

The repo is open source at github.com/tochratana/infra-k3s. If this helped you, drop a star. And if you're learning DevOps — K3s combined with Ansible is one of the best hands-on Kubernetes experiences you can get without the complexity or cost of a full cloud setup.

Happy shipping! 🚀`,
  },

  {
    title: "Building a Production-Ready CI/CD Pipeline with Jenkins and ArgoCD",
    date: "June 15, 2026",
    slug: "cicd-pipeline-jenkins-argocd",
    image: "/blog/cicd-pipeline.jpg",
    description:
      "A deep dive into building a robust CI/CD pipeline that takes your code from commit to production. We'll walk through Jenkins for continuous integration and ArgoCD for GitOps-based continuous delivery.",
    content: `Every modern engineering team needs a reliable CI/CD pipeline. It's the backbone of shipping software quickly and safely. In this post, I'll share how I built a production-ready pipeline using Jenkins for CI and ArgoCD for CD — a combination that has served my teams well across multiple projects.

The pipeline starts with a simple git push. Jenkins picks up the change via a webhook, runs the build steps (compile, lint, unit tests), builds a Docker image, and pushes it to our private container registry. The entire CI phase takes about 3-5 minutes for most of our microservices.

For the CD side, we use ArgoCD with a GitOps approach. Instead of Jenkins directly deploying to Kubernetes, it updates the image tag in our GitOps repository. ArgoCD watches this repo and automatically syncs the changes to the cluster. This separation of concerns is powerful — CI handles building and testing, while CD handles deployment and rollback.

One key lesson I've learned: always implement proper health checks and readiness probes. ArgoCD's sync waves and hooks let you control the deployment order. We deploy database migrations first, then the application pods, and finally run smoke tests. If any step fails, ArgoCD automatically rolls back to the previous healthy state.

We also integrated SonarQube for code quality analysis and Trivy for container image scanning directly into the pipeline. Security should never be an afterthought — it needs to be baked into every build.

The result? Our team went from deploying once a week (with lots of anxiety) to deploying multiple times a day with confidence. The pipeline catches issues early, and the GitOps approach gives us a complete audit trail of every change that went to production.

If you're starting out, my advice is simple: start with a basic pipeline and iterate. Don't try to build the perfect pipeline on day one. Get CI working first, then add CD, then layer on security scanning and quality gates. Each improvement compounds over time.`,
  },
  {
    title: "Kubernetes in Production: Lessons from Managing 50+ Microservices",
    date: "April 22, 2026",
    slug: "kubernetes-production-lessons",
    image: "/blog/kubernetes.jpg",
    description:
      "Real-world lessons learned from running Kubernetes in production at scale. From resource management to networking, these are the things I wish I knew when I started with K8s.",
    content: `Kubernetes is powerful, but running it in production is a completely different beast from following tutorials. After managing clusters running 50+ microservices, here are the lessons that saved me countless hours of debugging at 2 AM.

Resource requests and limits are not optional. I cannot stress this enough. Every single pod needs properly configured CPU and memory requests and limits. Without them, you'll face node pressure issues, OOM kills, and unpredictable scheduling. We use Vertical Pod Autoscaler (VPA) in recommendation mode to help teams right-size their resources based on actual usage.

Namespace isolation is your friend. We organize services by team and environment — each team gets their own namespace with ResourceQuotas and LimitRanges. This prevents one team's runaway pod from taking down another team's services. Combined with NetworkPolicies, you get proper multi-tenancy even on a shared cluster.

Monitoring is non-negotiable. We run Prometheus with Thanos for long-term storage, and Grafana for visualization. Every service must expose /metrics and /health endpoints. We have alerts for pod restarts, high error rates, CPU throttling, and memory pressure. The goal is to know about problems before users do.

Ingress configuration matters more than you think. We use NGINX Ingress Controller with proper rate limiting, connection timeouts, and circuit breaking. A single misconfigured ingress rule once caused a cascading failure across multiple services — lesson learned the hard way.

Rolling updates with proper PodDisruptionBudgets (PDBs) are essential. We set minAvailable to ensure at least 50% of pods are always running during updates. Combined with readiness probes that actually test downstream dependencies, we achieve zero-downtime deployments consistently.

One thing that dramatically improved our reliability was implementing pod topology spread constraints. Instead of letting the scheduler pack pods onto the same node, we spread them across availability zones. When a node goes down (and it will), your service stays up.

The biggest lesson? Kubernetes is a platform, not a destination. It's a tool that enables your team to ship faster — but only if you invest in the operational practices around it. GitOps, proper monitoring, resource management, and security policies are what make Kubernetes truly production-ready.`,
  },
  {
    title: "Infrastructure as Code with Terraform: From Zero to Multi-Cloud",
    date: "February 8, 2026",
    slug: "terraform-infrastructure-as-code",
    image: "/blog/terraform-iac.jpg",
    description:
      "How I use Terraform to manage cloud infrastructure across AWS and GCP. Covering modules, state management, workspaces, and the patterns that keep our IaC maintainable at scale.",
    content: `Manual infrastructure provisioning is a thing of the past. If you're still clicking through cloud consoles to create resources, you're setting yourself up for configuration drift, undocumented changes, and sleepless nights. Terraform changed the way I manage infrastructure — here's how.

We started our Terraform journey with a single main.tf file that provisioned a VPC, some EC2 instances, and an RDS database. It worked, but it didn't scale. As our infrastructure grew, that single file became a maintenance nightmare. The key insight was treating Terraform code like application code — with proper structure, modules, and separation of concerns.

Our current setup uses a modular architecture. We have reusable modules for common patterns: VPC networking, EKS clusters, RDS databases, S3 buckets with encryption, and IAM roles. Each module has its own variables, outputs, and documentation. Teams can compose these modules to build their infrastructure without worrying about the underlying details.

State management is critical and often overlooked. We use S3 backend with DynamoDB locking for AWS projects and GCS backend for GCP. State files contain sensitive information, so encryption at rest is mandatory. We also use Terraform workspaces to manage multiple environments (dev, staging, prod) from the same codebase with different variable files.

One pattern that saved us repeatedly is the use of data sources instead of hardcoded values. Instead of hardcoding an AMI ID, we use a data source to look up the latest Amazon Linux 2 AMI. Instead of hardcoding a VPC ID, we use a data source to find it by tags. This makes our code portable and resilient to changes.

We run Terraform through our CI/CD pipeline — never locally. A pull request triggers terraform plan, which posts the plan output as a PR comment for review. After approval and merge, terraform apply runs automatically. This gives us an audit trail and prevents ad-hoc changes.

For secrets, we integrate Terraform with HashiCorp Vault. Database passwords, API keys, and certificates are all managed through Vault and injected into Terraform via the Vault provider. No secrets in state files, no secrets in version control.

The multi-cloud aspect comes naturally with Terraform's provider ecosystem. We use AWS for our primary workloads and GCP for specific ML pipelines. Same workflow, same language, same CI/CD pipeline — just different providers. That consistency is Terraform's superpower.`,
  },
  {
    title: "Monitoring & Observability: Building a Production-Grade Stack with Prometheus and Grafana",
    date: "December 3, 2025",
    slug: "monitoring-observability-prometheus-grafana",
    image: "/blog/monitoring.jpg",
    description:
      "How to build a complete monitoring and observability stack using Prometheus, Grafana, and Alertmanager. From metrics collection to alerting, this is the setup that keeps our systems reliable.",
    content: `"If you can't measure it, you can't improve it." This principle drives everything in DevOps observability. A well-built monitoring stack is the difference between proactively catching issues and reactively fighting fires. Here's how we built ours.

Our stack is built on the three pillars of observability: metrics (Prometheus), logs (Loki), and traces (Jaeger). Grafana ties everything together as our single pane of glass. This combination gives us full visibility into our systems — from infrastructure health to application performance.

Prometheus is our metrics backbone. We use the kube-prometheus-stack Helm chart which bundles Prometheus, Alertmanager, Grafana, and a set of pre-configured dashboards and alerts. Every application exposes metrics via a /metrics endpoint using client libraries (we primarily use the Go and Node.js clients).

The key metrics we track for every service follow the RED method: Rate (requests per second), Errors (error rate), and Duration (latency percentiles). For infrastructure, we follow the USE method: Utilization, Saturation, and Errors. These frameworks give us consistent, meaningful dashboards across all our services.

Alerting is where many teams get it wrong. Too many alerts cause alert fatigue — too few means you miss critical issues. We follow a tiered approach: P1 alerts (service down, data loss risk) page the on-call engineer immediately via PagerDuty. P2 alerts (degraded performance, high error rate) create a Slack notification. P3 alerts (warnings, approaching thresholds) are logged for review during business hours.

Every alert must have a runbook. When that PagerDuty notification wakes you up at 3 AM, you need clear steps to diagnose and resolve the issue. Our runbooks are stored in our documentation site and linked directly in the alert annotations.

Grafana dashboards are organized by layer: infrastructure (node CPU, memory, disk), Kubernetes (pod health, deployment status, HPA metrics), and application (business metrics, API latency, error breakdown). We use dashboard-as-code with Grafonnet to version control our dashboards alongside our application code.

Long-term storage is handled by Thanos, which sits on top of Prometheus and stores historical metrics in S3. This lets us keep 90 days of high-resolution data and years of downsampled data for capacity planning and trend analysis.

The most impactful thing we did was creating SLO (Service Level Objective) dashboards. Each service has defined SLOs — for example, 99.9% availability and p99 latency under 200ms. Grafana shows our error budget burn rate in real-time. When the burn rate is high, teams prioritize reliability work over feature development. This data-driven approach transformed how we think about reliability.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
