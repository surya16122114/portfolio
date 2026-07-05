import Link from "next/link";
import type { Project } from "@/data/projects";

/* Optional per-project mini architecture flow shown in the card body */
export const PROJECT_FLOWS: Record<string, { label: string; hot?: boolean }[]> = {
  contextpack: [{ label: "any LLM client" }, { label: "contextpack proxy", hot: true }, { label: "upstream LLM" }],
  edurag: [{ label: "canvas LMS" }, { label: "RAG backend", hot: true }, { label: "MoE · gpt-4o-mini" }],
  "distributed-kv": [{ label: "client" }, { label: "paxos ×3", hot: true }, { label: "redis hot reads" }],
  "os-kernel": [{ label: "bootloader · asm" }, { label: "kernel core", hot: true }, { label: "drivers · shell" }],
  "interview-coach": [{ label: "candidate" }, { label: "fastapi agent", hot: true }, { label: "gemini live API" }],
  "cloud-native-app": [{ label: "git push" }, { label: "gh actions" }, { label: "terraform", hot: true }, { label: "AWS VPC" }],
  "movie-booking-system": [{ label: "react UI" }, { label: "spring boot API", hot: true }, { label: "mysql" }],
  "student-accommodation": [{ label: "react UI" }, { label: "node · express", hot: true }, { label: "mongodb" }],
};

export function SysProjectCard({ project }: { project: Project }) {
  const svcName = "svc/" + project.id.replace("-app", "").replace("-system", "");
  const flow = PROJECT_FLOWS[project.id];

  return (
    <div className="card">
      <div className="chead">
        <span className="nm">{svcName}</span>
        <span className="live">● live</span>
        {project.badge && <span className="badge">[{project.badge}]</span>}
      </div>
      <div className="cbody">
        {flow && (
          <div className="flow">
            {flow.map((f, i) => (
              <span key={f.label} style={{ display: "contents" }}>
                {i > 0 && <span className="arr">─▶</span>}
                <span className={"node" + (f.hot ? " hot" : "")}>{f.label}</span>
              </span>
            ))}
          </div>
        )}
        <div className="cname">{project.title}</div>
        <div className="cdesc">{project.description}</div>
        <div className="cdeps">deps: {project.technologies.slice(0, 5).join(" · ").toLowerCase()}</div>
      </div>
      <div className="cfoot">
        <Link className="view" href={`/projects/${project.id}`}>
          inspect →
        </Link>
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener">
            gh:{project.github.split("/").pop()} ↗
          </a>
        ) : (
          <span className="priv">private</span>
        )}
      </div>
    </div>
  );
}
