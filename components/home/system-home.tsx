"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { socialLinks } from "@/data/social";

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-grotesk" });
const jbm = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-jbm" });

const EMAIL = "chinnasuryaprasad2001@gmail.com";
const GITHUB = socialLinks.find((s) => s.id === "github")?.url ?? "https://github.com/surya16122114";
const LINKEDIN = socialLinks.find((s) => s.id === "linkedin")?.url ?? "#";

/* Per-project presentation extras keyed by data/projects.ts ids */
const SVC: Record<
  string,
  { svc: string; flow: { label: string; hot?: boolean }[]; deps: string[] }
> = {
  prefixmesh: {
    svc: "svc/prefixmesh",
    flow: [{ label: "inference fleet" }, { label: "prefix-cache ring", hot: true }, { label: "paxos directory ×3" }],
    deps: ["sk-go", "sk-grpc", "sk-kafka", "sk-docker"],
  },
  contextpack: {
    svc: "svc/contextpack",
    flow: [{ label: "any LLM client" }, { label: "contextpack proxy", hot: true }, { label: "upstream LLM" }],
    deps: ["sk-python", "sk-fastapi", "sk-llms", "sk-agentic"],
  },
  mockloop: {
    svc: "svc/mockloop",
    flow: [{ label: "candidate voice" }, { label: "pipecat loop", hot: true }, { label: "evaluator · debrief" }],
    deps: ["sk-python", "sk-fastapi", "sk-llms", "sk-agentic", "sk-next"],
  },
  "distributed-kv": {
    svc: "svc/distributed-kv",
    flow: [{ label: "client" }, { label: "paxos ×3", hot: true }, { label: "redis hot reads" }],
    deps: ["sk-java", "sk-grpc", "sk-docker", "sk-k8s"],
  },
  "os-kernel": {
    svc: "svc/surya-os",
    flow: [{ label: "bootloader · asm" }, { label: "kernel core", hot: true }, { label: "drivers · shell" }],
    deps: ["sk-ccpp", "sk-asm"],
  },
  "interview-coach": {
    svc: "svc/interviewcoach",
    flow: [{ label: "candidate" }, { label: "fastapi agent", hot: true }, { label: "gemini live API" }],
    deps: ["sk-python", "sk-fastapi", "sk-gcp", "sk-llms", "sk-react"],
  },
  "cloud-native-app": {
    svc: "svc/cloud-native",
    flow: [{ label: "git push" }, { label: "gh actions" }, { label: "terraform", hot: true }, { label: "AWS VPC" }],
    deps: ["sk-aws", "sk-terra", "sk-docker", "sk-gha"],
  },
};

const SKILL_GROUPS: { name: string; chips: { id: string; label: string }[] }[] = [
  {
    name: "languages/",
    chips: [
      { id: "sk-java", label: "Java" },
      { id: "sk-python", label: "Python" },
      { id: "sk-go", label: "Go" },
      { id: "sk-ccpp", label: "C / C++" },
      { id: "sk-asm", label: "x86 Assembly" },
      { id: "sk-ts", label: "TypeScript" },
      { id: "sk-sql", label: "SQL" },
    ],
  },
  {
    name: "ai-ml/",
    chips: [
      { id: "sk-rag", label: "RAG" },
      { id: "sk-llms", label: "LLMs" },
      { id: "sk-moe", label: "Mixture-of-Experts" },
      { id: "sk-agentic", label: "Agentic AI" },
      { id: "sk-lg", label: "LangGraph" },
      { id: "sk-tf", label: "Transformers" },
    ],
  },
  {
    name: "backend/",
    chips: [
      { id: "sk-spring", label: "Spring Boot" },
      { id: "sk-fastapi", label: "FastAPI" },
      { id: "sk-grpc", label: "gRPC" },
      { id: "sk-kafka", label: "Kafka" },
      { id: "sk-node", label: "Node.js" },
      { id: "sk-gql", label: "GraphQL" },
    ],
  },
  {
    name: "cloud/",
    chips: [
      { id: "sk-aws", label: "AWS" },
      { id: "sk-gcp", label: "GCP" },
      { id: "sk-terra", label: "Terraform" },
      { id: "sk-docker", label: "Docker" },
      { id: "sk-k8s", label: "Kubernetes" },
      { id: "sk-gha", label: "GitHub Actions" },
    ],
  },
  {
    name: "frontend/",
    chips: [
      { id: "sk-react", label: "React" },
      { id: "sk-next", label: "Next.js" },
      { id: "sk-redux", label: "Redux" },
      { id: "sk-ang", label: "Angular" },
    ],
  },
];

const BOOT_LINES: { cls: string; text: string }[] = [
  { cls: "hd", text: "surya.sys — control plane v2.0" },
  { cls: "ok", text: "[ ok ] gateway            online" },
  { cls: "ok", text: "[ ok ] svc/projects       online · 7 replicas" },
  { cls: "ok", text: "[ ok ] svc/experience     online · 4 records" },
  { cls: "ok", text: "[ ok ] svc/skills         online" },
  { cls: "ok", text: "[ ok ] svc/contact        online" },
  { cls: "ok", text: "[ ok ] metrics.store      attached" },
  { cls: "", text: "cluster healthy — routing you in…" },
];

const METRICS = [
  { num: "500K+", lbl: "users_served", w: 100 },
  { num: "+50%", lbl: "throughput", w: 50 },
  { num: "−45%", lbl: "p95_api_latency", w: 45 },
  { num: "−70%", lbl: "lookup_time", w: 70 },
];

const NODE_BY_SECTION: Record<string, string> = {
  hero: "gw",
  metrics: "metrics",
  projects: "projects",
  experience: "experience",
  skills: "skills",
  contact: "contact",
};
const SVC_BY_SECTION: Record<string, string> = {
  hero: "gateway",
  metrics: "metrics.store",
  projects: "svc/projects",
  experience: "svc/experience",
  skills: "svc/skills",
  contact: "svc/contact",
};

interface TraceLine {
  t: string;
  verb: string;
  rest: string;
}

export function SystemHome() {
  const featured = projects.filter((p) => p.featured && SVC[p.id]);

  const [bootStage, setBootStage] = useState<"pending" | "running" | "done">("pending");
  const [bootCount, setBootCount] = useState(0);
  const [traces, setTraces] = useState<TraceLine[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeNode, setActiveNode] = useState("gw");
  const [fillsOn, setFillsOn] = useState(false);
  const [openRecs, setOpenRecs] = useState<boolean[]>(() => experiences.map((_, i) => i === 0));
  const [litDeps, setLitDeps] = useState<{ proj: string; chips: string[]; paths: string[] } | null>(null);
  const [hsLines, setHsLines] = useState<string[]>([]);
  const [connOpen, setConnOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [clockStr, setClockStr] = useState("--:--:--");
  const [reduced, setReduced] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const depboxRef = useRef<HTMLDivElement>(null);
  const t0 = useRef(0);
  const lastRoute = useRef("");
  const bootDone = useRef(false);

  const trace = useCallback((verb: string, rest: string) => {
    const t = "+" + ((performance.now() - t0.current) / 1000).toFixed(1) + "s";
    setTraces((prev) => [...prev.slice(-7), { t, verb, rest }]);
  }, []);

  /* boot */
  useEffect(() => {
    t0.current = performance.now();
    setReduced(matchMedia("(prefers-reduced-motion: reduce)").matches);
    const fast =
      location.search.includes("fast") ||
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !!sessionStorage.getItem("sys-booted");
    if (fast) {
      setBootStage("done");
      bootDone.current = true;
      trace("boot", "cluster online · 7 services healthy");
      return;
    }
    setBootStage("running");
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setBootCount(i + 1), 85 * (i + 1)));
    });
    const finish = setTimeout(() => kill(), 85 * BOOT_LINES.length + 420);
    function kill() {
      if (bootDone.current) return;
      bootDone.current = true;
      setBootStage("done");
      try {
        sessionStorage.setItem("sys-booted", "1");
      } catch {}
      trace("boot", "cluster online · 7 services healthy");
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") kill();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finish);
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const skipBoot = () => {
    if (!bootDone.current) {
      bootDone.current = true;
      setBootStage("done");
      try {
        sessionStorage.setItem("sys-booted", "1");
      } catch {}
      trace("boot", "cluster online · 7 services healthy");
    }
  };

  /* section routing + reveals */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const secIO = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            const id = (e.target as HTMLElement).id;
            if (id && id !== lastRoute.current) {
              lastRoute.current = id;
              trace("route", "/" + (id === "hero" ? "" : id) + " → " + SVC_BY_SECTION[id] + " · 200 OK");
              setActiveNode(NODE_BY_SECTION[id]);
            }
          }
        });
      },
      { threshold: 0.35 }
    );
    Object.keys(NODE_BY_SECTION).forEach((id) => {
      const el = root.querySelector("#" + id);
      if (el) secIO.observe(el);
    });
    const rvIO = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
            if ((e.target as HTMLElement).id === "metrics") setFillsOn(true);
            rvIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    root.querySelectorAll(".rv, #metrics").forEach((el) => rvIO.observe(el));
    return () => {
      secIO.disconnect();
      rvIO.disconnect();
    };
  }, [trace]);

  /* clock */
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      setClockStr(pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()));
    };
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  /* dependency graph */
  const drawDeps = (projId: string) => {
    const box = depboxRef.current;
    const svc = SVC[projId];
    if (!box || !svc) return;
    const bo = box.getBoundingClientRect();
    const row = box.querySelector<HTMLElement>(`[data-proj="${projId}"]`);
    if (!row) return;
    const r1 = row.getBoundingClientRect();
    const x1 = r1.right - bo.left;
    const y1 = r1.top - bo.top + r1.height / 2;
    const paths: string[] = [];
    const chips: string[] = [];
    svc.deps.forEach((id) => {
      const chip = box.querySelector<HTMLElement>("#" + id);
      if (!chip) return;
      chips.push(id);
      const r2 = chip.getBoundingClientRect();
      const x2 = r2.left - bo.left;
      const y2 = r2.top - bo.top + r2.height / 2;
      paths.push(`M${x1},${y1} C${x1 + 60},${y1} ${x2 - 60},${y2} ${x2},${y2}`);
    });
    setLitDeps({ proj: projId, chips, paths });
    trace("graph", "deps(" + svc.svc + ") resolved");
  };

  /* replay */
  const replay = () => {
    setOpenRecs(experiences.map(() => false));
    trace("replay", "career.events from offset 0");
    experiences.forEach((_, i) => {
      const idxFromOldest = experiences.length - 1 - i;
      setTimeout(() => {
        setOpenRecs((prev) => prev.map((v, j) => (j === idxFromOldest ? true : v)));
      }, 300 * (i + 1));
    });
  };

  /* handshake */
  const connect = () => {
    const lines = ["→ SYN", "← SYN-ACK", "→ ACK", "connection ESTABLISHED"];
    lines.forEach((l, i) => {
      setTimeout(() => setHsLines((prev) => [...prev, l]), reduced ? 0 : 210 * i);
    });
    setTimeout(
      () => {
        setConnOpen(true);
        trace("egress", "connection established · say hi");
      },
      reduced ? 0 : 210 * lines.length
    );
  };

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
    trace("egress", "address copied to clipboard");
  };

  const navTrace = (href: string) => trace("consensus", "nav → " + href + " · quorum 3/3 · committed");

  const last = traces[traces.length - 1];

  return (
    <div ref={rootRef} className={`sys ${grotesk.variable} ${jbm.variable}`}>
      <div className="glow a" />
      <div className="glow b" />

      {bootStage !== "done" && (
        <div className={"boot" + (bootStage === "pending" ? "" : "")} onClick={skipBoot}>
          <div className="bootlines">
            {BOOT_LINES.slice(0, bootCount).map((l, i) => (
              <div key={i} className={l.cls}>
                {l.text}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="snav">
        <div className="nav-in">
          <span className="logo">
            surya<span className="st">.sys</span>
          </span>
          <div className="nav-links">
            <a href="#metrics" onClick={() => navTrace("#metrics")}>metrics</a>
            <a href="#projects" onClick={() => navTrace("#projects")}>projects</a>
            <a href="#experience" onClick={() => navTrace("#experience")}>experience</a>
            <a href="#skills" onClick={() => navTrace("#skills")}>skills</a>
            <a href="#contact" onClick={() => navTrace("#contact")}>contact</a>
            <Link href="/about">about ↗</Link>
            <a className="nav-cta" href="/resume.pdf" target="_blank" rel="noopener">
              resume ↓
            </a>
            <span className="health">
              <span className="pdot" />
              healthy
            </span>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="hero" id="hero">
          <div>
            <div className="eyebrow">surya.sys / control plane — your visit is live traffic through this page</div>
            <h1>
              Chinnasurya
              <br />
              Prasad Vulavala
            </h1>
            <div className="role">
              <b>AI/ML Engineer</b> · distributed systems · Boston, MA
            </div>
            <p className="lede">
              I build the systems behind AI — <span className="hl">RAG platforms</span>,{" "}
              <span className="hl">LLM context infrastructure</span>, <span className="hl">distributed caches</span> —
              and one operating system, for fun. This site runs on the same ideas:{" "}
              <span className="hl">you are the request</span>. The map on the right is the cluster serving you; the
              trace at the bottom is your session.
            </p>
            <div className="pill">
              <span className="pdot" />
              OPEN TO SDE / AI ENGINEER ROLES — 2026
            </div>
            <div className="ctas">
              <a className="btn pri" href="#projects" onClick={() => navTrace("#projects")}>
                inspect services →
              </a>
              <a className="btn" href="/resume.pdf" target="_blank" rel="noopener">
                resume.pdf ↓
              </a>
              <a className="btn" href={GITHUB} target="_blank" rel="noopener">
                github
              </a>
              <a className="btn" href={LINKEDIN} target="_blank" rel="noopener">
                linkedin
              </a>
            </div>
          </div>
          <div className="topo">
            <div className="topo-head">
              <span>cluster topology — click a node to route</span>
              <span className="live">● live</span>
            </div>
            <svg viewBox="0 0 480 348" xmlns="http://www.w3.org/2000/svg" aria-label="site topology map">
              <path className="edge" d="M114,44 C148,44 140,128 170,128" />
              <path className="edge" d="M282,128 C312,128 300,45 330,45" />
              <path className="edge" d="M282,128 C308,128 306,133 330,133" />
              <path className="edge" d="M282,128 C312,128 300,221 330,221" />
              <path className="edge" d="M282,128 C318,128 298,309 330,309" />
              <path className="edge dash" d="M226,146 L226,300" />
              <path id="pf1" fill="none" stroke="none" d="M114,44 C148,44 140,128 170,128 H282 C312,128 300,45 330,45" />
              <path id="pf2" fill="none" stroke="none" d="M114,44 C148,44 140,128 170,128 H282 C312,128 300,221 330,221" />
              <path id="pf3" fill="none" stroke="none" d="M114,44 C148,44 140,128 170,128 H282 C318,128 298,309 330,309" />
              {!reduced && (
                <>
                  <circle className="pkt" r="3.5" fill="#22d3ee">
                    <animateMotion dur="4s" repeatCount="indefinite">
                      <mpath href="#pf1" />
                    </animateMotion>
                  </circle>
                  <circle className="pkt v" r="3.5" fill="#8b7ff7">
                    <animateMotion dur="5.2s" begin="1.4s" repeatCount="indefinite">
                      <mpath href="#pf2" />
                    </animateMotion>
                  </circle>
                  <circle className="pkt" r="3" fill="#22d3ee" opacity=".7">
                    <animateMotion dur="6s" begin="2.6s" repeatCount="indefinite">
                      <mpath href="#pf3" />
                    </animateMotion>
                  </circle>
                </>
              )}
              <g className="tnode on">
                <rect x="16" y="28" width="98" height="32" rx="7" />
                <circle cx="28" cy="44" r="3.5" fill="#22d3ee" />
                <text x="38" y="48">you · client</text>
              </g>
              {(
                [
                  { node: "gw", href: "#hero", x: 170, y: 110, w: 112, h: 36, dot: "#34d399", label: "gateway" },
                  { node: "projects", href: "#projects", x: 330, y: 28, w: 134, h: 34, dot: "#34d399", label: "svc/projects" },
                  { node: "experience", href: "#experience", x: 330, y: 116, w: 134, h: 34, dot: "#34d399", label: "svc/experience" },
                  { node: "skills", href: "#skills", x: 330, y: 204, w: 134, h: 34, dot: "#34d399", label: "svc/skills" },
                  { node: "contact", href: "#contact", x: 330, y: 292, w: 134, h: 34, dot: "#34d399", label: "svc/contact" },
                  { node: "metrics", href: "#metrics", x: 170, y: 300, w: 112, h: 34, dot: "#fbbf24", label: "metrics.store", dash: true },
                ] as const
              ).map((n) => (
                <a key={n.node} href={n.href}>
                  <g className={"tnode" + (activeNode === n.node ? " on" : "")}>
                    <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="7" strokeDasharray={"dash" in n && n.dash ? "4 4" : undefined} />
                    <circle cx={n.x + 12} cy={n.y + n.h / 2} r="3.5" fill={n.dot} />
                    <text x={n.x + 22} y={n.y + n.h / 2 + 4}>
                      {n.label}
                    </text>
                  </g>
                </a>
              ))}
            </svg>
            <div className="legend">
              <i>
                <span className="c">●</span> request (you)
              </i>
              <i>
                <span className="g">●</span> healthy service
              </i>
              <i>edges = routes</i>
            </div>
          </div>
        </div>

        <section id="metrics" className="rv">
          <div className="svc-line">
            <span className="nm">metrics.store</span> · scraped from production @ Optum (UnitedHealth Group) ·{" "}
            <span className="ok">healthy ●</span>
          </div>
          <h2>Production telemetry</h2>
          <p className="sub">Real numbers from systems I owned — not invented for the landing page.</p>
          <div className="tiles">
            {METRICS.map((m) => (
              <div className="tile" key={m.lbl}>
                <div className="num">{m.num}</div>
                <div className="lbl">{m.lbl}</div>
                <div className="track">
                  <div className="fill" style={{ width: fillsOn ? m.w + "%" : 0 }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="svc-line rv">
            <span className="nm">svc/projects</span> · replicas {featured.length}/{featured.length} ·{" "}
            <span className="ok">healthy ●</span>
          </div>
          <h2 className="rv">Featured systems</h2>
          <p className="sub rv">Each service ships with a real architecture diagram. Hover a card — it replicates.</p>
          <div className="sgrid">
            {featured.map((p) => {
              const s = SVC[p.id];
              return (
                <div
                  className="card rv"
                  key={p.id}
                  onMouseEnter={() => trace("span", "attach → " + s.svc + " · replicas ×3 shown")}
                >
                  <div className="chead">
                    <span className="nm">{s.svc}</span>
                    <span className="live">● live</span>
                    {p.badge && <span className="badge">[{p.badge}]</span>}
                  </div>
                  <div className="cbody">
                    <div className="flow">
                      {s.flow.map((f, i) => (
                        <span key={f.label} style={{ display: "contents" }}>
                          {i > 0 && <span className="arr">─▶</span>}
                          <span className={"node" + (f.hot ? " hot" : "")}>{f.label}</span>
                        </span>
                      ))}
                    </div>
                    <div className="cname">{p.title}</div>
                    <div className="cdesc">{p.description}</div>
                    <div className="cdeps">deps: {p.technologies.slice(0, 5).join(" · ").toLowerCase()}</div>
                  </div>
                  <div className="cfoot">
                    <Link className="view" href={`/projects/${p.id}`}>
                      inspect →
                    </Link>
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noopener">
                        gh:{p.github.split("/").pop()} ↗
                      </a>
                    ) : (
                      <span className="priv">private</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="experience">
          <div className="svc-line rv">
            <span className="nm">topic career.events</span> · {experiences.length} records · retention ∞ ·{" "}
            <span className="ok">healthy ●</span>
          </div>
          <h2 className="rv">
            The event log{" "}
            <button className="replay" onClick={replay}>
              ▸ replay
            </button>
          </h2>
          <p className="sub rv">Career as an append-only log. Click a record to expand.</p>
          <div className="logwrap rv">
            {experiences.map((x, i) => {
              const offset = experiences.length - 1 - i;
              const open = openRecs[i];
              return (
                <div className={"rec" + (open ? " open" : "")} key={x.id}>
                  <div
                    className="rsum"
                    onClick={() => setOpenRecs((prev) => prev.map((v, j) => (j === i ? !v : v)))}
                  >
                    <span className="off">offset {offset}</span>
                    {i === 0 && <span className="latest">● latest</span>}
                    <span className="r-role">{x.title}</span>
                    <span className="r-co">@ {x.company}</span>
                    <span className="r-date">
                      {x.startDate} – {x.endDate}
                    </span>
                  </div>
                  {open && (
                    <div className="r-body">
                      {x.achievements.map((a, k) => (
                        <div key={k}>
                          <span className="tick">✓</span>
                          {a}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section id="skills">
          <div className="svc-line rv">
            <span className="nm">svc/skills</span> · dependency graph · <span className="ok">healthy ●</span>
          </div>
          <h2 className="rv">What talks to what</h2>
          <p className="sub rv">Hover a service on the left — the graph traces its real dependencies.</p>
          <div className="dep rv" ref={depboxRef} onMouseLeave={() => setLitDeps(null)}>
            <svg
              className="depsvg"
              viewBox={
                depboxRef.current
                  ? `0 0 ${depboxRef.current.offsetWidth} ${depboxRef.current.offsetHeight}`
                  : undefined
              }
            >
              {litDeps?.paths.map((d, i) => (
                <path key={i} d={d} fill="none" stroke="rgba(34,211,238,.55)" strokeWidth="1.3" />
              ))}
            </svg>
            <div>
              {featured.map((p) => {
                const s = SVC[p.id];
                return (
                  <div
                    key={p.id}
                    data-proj={p.id}
                    className={"dp" + (litDeps?.proj === p.id ? " lit" : "")}
                    onMouseEnter={() => drawDeps(p.id)}
                    onClick={() => (litDeps?.proj === p.id ? setLitDeps(null) : drawDeps(p.id))}
                  >
                    <i />
                    {s.svc}
                  </div>
                );
              })}
            </div>
            <div className="skgroups">
              {SKILL_GROUPS.map((g) => (
                <div className="skg" key={g.name}>
                  <div className="skh">{g.name}</div>
                  {g.chips.map((c) => (
                    <span key={c.id} id={c.id} className={"chip" + (litDeps?.chips.includes(c.id) ? " lit" : "")}>
                      {c.label}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className="dephint"># edges are drawn from each project&apos;s actual stack — nothing decorative</div>
          </div>
        </section>

        <section id="contact">
          <div className="svc-line rv">
            <span className="nm">egress</span> · external network · <span className="ok">open ●</span>
          </div>
          <div className="egress rv">
            <h2>Open a connection</h2>
            <p className="sub">Open to SDE / AI engineer roles · 2026. The handshake takes half a second.</p>
            <div className="hs">
              {hsLines.map((l, i) => (
                <div key={i} className={l.includes("ESTABLISHED") ? "est" : ""}>
                  {l}
                </div>
              ))}
            </div>
            {hsLines.length === 0 && (
              <button className="btn pri" onClick={connect}>
                connect →
              </button>
            )}
            {connOpen && (
              <div className="conn">
                <span className="email">{EMAIL}</span>
                <a className="btn" href="#" onClick={copyEmail}>
                  copy
                </a>
                <a className="btn" href={`mailto:${EMAIL}`}>
                  open mail app
                </a>
                <a className="btn" href={LINKEDIN} target="_blank" rel="noopener">
                  linkedin
                </a>
                <span className={"copied" + (copied ? " on" : "")}>✓ copied</span>
              </div>
            )}
          </div>
        </section>

        <footer className="sfoot">
          © 2026 Chinnasurya Prasad Vulavala · built with Next.js
        </footer>
      </div>

      <div className={"hudpanel" + (panelOpen ? " open" : "")}>
        <div className="in">
          {traces.map((l, i) => (
            <div key={i}>
              <span className="tstamp">{l.t}</span>
              <span className="verb">{l.verb}</span> {l.rest}
            </div>
          ))}
        </div>
      </div>
      <div className="hud">
        <button className="hud-toggle" onClick={() => setPanelOpen((v) => !v)}>
          trace {panelOpen ? "▾" : "▴"}
        </button>
        <span className="hudlast">
          {last && (
            <>
              <span className="tstamp">{last.t}</span>
              <span className="verb">{last.verb}</span> {last.rest}
            </>
          )}
        </span>
        <div className="hud-right">
          <span className="g">● healthy</span>
          <span className="hidem">region boston-1</span>
          <span className="hidem">events: {traces.length === 0 ? 0 : traces.length}</span>
          <span>{clockStr}</span>
        </div>
      </div>
    </div>
  );
}
