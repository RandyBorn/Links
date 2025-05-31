"use client";
import { useEffect, useState } from "react";

const skills = [
  "HTML5",
  "CSS3 / SASS",
  "JavaScript (ES6+)",
  "React",
  "Node.js / Express",
  "MongoDB / Mongoose",
  "TailwindCSS",
  "Git & GitHub",
  "Markdown",
  "Vercel / Netlify",
  "Postman",
  "VS Code",
];

export default function SkillsSection() {
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowSkills(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        ⚙️ Tech Stack/Skills
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`
              transform transition duration-500 ease-out
              opacity-0 translate-y-6
              ${showSkills ? "opacity-100 translate-y-0" : ""}
              delay-${index * 100}
              bg-gray-800 text-gray-200 px-4 py-3 rounded-xl text-center shadow-md hover:scale-105 hover:bg-purple-600 hover:text-white cursor-default
            `}
            style={{ transitionDelay: `${index * 300}ms` }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
