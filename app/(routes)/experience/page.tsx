import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <>
      <div className="svc-line">
        <span className="nm">topic career.events</span> · {experiences.length} records · retention ∞ ·{" "}
        <span className="ok">healthy ●</span>
      </div>
      <h1 className="ptitle">The event log</h1>
      <p className="sub">Career as an append-only log — every record, fully expanded.</p>
      <div className="logwrap" style={{ marginTop: 26 }}>
        {experiences.map((x, i) => {
          const offset = experiences.length - 1 - i;
          return (
            <div className="rec open" key={x.id}>
              <div className="rsum" style={{ cursor: "default" }}>
                <span className="off">offset {offset}</span>
                {i === 0 && <span className="latest">● latest</span>}
                <span className="r-role">{x.title}</span>
                <span className="r-co">@ {x.company}</span>
                <span className="r-date">
                  {x.startDate} – {x.endDate} · {x.location}
                </span>
              </div>
              <div className="rdesc">{x.description}</div>
              <div className="r-body">
                {x.achievements.map((a, k) => (
                  <div key={k}>
                    <span className="tick">✓</span>
                    {a}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
