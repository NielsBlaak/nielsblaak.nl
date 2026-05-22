interface SkillBubbleProps {
  name: string;
  color: string;
  iconUrl: string;
  delay?: number;
}

export default function SkillBubble({ name, color, iconUrl, delay = 0 }: SkillBubbleProps) {
  return (
    <div
      className="animate-fade-up group flex flex-col items-center gap-3"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="flex h-24 w-24 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:-translate-y-2"
        style={{ boxShadow: `0 6px 24px ${color}44` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconUrl} alt={name} width={48} height={48} />
      </div>
      <span className="text-sm font-bold text-gray-500">{name}</span>
    </div>
  );
}
