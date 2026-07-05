import Image from "next/image";
import { education } from "@/data/education";
import { skills, type SkillCategory } from "@/data/skills";
import { TechIcon } from "@/components/tech-icon";

export default function AboutPage() {
  return (
    <>
      <div className="svc-line">
        <span className="nm">svc/about</span> · identity service · <span className="ok">healthy ●</span>
      </div>
      <h1 className="ptitle">Backend-focused engineer who likes hard systems</h1>

      <div className="about-grid">
        <div className="avatar">
          <Image
            src="/images/Chinnasurya_Profile_Pic.jpg"
            alt="Chinnasurya Prasad Vulavala"
            width={176}
            height={176}
          />
        </div>
        <div className="prose">
          <p>
            I&apos;m <span className="hl">Chinnasurya Prasad Vulavala</span> — a software engineer who enjoys
            building scalable distributed systems, microservices, and cloud-native applications, from resilient
            backend APIs to infrastructure on AWS.
          </p>
          <p>
            I spent two years at <span className="hl">UnitedHealth Group</span> shipping enterprise health-tech for
            500,000+ users — secure microservices in Java/Spring Boot, Kafka event-driven messaging, and React
            frontends. I recently earned my{" "}
            <span className="hl">M.S. in Computer Software Engineering at Northeastern</span> (GPA 3.79), where I
            also TA&apos;d 150+ students in object-oriented programming.
          </p>
          <p>
            I&apos;m now an <span className="hl">AI Software Engineer at Humanitarians AI</span>, building a
            production RAG + Mixture-of-Experts education platform integrated into Canvas. I&apos;m deep in{" "}
            <span className="hl">distributed systems, cloud infrastructure, and applied GenAI</span> — and I care
            about clean code, system design, and performance.
          </p>
          <div className="svc-line" style={{ marginTop: 4 }}>
            region boston-1 · <span className="ok">open to 2026 SWE / AI engineer roles ●</span>
          </div>
        </div>
      </div>

      <section style={{ padding: "34px 0 6px" }}>
        <div className="svc-line">
          <span className="nm">education.store</span> · 2 records
        </div>
        <h2>Education</h2>
        <div className="edu-grid" style={{ marginTop: 18 }}>
          {education.map((edu) => (
            <div className="panel" key={edu.id}>
              <div className="cname" style={{ fontSize: 17 }}>{edu.degree}</div>
              <div style={{ color: "var(--vi)", fontSize: 14, marginTop: 2 }}>{edu.institution}</div>
              <div className="svc-line" style={{ marginTop: 8, marginBottom: 0 }}>
                {edu.startDate} – {edu.endDate} · {edu.location}
              </div>
              {edu.gpa && <span className="gpa">GPA {edu.gpa}</span>}
              {edu.description && (
                <p style={{ color: "var(--mut)", fontSize: 13.5, margin: "10px 0 0" }}>{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "34px 0 6px" }}>
        <div className="svc-line">
          <span className="nm">svc/skills</span> · full registry
        </div>
        <h2>Skills</h2>
        <div className="edu-grid" style={{ marginTop: 18 }}>
          {(Object.keys(skills) as SkillCategory[]).map((category) => (
            <div className="panel" key={category}>
              <div className="skh" style={{ fontFamily: "var(--mono)", fontSize: 11.5, color: "var(--cy)", marginBottom: 10 }}>
                {category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/
              </div>
              <div>
                {skills[category].map((skill) => (
                  <span key={skill.name} className="chip">
                    <TechIcon logoKey={skill.logoKey} name={skill.name} className="" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
