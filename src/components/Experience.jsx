import { EXPERIENCES } from "../constants/index.js";

function Experience() {
  return (
    <section className="w-full" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="pb-6 text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
        Experience
      </h2>

      <ol className="space-y-10">
        {EXPERIENCES.map((exp) => {
          const qualifier = exp.role.match(/\(([^)]*)\)$/)?.[1];
          const role = exp.role.replace(/\s*\([^)]*\)$/, "");

          return (
            <li key={`${exp.company}-${exp.role}`}>
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-base font-black uppercase leading-tight tracking-tight sm:text-lg">
                    {role}
                    <span className="ml-2 font-semibold normal-case opacity-70">at {exp.company}</span>
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wide opacity-65">{exp.year}</p>
                </div>

                <p className="mt-1 text-xs font-semibold opacity-65">
                  {exp.location}{qualifier && ` · ${qualifier}`}
                </p>

                <div className="mt-4 max-w-[68ch] space-y-3 text-sm font-medium leading-relaxed opacity-85">
                  <p>{exp.description}</p>
                  {exp.highlights?.length > 0 && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span aria-hidden="true" className="shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5" aria-label={`Technologies used at ${exp.company}`}>
                  {exp.technologies.map((technology) => (
                    <li key={technology} className="inline-flex items-center gap-2 text-xs font-semibold opacity-60">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-paper" aria-hidden="true" />
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default Experience;
