import { SKILLS_MAP } from '../data/skills';

interface ExperienceCardProps {
  title: string;
  role?: string;
  description: string;
  years: string;
  bgColor: string;
  badgeColor: string;
  badgeTextColor: string;
  skills?: string[];
  delay?: number;
}

export default function ExperienceCard({
  title,
  role,
  description,
  years,
  bgColor,
  badgeColor,
  badgeTextColor,
  skills,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <div
      className="animate-fade-up flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        backgroundColor: bgColor,
        animationDelay: `${delay}ms`,
        boxShadow: `0 8px 32px ${bgColor}55`,
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3
            className="text-4xl text-white"
            style={{ fontFamily: "'Lilita One', cursive" }}
          >
            {title}
          </h3>
          {role && (
            <p className="mt-1 text-sm font-bold tracking-wide text-white/60 uppercase">{role}</p>
          )}
        </div>
        <span
          className="rounded-full px-4 py-1 text-sm font-bold"
          style={{ backgroundColor: badgeColor, color: badgeTextColor }}
        >
          {years}
        </span>
      </div>

      <p className="mt-4 text-base leading-relaxed text-white/80">{description}</p>

      {skills && skills.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5">
          {skills.map((key) => {
            const skill = SKILLS_MAP[key];
            if (!skill) return null;
            return (
              <div key={key} className="flex flex-col items-center gap-1.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 hover:scale-110">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={skill.iconUrl} alt={skill.name} width={20} height={20} />
                </div>
                <span className="text-[10px] font-bold text-white/50">{skill.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
