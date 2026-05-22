import ExperienceCard from "../src/components/ExperienceCard";
import ProjectCard from "../src/components/ProjectCard";
import SkillBubble from "../src/components/SkillBubble";
import { SKILLS_MAP } from "../src/data/skills";

const MAIN_SKILLS = [
  "react",
  "nextjs",
  "typescript",
  "tailwind",
  "nodejs",
  "git",
  "html",
  "css",
  "npm",
  "azure",
  "firebase",
  "storybook",
  "jest",
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Skills */}
      <section className="mb-16">
        <h2
          className="animate-fade-up mb-8 text-3xl text-gray-800"
          style={{ fontFamily: "'Lilita One', cursive", animationDelay: "0ms" }}
        >
          Skills
        </h2>
        <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-6">
          {MAIN_SKILLS.map((key, i) => {
            const skill = SKILLS_MAP[key];
            if (!skill) return null;
            return (
              <SkillBubble
                key={key}
                name={skill.name}
                color={skill.color}
                iconUrl={skill.iconUrl}
                delay={120 + i * 60}
              />
            );
          })}
        </div>
      </section>

      {/* Projecten */}
      <section>
        <h2
          className="animate-fade-up mb-6 text-3xl text-gray-800"
          style={{
            fontFamily: "'Lilita One', cursive",
            animationDelay: "600ms",
          }}
        >
          Projecten
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            emoji="🎵"
            title="Play Any Song"
            description="Speel elk nummer af via de browser. Geen app nodig."
            url="https://nielsblaak.github.io/play-any-song/"
            linkText="Probeer het"
            color="#FF6B6B"
            delay={720}
          />
          <ProjectCard
            emoji="💼"
            title="Back to Work"
            description="Firefox-extensie die je helpt gefocust te blijven op je werk."
            url="https://addons.mozilla.org/nl/firefox/addon/back-to-work/"
            linkText="Download voor Firefox"
            color="#6C5CE7"
            delay={800}
          />
          <ProjectCard
            emoji="🧠"
            title="Quizappie"
            description="Een leuke quiz app — speel solo of met vrienden."
            url="https://quizappie.com"
            linkText="Speel mee"
            color="#00B894"
            delay={880}
          />
        </div>
      </section>

      {/* Ervaring */}
      <section className="mt-16">
        <h2
          className="animate-fade-up mb-6 text-3xl text-gray-800"
          style={{
            fontFamily: "'Lilita One', cursive",
            animationDelay: "900ms",
          }}
        >
          Ervaring
        </h2>
        <div className="flex flex-col gap-6">
          <ExperienceCard
            title="2-Controlware"
            role="Frontend Developer"
            description="Verbeter Business Central beveiliging met 2-Controlware. Eenvoudig autorisatiebeheer, compliance en interne controle. Ontdek onze softwareoplossingen."
            years="2025 — heden"
            bgColor="#0F2D5A"
            badgeColor="#F59E0B"
            badgeTextColor="#0F2D5A"
            skills={["react", "nextjs", "tailwind", "typescript", "storybook", "npm", "azure"]}
            delay={1020}
          />
          <ExperienceCard
            title="JEX"
            role="Frontend Developer"
            description="JEX is de one-stop-shop voor de flexibele arbeidsmarkt. Onze producten en diensten maken jouw werk nóg makkelijker. We bieden de totaaloplossing die je nodig hebt om te groeien."
            years="2023 — 2025"
            bgColor="#4C2368"
            badgeColor="#FFE66D"
            badgeTextColor="#4C2368"
            skills={["angular", "tailwind", "typescript", "jest", "storybook", "npm", "azure"]}
            delay={1100}
          />
          <ExperienceCard
            title="Hatsa!"
            role="Developer"
            description="Hatsa is jouw online shoppingbuddy. Wij helpen alle online shoppers met het doen en organiseren van online aankopen. Zo helpt Hatsa de dromen van online shoppers waar te maken."
            years="2016 — 2023"
            bgColor="#0A344F"
            badgeColor="#4ECDC4"
            badgeTextColor="#0A344F"
            skills={["react", "nextjs", "typescript", "tailwind", "capacitor", "nodejs", "storybook", "npm", "azure"]}
            delay={1180}
          />
        </div>
      </section>

      <footer className="mt-20 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Niels Blaak
      </footer>
    </div>
  );
}
