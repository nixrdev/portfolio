import { GitHubActivity } from "./ui/github-activity";

const USERNAME = "nixrdev";

export default function GitHubContributions() {
  return (
    <section className="w-full space-y-3" aria-labelledby="contributions-heading">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="contributions-heading" className="text-lg font-black uppercase leading-none tracking-tight">
          Contributions
        </h2>
        <a
          href={`https://github.com/${USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold lowercase underline decoration-1 underline-offset-4 opacity-70 hover:opacity-100"
        >
          @{USERNAME} ↗
        </a>
      </div>

      <GitHubActivity
        username={USERNAME}
        year="the past year"
        showMonths
        className="mx-auto"
      />
    </section>
  );
}
