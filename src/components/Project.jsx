import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { PROJECTS, OPENSOURCE } from "../constants/index.js";

const linkClass = "inline-flex items-center gap-1 underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper";

export default function Project() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section className="w-full" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="pb-6 text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
        Projects
      </h2>

      <ol className="space-y-10">
        {PROJECTS.map((project, index) => {
          const isExpanded = expandedProject === project.name;
          const detailsId = `project-details-${index}`;

          return (
            <li key={project.name}>
              <article className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-3 sm:gap-5">
                <span className="pt-0.5 font-mono text-[11px] font-semibold opacity-40" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="text-base font-black uppercase leading-tight tracking-tight sm:text-lg">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold uppercase tracking-wide">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} live site`} className={linkClass}>
                          Live <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source code`} className={linkClass}>
                          Source <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                      {project.videoLink && (
                        <a href={project.videoLink} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${project.name} video`} className={linkClass}>
                          Video <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 max-w-[70ch] text-sm font-medium leading-relaxed opacity-80">
                    {project.description}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5" aria-label={`${project.name} technologies`}>
                    {project.technologies?.slice(0, 4).map((technology) => (
                      <li key={technology} className="inline-flex items-center gap-2 text-xs font-semibold opacity-60">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-paper" aria-hidden="true" />
                        {technology}
                      </li>
                    ))}
                    {project.technologies?.length > 4 && !isExpanded && (
                      <li className="text-xs font-semibold opacity-60">+{project.technologies.length - 4} more</li>
                    )}
                  </ul>

                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    onClick={() => setExpandedProject(isExpanded ? null : project.name)}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wide underline decoration-1 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
                  >
                    {isExpanded ? "Hide details" : "View details"}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>

                  <div id={detailsId} hidden={!isExpanded} className="mt-5 max-w-[70ch] space-y-4">
                    <p className="text-sm font-medium leading-relaxed opacity-85">
                      {project.longDescription || project.description}
                    </p>
                    {project.features?.length > 0 && (
                      <ul className="space-y-2 text-sm font-medium leading-relaxed opacity-85">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex gap-2">
                            <span className="shrink-0" aria-hidden="true">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {project.technologies?.length > 4 && (
                      <p className="text-xs font-semibold leading-relaxed opacity-65">
                        Stack: {project.technologies.join(" · ")}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ol>

      <div id="opensource" className="scroll-mt-16 pt-12">
        <h3 className="pb-5 text-lg font-black uppercase leading-none tracking-tight">Open Source</h3>
        <ul className="space-y-7">
          {OPENSOURCE.map((contribution) => (
            <li key={`${contribution.org}-${contribution.project}`}>
              <h4 className="text-base font-black uppercase leading-tight tracking-tight">
                {contribution.project}
                <span className="ml-2 font-semibold normal-case opacity-70">at {contribution.org}</span>
              </h4>
              <p className="mt-2 text-sm font-medium leading-relaxed opacity-80">{contribution.description}</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold uppercase tracking-wide" aria-label={`${contribution.project} contributions`}>
                {contribution.links?.map((link, index) => {
                  const pullRequest = link.match(/\/pull\/(\d+)/)?.[1];
                  return (
                    <li key={link}>
                      <a href={link} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {pullRequest ? `PR #${pullRequest}` : `Contribution ${index + 1}`}
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
