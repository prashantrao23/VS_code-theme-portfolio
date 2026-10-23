import { useState } from "react";
import {
  AtSign,
  ArrowDownToLine,
  ArrowRight,
  Braces,
  Check,
  Code2,
  ExternalLink,
  FileCode2,
  Globe,
  Mail,
  Server,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";

import "./about.scss";
import tsIcn from "../assets/ts-icn.svg";
import tsIcnDark from "../assets/ts-icn-dark.svg";
import skillIcn from "../assets/skill-icn.svg";
import skillIcnDark from "../assets/skill-icn-dark.svg";

const skillGroups = [
  {
    id: "frontend",
    title: "frontend",
    icon: Code2,
    count: "9 Technologies",
    skills: [
      ["React", "Proficient"],
      ["Angular", "Proficient"],
      ["Next.js", "Advanced"],
      ["TypeScript", "Proficient"],
      ["JavaScript (ES6+)", "Proficient"],
      ["HTML5", "Advanced"],
      ["SCSS / CSS3", "Advanced"],
      ["Tailwind CSS", "Proficient"],
      ["Material UI", "Advanced"],
    ],
  },
  {
    id: "state",
    title: "stateAndData",
    icon: Braces,
    count: "4 Technologies",
    skills: [
      ["Redux", "Advanced"],
      ["Zustand", "Advanced"],
      ["REST APIs", "Proficient"],
      ["GraphQL", "Advanced"],
    ],
  },
  {
    id: "ui",
    title: "uiAndAccessibility",
    icon: Globe,
    count: "5 Practices",
    skills: [
      ["WCAG 2.1 AA/AAA", "Proficient"],
      ["Responsive Design", "Proficient"],
      ["Micro Frontend", "Advanced"],
      ["Design Systems", "Proficient"],
      ["PWA", "Advanced"],
    ],
  },
  {
    id: "tools",
    title: "buildAndTooling",
    icon: Wrench,
    count: "6 Tools",
    skills: [
      ["Git", "Proficient"],
      ["CI/CD", "Advanced"],
      ["Figma", "Advanced"],
      ["Vite", "Proficient"],
      ["Jest", "Advanced"],
      ["GitHub Copilot", "Proficient"],
    ],
  },
  {
    id: "backend",
    title: "backendAndApis",
    icon: Server,
    count: "4 Technologies",
    skills: [
      ["Node.js", "Advanced"],
      ["MySQL", "Advanced"],
      ["GraphQL", "Advanced"],
      ["AI API Integration", "Proficient"],
    ],
  },
];

const coreStrengths = [
  "Reusable Component Architecture",
  "Design Systems",
  "State Management",
  "Responsive UI Engineering",
  "Performance Optimization",
  "Accessibility",
];

export default function About() {
  const [activeFile, setActiveFile] = useState("about.ts");

  const files = [
    { name: "about.ts", label: "About" },
    { name: "skills.json", label: "Skills" },
  ];

  return (
    <main className="about-workspace">
      {/* Editor tab / title strip */}
      <div className="workspace-content flex">
        {/* LEFT: Profile and experience */}
        <section className="" aria-label="Professional profile">
          <header className="workspace-titlebar bg-[#f5f5f5] dark:bg-[#1B1B1C] px-3 py-2">
            <h2 className="text-[#333333] dark:text-[#e5e2e1] text-[1rem] font-medium flex items-center gap-2">
              <img src={tsIcn} alt="icon" /> about.ts
            </h2>
          </header>
          <div className="flex flex-row p-3 gap-3">
            <div className="code-gutter flex flex-col gap-1.5 pr-3 border-r border-[#333333] dark:border-[#e5e2e1]">
              {Array.from({ length: 35 }, (_, index) => (
                <span
                  className="text-[0.75rem] text-[#333333] dark:text-[#8A919D]"
                  key={index}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              ))}
            </div>

            <div className="profile-code"> 
              <div className="profile-card bg-[#F8F9FA] dark:bg-[#1b1b1ccc] p-3 rounded-sm border border-[#E1E4E8] dark:border-[#1b1b1c] ">
                <div className="code-comment text-[#008000] dark:text-[#8A919D]">{"/*"}</div>
                <div className="flex items-center gap-3 my-2">
                  <div className="profile-card__avatar">
                    <div className="profile-card__avatar-placeholder">
                      <Code2 size={30} />
                    </div>
                    <span className="profile-card__online" />
                  </div>
                  <div className="profile-card__info">
                    <div className="profile-card__name flex items-center gap-1">
                      <span className="text-[#16825D] dark:text-[#F4B1EE] text-[0.75rem] font-normal">＊ Developer:</span>
                      <strong className="text-[#1e1e1e] dark:text-[#e5e2e1] text-[1.125rem] font-semibold leading-none">Prashant Rao</strong>
                    </div>

                    <p className="text-[#007acc] dark:text-[#9FCAFF] leading-none">Frontend Developer | React &amp; Angular</p>
                    <p className="text-[#007acc] dark:text-[#9FCAFF] leading-none">Web Accessibility &amp; Agile</p>

                    <div className="profile-card__status text-[#16825D] dark:text-[#84CFFF] text-[0.75rem] font-normal leading-none">
                      <span className="profile-card__status-dot" />
                      Active Status: Open for opportunities
                    </div>
                  </div>
                </div>
                <div className="code-comment text-[#008000] dark:text-[#8A919D]">{"*/"}</div>
              </div>

              <p className="code-comment text-[#008000] dark:text-[#8A919D] code-section-comment">
                // Core engineer profile definition
              </p>

              <p className="code-line text-[#267F99] dark:text-[#9FCAFF]">
                <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">import type</span>{" "}
                {"{ StaffEngineer }"}{" "}
                <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">from</span>{" "}
                <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">"'@core/architecture'"</span>;
              </p>

              <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">export const</span>{" "}
                <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">prashant</span>:{" "}
                <span className="syntax-yellow text-[#267f99] dark:text-[#9FCAFF]">DeveloperProfile</span> = {"{"}
              </p>

              <div className="code-indent">
                <p className="code-line">
                  <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">role</span>:{" "}
                  <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">'Frontend Developer'</span>,
                </p>

                <p className="code-line">
                  <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">experience</span>:{" "}
                  <span className="syntax-orange text-[#098658] dark:text-[#F4B1EE]">5</span>,
                  <span className="code-comment text-[#008000] dark:text-[#8A919D]"> // years</span>
                </p>

                <p className="code-line">
                  <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">company</span>:{" "}
                  <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">'Accenture'</span>,
                </p>

                <p className="code-line">
                  <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">focus</span>:{" "}
                  <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                    'Accessible, scalable UI'
                  </span>
                  ,
                </p>

                <p className="code-comment text-[#008000] dark:text-[#8A919D] code-line--spaced">
                  // Engineering philosophy
                </p>

                <p className="code-line">
                  <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">summary</span>:{" "}
                  <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">`</span>
                </p>

                <div className="profile-bio bg-[#F8F9FA] dark:bg-[#20202080] border-l-4 border-[#007ACC] dark:border-[#20202080] px-3 py-2 rounded-sm text-[#444444] dark:text-[#E5E2E1] text-[0.75rem] my-1">
                  Frontend Developer with 5 years of experience building
                  scalable, accessible enterprise applications using React,
                  Angular, TypeScript, and Node.js. Focused on reusable UI
                  architecture, performance, and web accessibility.
                </div>

                <p className="code-line">
                  <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">`</span>,
                </p>

                <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                  <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">coreStrengths</span>: [
                </p>

                <div className="strength-grid">
                  {coreStrengths.map((strength, index) => (
                    <div className="strength-item flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#20202080] px-2 py-2 rounded-sm text-[#1e1e1e] dark:text-[#E5E2E1] text-[0.75rem]" key={strength}>
                      {index % 2 === 0 ? (
                        <Braces size={12} />
                      ) : (
                        <Zap size={12} />
                      )}
                      {strength}
                    </div>
                  ))}
                </div>

                <p className="code-line text-[#1e1e1e] dark:text-[#e5e2e1]">],</p>

                <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                  <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">achievements</span>: {"{"}
                </p>

                <div className="code-indent">
                  <p className="code-line">
                    <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">uiDefectsReduced</span>:{" "}
                    <span className="syntax-orange text-[#098658] dark:text-[#F4B1EE]">30</span>,
                    <span className="code-comment text-[#008000] dark:text-[#8A919D]"> // %</span>
                  </p>
                  <p className="code-line">
                    <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">performanceImproved</span>:{" "}
                    <span className="syntax-orange text-[#098658] dark:text-[#F4B1EE]">35</span>,
                    <span className="code-comment text-[#008000] dark:text-[#8A919D]"> // %</span>
                  </p>
                  <p className="code-line">
                    <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">award</span>:{" "}
                    <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                      'Accenture Celebrates Excellence'
                    </span>
                  </p>
                </div>

                <p className="code-line text-[#1e1e1e] dark:text-[#e5e2e1]">{"},"}</p>

                <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                  <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">socialLinks</span>: {"{"}
                </p>

                <div className="social-links">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#007acc] dark:text-[#84CFFF] text-[0.75rem]"
                  >
                    <Code2 size={12} className="stroke-[#007acc] dark:stroke-[#84CFFF]"/> GitHub Profile ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/prashant-rao-8088771b3"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#007acc] dark:text-[#84CFFF] text-[0.75rem]"
                  >
                    <ExternalLink size={12} className="stroke-[#007acc] dark:stroke-[#84CFFF]"/> LinkedIn ↗
                  </a>

                  <a href="mailto:prashantrao744@gmail.com" className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#1e1e1e] dark:text-[#E5E2E1] text-[0.75rem]">
                    <Mail size={12} className="stroke-[#1e1e1e] dark:stroke-[#E5E2E1]"/> Email Contact
                  </a>

                  <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#D32F2F] dark:text-[#F4B1EE] text-[0.75rem]">
                    <ArrowDownToLine size={12} className="stroke-[#D32F2F] dark:stroke-[#F4B1EE]"/> Resume.pdf
                  </a>
                </div>

                <p className="code-line text-[#1e1e1e] dark:text-[#e5e2e1]">{"}"}</p>
              </div>

              <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">{"};"}</p>

              <p className="code-line text-[#267F99] dark:text-[#9FCAFF]">
                <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">export default</span>{" "}
                <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">prashant</span>;
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT: Technical skills */}
        <section
          className="bg-[#f5f5f5] dark:bg-[#1B1B1C] flex-1"
          aria-label="Technical skills"
        >
          <header className="workspace-titlebar px-3 py-2">
            <h2 className="text-[#333333] dark:text-[#e5e2e1] text-[1rem] font-medium flex items-center gap-2">
              <img src={skillIcn} alt="icon" /> skills.json
            </h2>
          </header>

          {/* <div className="skills-json-header">
            <div>
              <Braces size={13} />
              <strong>"matrix": "Technical Skillset"</strong>
              <span className="syntax-muted">, "version": "2026"</span>
            </div>

            <span className="read-only">ReadOnly</span>
          </div>

          <div className="skills-summary">
            <span>{"{"} "skills": [</span>
            <span>
              {skillGroups.reduce(
                (total, group) => total + group.skills.length,
                0,
              )}{" "}
              entries
            </span>
          </div> */}
          <div className="flex flex-col gap-2.5 p-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  className="skill-group bg-[#E5E2E1] dark:bg-[#202020] flex flex-col gap-2.5 rounded-sm p-3"
                  key={group.id}
                >
                  <header className="skill-group__header flex items-center justify-between">
                    <div className="text-[#333333] dark:text-[#e5e2e1] text-[0.875rem] font-semibold flex gap-1 items-center">
                      <Icon size={13} />"{group.title}"
                    </div>

                    <span className="text-[#333333] dark:text-[#e5e2e1] text-[0.75rem] font-normal">
                      {group.count}
                    </span>
                  </header>

                  <div className="skill-group__items flex flex-wrap gap-1.5">
                    {group.skills.map(([name, level]) => (
                      <div
                        className="skill-chip bg-[#C0C7D3] dark:bg-[#2a2a2a] px-2 py-1 flex items-center gap-1 rounded-sm"
                        key={name}
                      >
                        <span className="text-[.75rem] font-normal text-[#2a2a2a] dark:text-[#e5e2e1]">
                          {name}
                        </span>
                        <span
                          className={`skill-level skill-level--${level
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {level}
                        </span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="skills-json-footer">
            {/* <span>{"],"principles": ["}</span> */}
            <span>WCAG 2.1 AA · SOLID · DRY</span>
          </div>
        </section>
      </div>

      {/* Terminal-style contact bar */}
      <footer className="workspace-terminal flex items-center gap-3 justify-between p-3 bg-[#F3F3F3] dark:bg-[#2a2a2a] border-t border-[#e0e0e0] dark:border-[#2a2a2a]">
        <div className="workspace-terminal__prompt flex items-center gap-2 text-[#007ACC] dark:text-[#84CFFF] text-[0.75rem]">
          <Terminal size={13} className="stroke-[#007ACC] dark:stroke-[#84CFFF]"/>
          <span>prashant@portfolio:~$</span>
          <span className="terminal-command text-[#1e1e1e] dark:text-[#E5E2E1]">
            ./initiate-collaboration.sh --target=contact.ts
          </span>
        </div>

        <div className="workspace-terminal__message ms-auto! text-[#616161] dark:text-[#C0C7D3]">
          Want to build accessible, scalable web experiences?
        </div>

        <a href="mailto:prashantrao744@gmail.com" className="flex items-center gap-1 rounded-sm p-2 bg-[#007ACC] text-[#ffffff] text-[0.75rem] font-medium">
          Open contact.ts <ArrowRight size={13} />
        </a>
      </footer>

      <div className="workspace-statusbar">
        <span>
          <Code2 size={11} /> main
        </span>
        <span>
          <Check size={11} /> No errors
        </span>
        <span>TypeScript</span>
        <span>UTF-8</span>
        <span>React</span>
      </div>
    </main>
  );
}