interface ProjectCardProps {
  emoji: string;
  title: string;
  description: string;
  url: string;
  linkText: string;
  color: string;
  delay?: number;
}

export default function ProjectCard({
  emoji,
  title,
  description,
  url,
  linkText,
  color,
  delay = 0,
}: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-fade-up group flex flex-col rounded-3xl border-2 border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Colored top strip */}
      <div
        className="mb-4 -mx-6 -mt-6 h-2 rounded-t-3xl"
        style={{ backgroundColor: color }}
      />

      <span className="mb-3 text-4xl">{emoji}</span>

      <h3
        className="text-2xl transition-colors"
        style={{ fontFamily: "'Lilita One', cursive", color }}
      >
        {title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">{description}</p>

      <span
        className="mt-5 inline-flex items-center gap-1 text-sm font-bold transition-gap"
        style={{ color }}
      >
        {linkText}
        <svg
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </a>
  );
}
