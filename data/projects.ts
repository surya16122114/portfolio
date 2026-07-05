export type ProjectAccent = "violet" | "blue" | "fuchsia" | "emerald" | "amber" | "cyan";
export type ProjectIcon =
  | "ai"
  | "cloud"
  | "os"
  | "web"
  | "movie"
  | "mic"
  | "shield"
  | "chat"
  | "database"
  | "server";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  image: string;
  /** Architecture diagram shown on the card + detail page */
  architecture?: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
  icon?: ProjectIcon;
  accent?: ProjectAccent;
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "prefixmesh",
    title: "PrefixMesh — Distributed LLM Prefix-Cache Mesh",
    description:
      "Distributed prefix-cache mesh for LLM inference — content-addressed KV blocks on a consistent-hash ring with a Paxos control plane, RF=2 replication, and a Kafka-driven predictive prefetcher.",
    longDescription:
      "PrefixMesh shares computed prefix/KV-cache blocks across an LLM inference fleet, so repeated prompt prefixes (system prompts, RAG context, few-shot examples) skip prefill everywhere — not just on the node that first computed them. Stateless gRPC gateways route content-addressed block IDs over a consistent-hash ring to cache nodes with paged arenas and cost-aware eviction. A 3-replica directory running multi-decree Paxos owns membership, epoch-numbered rings, and rebalance leases, while a Kafka event plane learns access patterns and warms caches predictively — strictly off the hot path. The invariant that drives the design: every failure mode is a cache miss, never a wrong answer. Written in Go; KV-cache blocks are simulated as opaque keyed blobs, so the distributed-systems layer is demonstrated and measured without requiring GPUs.",
    technologies: [
      "Go",
      "Paxos",
      "gRPC",
      "Kafka",
      "Consistent Hashing",
      "Prometheus",
      "Grafana",
      "Docker",
    ],
    achievements: [
      "85.8% hit rate and 87% prefill compute saved at steady state (4 nodes, RF=2) with sub-millisecond match p50 — measured by a self-verifying make bench suite",
      "3-replica multi-decree Paxos directory: membership changes as consensus commits, quorum suspicion-exchange before eviction, and epoch-numbered rings with WRONG_EPOCH staleness rejection",
      "Killed a cache node mid-run: Paxos heals the ring in ~2s with zero errors and no visible hit-rate dip — a static ring collapses to 7.7% forever",
      "Kafka event plane feeds a predictive prefetcher that warms caches ahead of demand, strictly off the hot path; every consumer is idempotent by content addressing",
      "Paxos core tested under a simulated lossy/reordering network with concurrent proposers (go test -race); the full warm loop runs in CI without a broker",
    ],
    image: "/images/projects/prefixmesh/architecture.svg",
    architecture: "/images/projects/prefixmesh/architecture.svg",
    github: "https://github.com/surya16122114/prefixmesh",
    featured: true,
    icon: "database",
    accent: "cyan",
    badge: "Distributed Systems",
  },
  {
    id: "contextpack",
    title: "ContextPack",
    description:
      "OpenAI-compatible proxy that losslessly compresses LLM context via a negotiated session codebook — cut tokens, keep answers.",
    longDescription:
      "ContextPack is an OpenAI-compatible proxy + library that compresses the context you send to any LLM (OpenAI, Anthropic, or any OpenAI-compatible API). Its signature feature is a negotiated session codebook: it proposes a shared abbreviation dictionary and the model confirms each symbol before it's used, so compression is lossless — unlike one-sided compressors that just throw bytes away. It adds content-aware compressors for JSON, code, logs, and prose, lazy references for huge blobs, a token-budget optimizer with semantic dedup, and a live analytics dashboard. Usable four ways — HTTP proxy, Python library, CLI, or MCP server — with bring-your-own-key per request. Pure Python, no native or ML binaries.",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI API",
      "Anthropic",
      "MCP",
      "LangChain",
      "LLM",
      "Benchmarking",
    ],
    achievements: [
      "Designed a negotiated session codebook that compresses context losslessly — the model confirms each symbol — reaching 57–60% token savings at 100% accuracy on the codebook path",
      "Built content-aware compressors (JSON, code, logs, prose), lazy references, and a token-budget optimizer with semantic dedup",
      "Shipped 4 usage modes — HTTP proxy, Python library, CLI, and MCP server — with a live savings dashboard, benchmarked on GSM8K, SQuAD v2, and TruthfulQA",
    ],
    image: "/images/projects/contextpack/contextpack.png",
    architecture: "/images/projects/contextpack/architecture.svg",
    github: "https://github.com/surya16122114/contextpack",
    featured: true,
    icon: "server",
    accent: "cyan",
    badge: "LLM Infra",
  },
  {
    id: "distributed-kv",
    title: "Distributed Key-Value Store",
    description:
      "Fault-tolerant distributed key-value store using the Paxos consensus algorithm for strong consistency across replicated nodes.",
    longDescription:
      "A fault-tolerant, replicated key-value store engineered in Java. It uses the Paxos consensus algorithm to guarantee strong consistency and agreement across nodes even under failures, with gRPC for fast inter-node and client communication and a Redis-backed layer for hot reads. Containerized with Docker so a multi-node cluster spins up reproducibly, with optimized read/write paths and leader election for availability.",
    technologies: ["Java", "Paxos", "gRPC", "Docker", "Kubernetes", "Distributed Systems"],
    achievements: [
      "Implemented the Paxos consensus protocol for strong consistency across replicated nodes",
      "Used gRPC for low-latency client and inter-node communication with an efficient caching layer",
      "Optimized read/write operations by ~30% and orchestrated a reproducible multi-node cluster with Docker + Kubernetes",
    ],
    image: "/images/projects/distributed-kv/distributed-kv.png",
    architecture: "/images/projects/distributed-kv/architecture.svg",
    github: "https://github.com/surya16122114/distributed-kv-store",
    featured: true,
    icon: "database",
    accent: "emerald",
    badge: "Systems",
  },
  {
    id: "os-kernel",
    title: "Custom OS Kernel",
    description:
      "A custom operating-system kernel built from scratch in x86 Assembly, C, and C++ — process scheduling, memory management, and OOP driver abstractions.",
    longDescription:
      "A from-scratch operating-system kernel implemented in x86 Assembly, C, and C++. A custom Assembly bootloader hands off to a C/C++ kernel that provides core system services: a process scheduler for multitasking, memory management (paging and a kernel heap), and interrupt / I/O handling. Hardware devices — VGA text output, keyboard, timer, and I/O ports — are exposed through clean, OOP-based driver abstractions in C++.",
    technologies: ["x86 Assembly", "C", "C++", "OOP", "OS Dev", "Process Scheduling", "Memory Management"],
    achievements: [
      "Built a custom x86 Assembly bootloader and a C/C++ kernel from scratch",
      "Implemented process scheduling, paging-based memory management, and a kernel heap",
      "Handled interrupts and I/O through OOP-based C++ driver abstractions (VGA, keyboard, timer)",
    ],
    image: "/images/projects/os-kernel/os-kernel.png",
    architecture: "/images/projects/os-kernel/architecture.svg",
    github: "https://github.com/surya16122114/SuryaOS",
    featured: true,
    icon: "os",
    accent: "blue",
    badge: "Low-level",
  },
  {
    id: "interview-coach",
    title: "InterviewCoach AI",
    description:
      "Real-time conversational interview agent built on Vertex AI and the Gemini Live API, with prompt orchestration, guardrails, and evaluation metrics.",
    longDescription:
      "InterviewCoach AI is an LLM-based intelligent agent that runs realistic, real-time mock interviews with live conversational feedback. It integrates Google Vertex AI and the Gemini Live API for low-latency voice/chat, with a prompt-orchestration layer that manages interview flow, guardrails to keep responses safe and on-track, and evaluation metrics that score the candidate across communication and technical depth. Python/FastAPI backend with a React frontend.",
    technologies: ["Python", "FastAPI", "Vertex AI", "Gemini Live API", "LLM", "Agentic AI", "React"],
    achievements: [
      "Designed an LLM agent integrating Vertex AI and the Gemini Live API for real-time conversational feedback",
      "Built a prompt-orchestration layer with guardrails to keep interviews safe and on-track",
      "Added evaluation metrics scoring candidates on communication and technical depth",
    ],
    image: "/images/projects/interview-coach/interview-coach.png",
    architecture: "/images/projects/interview-coach/architecture.svg",
    featured: true,
    icon: "mic",
    accent: "fuchsia",
    badge: "Agentic AI",
  },
  {
    id: "edurag",
    title: "EduRAG — AI Learning Platform",
    description:
      "RAG-powered learning platform with a Mixture-of-Experts routing layer on GPT-4o-mini, integrated directly into Canvas via LTI 1.3.",
    longDescription:
      "EduRAG is an AI learning platform I built. It runs a Retrieval-Augmented Generation pipeline with a custom Mixture-of-Experts (MoE) routing layer on top of GPT-4o-mini — student queries are routed to specialist modes and grounded with vector-searched textbook sources before inference. It plugs straight into the LMS through LTI 1.3 and Canvas integration, with OIDC-based SSO, automatic student provisioning, and grade synchronization via the Assignment & Grade Services. Backend in Python/FastAPI, frontend in React.",
    technologies: [
      "Python",
      "FastAPI",
      "RAG",
      "Mixture-of-Experts",
      "GPT-4o-mini",
      "LangChain",
      "Vector Search",
      "LTI 1.3",
      "Canvas",
      "React",
    ],
    achievements: [
      "Built a RAG pipeline with a custom Mixture-of-Experts routing layer on GPT-4o-mini, routing queries to specialist modes with vector-searched textbook grounding",
      "Architected LTI 1.3 + Canvas integration with OIDC-based SSO and student provisioning",
      "Implemented grade synchronization via Canvas Assignment & Grade Services",
    ],
    image: "/images/projects/edurag/Edurag.png",
    architecture: "/images/projects/edurag/architecture.svg",
    github: "https://github.com/surya16122114/edurag-ai-assistant",
    featured: true,
    icon: "ai",
    accent: "violet",
    badge: "GenAI",
  },
  {
    id: "cloud-native-app",
    title: "Cloud-Native Infrastructure on AWS",
    description:
      "Highly available AWS platform provisioned end-to-end with Terraform and a GitHub Actions CI/CD pipeline.",
    longDescription:
      "Infrastructure-as-code project that automates a production-grade AWS environment with Terraform — VPCs, public/private subnets, route tables, DNS zones, and security groups following best practices. Adds load balancing, auto-scaling, and auto-healing for resilience, plus a GitHub Actions pipeline that runs automated tests and deploys on merge, dramatically shortening deployment time.",
    technologies: ["AWS", "Terraform", "VPC", "EC2", "S3", "GitHub Actions", "CI/CD", "Auto Scaling"],
    achievements: [
      "Provisioned VPCs, subnets, route tables, and DNS zones as reusable Terraform modules",
      "Configured load balancers, auto-scalers, and auto-healing for ~99.9% uptime",
      "Built a GitHub Actions CI/CD pipeline that cut deployment time by ~70%",
    ],
    image: "/images/projects/cloud-native/cloud-native.jpg",
    architecture: "/images/projects/cloud-native/architecture.svg",
    github: "https://github.com/chinnasuryaprasad1612/tf-aws-infra",
    featured: true,
    icon: "cloud",
    accent: "cyan",
  },

  /* ---- Additional work (All Projects page) ---- */
  {
    id: "movie-booking-system",
    title: "Popcorn Pal — Movie Booking",
    description:
      "Full-stack movie & seat booking platform with JWT auth, role-based access, and a clean, pattern-driven backend.",
    longDescription:
      "A movie booking platform built with Spring Boot and React where users register, browse movies, and book seats. Implements JWT-based authentication and role-based access for users, admins, and theater owners, a normalized MySQL schema, and SOLID principles with Repository, Singleton, and Factory patterns for clean, scalable code.",
    technologies: ["Spring Boot", "React", "MySQL", "JWT", "SOLID", "Design Patterns"],
    achievements: [
      "Implemented JWT auth and RBAC for users, admins, and theater owners",
      "Applied SOLID with Repository, Singleton, and Factory patterns",
      "Designed a normalized MySQL schema for the booking domain",
    ],
    image: "/images/projects/popcornpal/popcornpal.jpg",
    architecture: "/images/projects/movie-booking-system/architecture.svg",
    github: "https://github.com/surya16122114/movie-management",
    featured: false,
    icon: "movie",
    accent: "amber",
  },
  {
    id: "student-accommodation",
    title: "Roomies Radar",
    description:
      "Real-time student accommodation PWA with WebSocket chat, Redux state, offline support, and Fugu device APIs.",
    longDescription:
      "A progressive web app for student housing with RESTful Express.js + MongoDB APIs for profiles, listings, and chat. Built with React + TypeScript and Redux for state and WebSockets for real-time messaging, with PWA offline support and caching. Hit a 95% message delivery rate and cut unnecessary re-renders by ~50% through careful Redux state design.",
    technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Redux", "WebSockets", "PWA"],
    achievements: [
      "Built REST APIs for profiles, listings, and chat with real-time WebSocket messaging",
      "Reached a 95% message delivery rate with offline-first PWA caching",
      "Cut unnecessary re-renders by ~50% via Redux state management",
    ],
    image: "/images/projects/roomies-radar/roomies-radar.jpg",
    architecture: "/images/projects/student-accommodation/architecture.svg",
    github: "https://github.com/surya16122114/roomies-radar",
    featured: false,
    icon: "chat",
    accent: "fuchsia",
  },
];
