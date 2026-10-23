const SKILLS = {
  Languages: ["Python", "TypeScript", "JavaScript (ES6+)", "Go (Golang)", "SQL"],
  "AI and LLM": ["RAG", "Agentic Workflows", "Tool Calling", "Prompt Engineering", "LLM Observability", "OpenTelemetry", "LangGraph", "LangChain"],
  "Backend Engineering": ["FastAPI", "Node.js", "Express.js", "REST APIs", "API Design", "Microservices", "OAuth", "FFmpeg", "Inngest"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Pinecone", "Supabase", "Object Storage", "Cloudflare R2"],
  "Cloud and DevOps": ["Observability", "Distributed Tracing", "CI/CD", "Docker", "Linux", "Git & GitHub", "Google Cloud Platform (GCP)"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "GSAP", "Motion.dev"],
};

function Skills() {
  return (
    <section className="w-full" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="pb-6 text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
        Skills
      </h2>

      <div className="space-y-7">
        {Object.entries(SKILLS).map(([category, skills], index) => (
          <div
            key={category}
            className="grid gap-2 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-5"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] font-semibold opacity-40" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-black uppercase leading-snug tracking-tight">
                {category}
              </h3>
            </div>

            <ul className="flex flex-wrap gap-x-4 gap-y-1.5" aria-label={`${category} skills`}>
              {skills.map((skill) => (
                <li key={skill} className="inline-flex items-center gap-2 text-sm font-medium leading-snug opacity-75">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-paper" aria-hidden="true" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
