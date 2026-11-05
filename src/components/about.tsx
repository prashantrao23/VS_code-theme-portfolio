import { useState } from "react";
import {
  ArrowDownToLine,
  Braces,
  Code2,
  ExternalLink,
  Globe,
  Mail,
  Server,
  Wrench,
  Zap,
} from "lucide-react";

import "./about.scss";
import tsIcn from "../assets/ts-icn.svg";
import tsIcnDark from "../assets/ts-icn-dark.svg";
import skillIcn from "../assets/skill-icn.svg";
import skillIcnDark from "../assets/skill-icn-dark.svg";
import { useScreenSize } from "./useScreenSize";

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

export default function About({ initialSection = "about" }: { initialSection?: "about" | "skill" }) {
  const [activeSection, setActiveSection] = useState(initialSection);

  function toggleSection(section: "about" | "skill"): void {
    setActiveSection(section);
  }

  const { width } = useScreenSize();

  return (
    <main className="about-workspace">
      {/* Editor tab / title strip */}
      <div className="block md:hidden px-3 py-2">
        <div className="flex items-center gap-2 w-fit bg-[#ffffff] dark:bg-[#2a2a2a]">
          <button
            className={`px-3 py-2 rounded-sm ${activeSection === "about" ? "bg-[#007ACC] dark:bg-[#9FCAFF] text-[#ffffff] dark:text-[#003258]" : "bg-[#ffffff] dark:bg-[#2a2a2a] text-[#333333] dark:text-[#ffffff]"}`}
            onClick={() => toggleSection("about")}
          >
            About.ts
          </button>
          <button
            className={`px-3 py-2 rounded-sm ${activeSection === "skill" ? "bg-[#007ACC] dark:bg-[#9FCAFF] text-[#ffffff] dark:text-[#003258]" : "bg-[#ffffff] dark:bg-[#2a2a2a] text-[#333333] dark:text-[#ffffff]"}`}
            onClick={() => toggleSection("skill")}
          >
            Skill.json
          </button>
        </div>
      </div>
      <div className="workspace-content flex px-3 bg-[#f5f5f5] dark:bg-[#1B1B1C]">
        <div className="code-gutter flex-none py-3 flex flex-col gap-1.5 pr-3 border-r border-[#333333] dark:border-[#e5e2e1]">
          {Array.from({ length: 50 }, (_, index) => (
            <span
              className="text-[0.75rem] text-[#333333] dark:text-[#8A919D]"
              key={index}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          ))}
        </div>
        {/* LEFT: Profile and experience */}

        {width <= 768 ? (
          <>
            {activeSection === "about" ? (
              <section
                className="flex-2 flex flex-col"
                aria-label="Professional profile"
              >
                <header className="workspace-titlebar bg-[#f5f5f5] dark:bg-[#1B1B1C] px-3 py-2">
                  <h2 className="text-[#333333] dark:text-[#e5e2e1] text-[1rem] font-medium flex items-center gap-2">
                    <img src={tsIcn} alt="icon" /> about.ts
                  </h2>
                </header>
                <div className="flex flex-row flex-1 px-3 gap-3 bg-[#ffffff] dark:bg-[#1B1B1C]">
                  <div className="profile-code py-3">
                    <div className="profile-card bg-[#F8F9FA] dark:bg-[#1b1b1ccc] p-3 rounded-sm border border-[#E1E4E8] dark:border-[#1b1b1c] ">
                      <div className="code-comment text-[#008000] dark:text-[#8A919D]">
                        {"/*"}
                      </div>
                      <div className="flex items-center flex-wrap gap-3 my-2">
                        <div className="profile-card__avatar">
                          <div className="profile-card__avatar-placeholder">
                            <Code2 size={30} />
                          </div>
                          <span className="profile-card__online" />
                        </div>
                        <div className="profile-card__info">
                          <div className="profile-card__name flex items-center gap-1">
                            <span className="text-[#16825D] dark:text-[#F4B1EE] text-[0.75rem] font-normal">
                              ＊ Developer:
                            </span>
                            <strong className="text-[#1e1e1e] dark:text-[#e5e2e1] text-[1.125rem] font-semibold leading-none">
                              Alex Morgan
                            </strong>
                          </div>

                          <p className="text-[#007acc] dark:text-[#9FCAFF] leading-none">
                            Frontend Developer | React &amp; Angular
                          </p>
                          <p className="text-[#007acc] dark:text-[#9FCAFF] leading-none">
                            Web Accessibility &amp; Agile
                          </p>

                          <div className="profile-card__status text-[#16825D] dark:text-[#84CFFF] text-[0.75rem] font-normal leading-none">
                            <span className="profile-card__status-dot" />
                            Active Status: Open for opportunities
                          </div>
                        </div>
                      </div>
                      <div className="code-comment text-[#008000] dark:text-[#8A919D]">
                        {"*/"}
                      </div>
                    </div>

                    <p className="code-comment text-[#008000] dark:text-[#8A919D] code-section-comment">
                      // Core engineer profile definition
                    </p>

                    <p className="code-line text-[#267F99] dark:text-[#9FCAFF]">
                      <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">
                        import type
                      </span>{" "}
                      {"{ StaffEngineer }"}{" "}
                      <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">
                        from
                      </span>{" "}
                      <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                        "'@core/architecture'"
                      </span>
                      ;
                    </p>

                    <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                      <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">
                        export const
                      </span>{" "}
                      <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                        profile
                      </span>
                      :{" "}
                      <span className="syntax-yellow text-[#267f99] dark:text-[#9FCAFF]">
                        DeveloperProfile
                      </span>{" "}
                      = {"{"}
                    </p>

                    <div className="code-indent">
                      <p className="code-line">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          role
                        </span>
                        :{" "}
                        <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                          'Frontend Developer'
                        </span>
                        ,
                      </p>

                      <p className="code-line">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          experience
                        </span>
                        :{" "}
                        <span className="syntax-orange text-[#098658] dark:text-[#F4B1EE]">
                          5
                        </span>
                        ,
                        <span className="code-comment text-[#008000] dark:text-[#8A919D]">
                          {" "}
                          // years
                        </span>
                      </p>

                      <p className="code-line">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          company
                        </span>
                        :{" "}
                        <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                          'Tech Company'
                        </span>
                        ,
                      </p>

                      <p className="code-line">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          focus
                        </span>
                        :{" "}
                        <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                          'Accessible, scalable UI'
                        </span>
                        ,
                      </p>

                      <p className="code-comment text-[#008000] dark:text-[#8A919D] code-line--spaced">
                        // Engineering philosophy
                      </p>

                      <p className="code-line">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          summary
                        </span>
                        :{" "}
                        <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                          `
                        </span>
                      </p>

                      <div className="profile-bio bg-[#F8F9FA] dark:bg-[#20202080] border-l-4 border-[#007ACC] dark:border-[#20202080] px-3 py-2 rounded-sm text-[#444444] dark:text-[#E5E2E1] text-[0.75rem] my-1">
                        Frontend Developer with 5 years of experience building
                        scalable, accessible enterprise applications using
                        React, Angular, TypeScript, and Node.js. Focused on
                        reusable UI architecture, performance, and web
                        accessibility.
                      </div>

                      <p className="code-line">
                        <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                          `
                        </span>
                        ,
                      </p>

                      <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          coreStrengths
                        </span>
                        : [
                      </p>

                      <div className="strength-grid grid grid-cols-1 md:grid-cols-2 gap-1 px-1">
                        {coreStrengths.map((strength, index) => (
                          <div
                            className="strength-item flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#20202080] px-2 py-2 rounded-sm text-[#1e1e1e] dark:text-[#E5E2E1] text-[0.75rem]"
                            key={strength}
                          >
                            {index % 2 === 0 ? (
                              <Braces size={12} />
                            ) : (
                              <Zap size={12} />
                            )}
                            {strength}
                          </div>
                        ))}
                      </div>

                      <p className="code-line text-[#1e1e1e] dark:text-[#e5e2e1]">
                        ],
                      </p>

                      <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          achievements
                        </span>
                        : {"{"}
                      </p>

                      <div className="code-indent">
                        <p className="code-line">
                          <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                            uiDefectsReduced
                          </span>
                          :{" "}
                          <span className="syntax-orange text-[#098658] dark:text-[#F4B1EE]">
                            30
                          </span>
                          ,
                          <span className="code-comment text-[#008000] dark:text-[#8A919D]">
                            {" "}
                            // %
                          </span>
                        </p>
                        <p className="code-line">
                          <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                            performanceImproved
                          </span>
                          :{" "}
                          <span className="syntax-orange text-[#098658] dark:text-[#F4B1EE]">
                            35
                          </span>
                          ,
                          <span className="code-comment text-[#008000] dark:text-[#8A919D]">
                            {" "}
                            // %
                          </span>
                        </p>
                        <p className="code-line">
                          <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                            award
                          </span>
                          :{" "}
                          <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                            'Engineering Excellence Award'
                          </span>
                        </p>
                      </div>

                      <p className="code-line text-[#1e1e1e] dark:text-[#e5e2e1]">
                        {"},"}
                      </p>

                      <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          socialLinks
                        </span>
                        : {"{"}
                      </p>

                      <div className="social-links">
                        <a
                          href="https://github.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#007acc] dark:text-[#84CFFF] text-[0.75rem]"
                        >
                          <Code2
                            size={12}
                            className="stroke-[#007acc] dark:stroke-[#84CFFF]"
                          />{" "}
                          GitHub Profile ↗
                        </a>

                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#007acc] dark:text-[#84CFFF] text-[0.75rem]"
                        >
                          <ExternalLink
                            size={12}
                            className="stroke-[#007acc] dark:stroke-[#84CFFF]"
                          />{" "}
                          LinkedIn ↗
                        </a>

                        <a
                          href="mailto:developer@example.com"
                          className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#1e1e1e] dark:text-[#E5E2E1] text-[0.75rem]"
                        >
                          <Mail
                            size={12}
                            className="stroke-[#1e1e1e] dark:stroke-[#E5E2E1]"
                          />{" "}
                          Email Contact
                        </a>

                        <a
                          href="/resume.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#D32F2F] dark:text-[#F4B1EE] text-[0.75rem]"
                        >
                          <ArrowDownToLine
                            size={12}
                            className="stroke-[#D32F2F] dark:stroke-[#F4B1EE]"
                          />{" "}
                          Resume.pdf
                        </a>
                      </div>

                      <p className="code-line text-[#1e1e1e] dark:text-[#e5e2e1]">
                        {"}"}
                      </p>
                    </div>

                    <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                      {"};"}
                    </p>

                    <p className="code-line text-[#267F99] dark:text-[#9FCAFF]">
                      <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">
                        export default
                      </span>{" "}
                      <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                        profile
                      </span>
                      ;
                    </p>
                  </div>
                </div>
              </section>
            ) : (
              ""
            )}

            {activeSection === "skill" ? (
              <section
                className="flex flex-col flex-1"
                aria-label="Technical skills"
              >
                <header className="workspace-titlebar px-3 py-2">
                  <h2 className="text-[#333333] dark:text-[#e5e2e1] text-[1rem] font-medium flex items-center gap-2">
                    <img src={skillIcn} alt="icon" /> skills.json
                  </h2>
                </header>

                <div className="flex flex-col flex-1 gap-2.5 p-3">
                  {skillGroups.map((group) => {
                    const Icon = group.icon;

                    return (
                      <article
                        className="skill-group border border-[#E2E8F0] dark:border-[#202020] bg-[#ffffff] dark:bg-[#202020] flex flex-col gap-2.5 rounded-sm p-3"
                        key={group.id}
                      >
                        <header className="skill-group__header flex flex-wrap gap-x-2 gap-y-1 items-center justify-between">
                          <div className="text-[#0451A5] dark:text-[#e5e2e1] text-[0.875rem] font-semibold flex gap-1 items-center">
                            <Icon size={13} />"{group.title}"
                          </div>

                          <span className="text-[#333333] dark:text-[#e5e2e1] text-[0.75rem] font-normal ms-auto!">
                            {group.count}
                          </span>
                        </header>

                        <div className="skill-group__items flex flex-wrap gap-1.5">
                          {group.skills.map(([name, level]) => (
                            <div
                              className="skill-chip border border-[#E2E8F0] dark:border-[#2a2a2a] bg-[#F8F9FA] dark:bg-[#2a2a2a] px-2 py-1 flex items-center gap-1 rounded-sm"
                              key={name}
                            >
                              <span className="text-[.75rem] font-normal text-[#1e1e1e] dark:text-[#e5e2e1]">
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
              </section>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <section
              className="flex-2 flex flex-col"
              aria-label="Professional profile"
            >
              <header className="workspace-titlebar bg-[#f5f5f5] dark:bg-[#1B1B1C] px-3 py-2">
                <h2 className="text-[#333333] dark:text-[#e5e2e1] text-[1rem] font-medium flex items-center gap-2">
                  <img src={tsIcn} alt="icon" /> about.ts
                </h2>
              </header>
              <div className="flex flex-row flex-1 px-3 gap-3 bg-[#ffffff] dark:bg-[#1B1B1C]">
                <div className="profile-code py-3">
                  <div className="profile-card bg-[#F8F9FA] dark:bg-[#1b1b1ccc] p-3 rounded-sm border border-[#E1E4E8] dark:border-[#1b1b1c] ">
                    <div className="code-comment text-[#008000] dark:text-[#8A919D]">
                      {"/*"}
                    </div>
                    <div className="flex items-center flex-wrap gap-3 my-2">
                      <div className="profile-card__avatar">
                        <div className="profile-card__avatar-placeholder">
                          <Code2 size={30} />
                        </div>
                        <span className="profile-card__online" />
                      </div>
                      <div className="profile-card__info">
                        <div className="profile-card__name flex items-center gap-1">
                          <span className="text-[#16825D] dark:text-[#F4B1EE] text-[0.75rem] font-normal">
                            ＊ Developer:
                          </span>
                          <strong className="text-[#1e1e1e] dark:text-[#e5e2e1] text-[1.125rem] font-semibold leading-none">
                            Alex Morgan
                          </strong>
                        </div>

                        <p className="text-[#007acc] dark:text-[#9FCAFF] leading-none">
                          Frontend Developer | React &amp; Angular
                        </p>
                        <p className="text-[#007acc] dark:text-[#9FCAFF] leading-none">
                          Web Accessibility &amp; Agile
                        </p>

                        <div className="profile-card__status text-[#16825D] dark:text-[#84CFFF] text-[0.75rem] font-normal leading-none">
                          <span className="profile-card__status-dot" />
                          Active Status: Open for opportunities
                        </div>
                      </div>
                    </div>
                    <div className="code-comment text-[#008000] dark:text-[#8A919D]">
                      {"*/"}
                    </div>
                  </div>

                  <p className="code-comment text-[#008000] dark:text-[#8A919D] code-section-comment">
                    // Core engineer profile definition
                  </p>

                  <p className="code-line text-[#267F99] dark:text-[#9FCAFF]">
                    <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">
                      import type
                    </span>{" "}
                    {"{ StaffEngineer }"}{" "}
                    <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">
                      from
                    </span>{" "}
                    <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                      "'@core/architecture'"
                    </span>
                    ;
                  </p>

                  <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                    <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">
                      export const
                    </span>{" "}
                    <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                      profile
                    </span>
                    :{" "}
                    <span className="syntax-yellow text-[#267f99] dark:text-[#9FCAFF]">
                      DeveloperProfile
                    </span>{" "}
                    = {"{"}
                  </p>

                  <div className="code-indent">
                    <p className="code-line">
                      <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                        role
                      </span>
                      :{" "}
                      <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                        'Frontend Developer'
                      </span>
                      ,
                    </p>

                    <p className="code-line">
                      <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                        experience
                      </span>
                      :{" "}
                      <span className="syntax-orange text-[#098658] dark:text-[#F4B1EE]">
                        5
                      </span>
                      ,
                      <span className="code-comment text-[#008000] dark:text-[#8A919D]">
                        {" "}
                        // years
                      </span>
                    </p>

                    <p className="code-line">
                      <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                        company
                      </span>
                      :{" "}
                      <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                        'Tech Company'
                      </span>
                      ,
                    </p>

                    <p className="code-line">
                      <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                        focus
                      </span>
                      :{" "}
                      <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                        'Accessible, scalable UI'
                      </span>
                      ,
                    </p>

                    <p className="code-comment text-[#008000] dark:text-[#8A919D] code-line--spaced">
                      // Engineering philosophy
                    </p>

                    <p className="code-line">
                      <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                        summary
                      </span>
                      :{" "}
                      <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                        `
                      </span>
                    </p>

                    <div className="profile-bio bg-[#F8F9FA] dark:bg-[#20202080] border-l-4 border-[#007ACC] dark:border-[#20202080] px-3 py-2 rounded-sm text-[#444444] dark:text-[#E5E2E1] text-[0.75rem] my-1">
                      Frontend Developer with 5 years of experience building
                      scalable, accessible enterprise applications using React,
                      Angular, TypeScript, and Node.js. Focused on reusable UI
                      architecture, performance, and web accessibility.
                    </div>

                    <p className="code-line">
                      <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                        `
                      </span>
                      ,
                    </p>

                    <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                      <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                        coreStrengths
                      </span>
                      : [
                    </p>

                    <div className="strength-grid grid grid-cols-1 md:grid-cols-2 gap-1 px-1">
                      {coreStrengths.map((strength, index) => (
                        <div
                          className="strength-item flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#20202080] px-2 py-2 rounded-sm text-[#1e1e1e] dark:text-[#E5E2E1] text-[0.75rem]"
                          key={strength}
                        >
                          {index % 2 === 0 ? (
                            <Braces size={12} />
                          ) : (
                            <Zap size={12} />
                          )}
                          {strength}
                        </div>
                      ))}
                    </div>

                    <p className="code-line text-[#1e1e1e] dark:text-[#e5e2e1]">
                      ],
                    </p>

                    <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                      <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                        achievements
                      </span>
                      : {"{"}
                    </p>

                    <div className="code-indent">
                      <p className="code-line">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          uiDefectsReduced
                        </span>
                        :{" "}
                        <span className="syntax-orange text-[#098658] dark:text-[#F4B1EE]">
                          30
                        </span>
                        ,
                        <span className="code-comment text-[#008000] dark:text-[#8A919D]">
                          {" "}
                          // %
                        </span>
                      </p>
                      <p className="code-line">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          performanceImproved
                        </span>
                        :{" "}
                        <span className="syntax-orange text-[#098658] dark:text-[#F4B1EE]">
                          35
                        </span>
                        ,
                        <span className="code-comment text-[#008000] dark:text-[#8A919D]">
                          {" "}
                          // %
                        </span>
                      </p>
                      <p className="code-line">
                        <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                          award
                        </span>
                        :{" "}
                        <span className="syntax-green text-[#A31515] dark:text-[#84CFFF]">
                          'Engineering Excellence Award'
                        </span>
                      </p>
                    </div>

                    <p className="code-line text-[#1e1e1e] dark:text-[#e5e2e1]">
                      {"},"}
                    </p>

                    <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                      <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                        socialLinks
                      </span>
                      : {"{"}
                    </p>

                    <div className="social-links">
                      <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#007acc] dark:text-[#84CFFF] text-[0.75rem]"
                      >
                        <Code2
                          size={12}
                          className="stroke-[#007acc] dark:stroke-[#84CFFF]"
                        />{" "}
                        GitHub Profile ↗
                      </a>

                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#007acc] dark:text-[#84CFFF] text-[0.75rem]"
                      >
                        <ExternalLink
                          size={12}
                          className="stroke-[#007acc] dark:stroke-[#84CFFF]"
                        />{" "}
                        LinkedIn ↗
                      </a>

                      <a
                        href="mailto:developer@example.com"
                        className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#1e1e1e] dark:text-[#E5E2E1] text-[0.75rem]"
                      >
                        <Mail
                          size={12}
                          className="stroke-[#1e1e1e] dark:stroke-[#E5E2E1]"
                        />{" "}
                        Email Contact
                      </a>

                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 bg-[#ffffff] dark:bg-[#20202080] border border-[#E2E8F0] dark:border-[#202020] px-2 py-2 rounded-sm text-[#D32F2F] dark:text-[#F4B1EE] text-[0.75rem]"
                      >
                        <ArrowDownToLine
                          size={12}
                          className="stroke-[#D32F2F] dark:stroke-[#F4B1EE]"
                        />{" "}
                        Resume.pdf
                      </a>
                    </div>

                    <p className="code-line text-[#1e1e1e] dark:text-[#e5e2e1]">
                      {"}"}
                    </p>
                  </div>

                  <p className="code-line code-line--spaced text-[#1e1e1e] dark:text-[#e5e2e1]">
                    {"};"}
                  </p>

                  <p className="code-line text-[#267F99] dark:text-[#9FCAFF]">
                    <span className="syntax-purple text-[#0000ff] dark:text-[#F4B1EE]">
                      export default
                    </span>{" "}
                    <span className="syntax-blue text-[#001080] dark:text-[#84cfff]">
                      profile
                    </span>
                    ;
                  </p>
                </div>
              </div>
            </section>
            <section
              className="flex flex-col flex-1"
              aria-label="Technical skills"
            >
              <header className="workspace-titlebar px-3 py-2">
                <h2 className="text-[#333333] dark:text-[#e5e2e1] text-[1rem] font-medium flex items-center gap-2">
                  <img src={skillIcn} alt="icon" /> skills.json
                </h2>
              </header>

              <div className="flex flex-col flex-1 gap-2.5 p-3">
                {skillGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <article
                      className="skill-group border border-[#E2E8F0] dark:border-[#202020] bg-[#ffffff] dark:bg-[#202020] flex flex-col gap-2.5 rounded-sm p-3"
                      key={group.id}
                    >
                      <header className="skill-group__header flex flex-wrap gap-x-2 gap-y-1 items-center justify-between">
                        <div className="text-[#0451A5] dark:text-[#e5e2e1] text-[0.875rem] font-semibold flex gap-1 items-center">
                          <Icon size={13} />"{group.title}"
                        </div>

                        <span className="text-[#333333] dark:text-[#e5e2e1] text-[0.75rem] font-normal ms-auto!">
                          {group.count}
                        </span>
                      </header>

                      <div className="skill-group__items flex flex-wrap gap-1.5">
                        {group.skills.map(([name, level]) => (
                          <div
                            className="skill-chip border border-[#E2E8F0] dark:border-[#2a2a2a] bg-[#F8F9FA] dark:bg-[#2a2a2a] px-2 py-1 flex items-center gap-1 rounded-sm"
                            key={name}
                          >
                            <span className="text-[.75rem] font-normal text-[#1e1e1e] dark:text-[#e5e2e1]">
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
            </section>
          </>
        )}
      </div>
    </main>
  );
}
