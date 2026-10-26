import React, { useState } from "react";
import explorerIcnDark from "../assets/explorer-icn-dark.svg";
import extensionIcnDark from "../assets/extension-icn-dark.svg";
import searchIcnDark from "../assets/search-icn-dark.svg";
import bugIcnDark from "../assets/bug-icn-dark.svg";
import readmeIcnDark from "../assets/readme-icn-dark.svg";
import readmeIcn from "../assets/readme-icn.svg";
import tsIcn from "../assets/ts-icn.svg";
import tsIcnDark from "../assets/ts-icn-dark.svg";
import skillIcn from "../assets/skill-icn.svg";
import skillIcnDark from "../assets/skill-icn-dark.svg";
import foldericn from "../assets/folder-icn.svg";
import pdfIcn from "../assets/pdf-icn.svg";
import pdfIcnDark from "../assets/pdf-icn-dark.svg";
import { X } from 'lucide-react';

import "./ToggleSidebar.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTheme } from "./themeContext";

function ToggleSidebar() {
  const [toggle, setToggle] = useState(true);
  const { toggleExplorer } = useTheme();
  

  function toggleSideBar() {
    setToggle(!toggle);
  }
  return (
    <>
      <div className="toggle-sidebar pt-1! w-12 h-full flex flex-col gap-1 bg-[#2C2C2C] dark:bg-[#0E0E0E] border-r border-[#1E1E1E] dark:border-[#404751]">
        <button
          className="toggle-sidebar__button w-full h-11.5 flex items-center justify-center selected"
          onClick={toggleSideBar}
        >
          <img src={explorerIcnDark} alt="Explorer Icon" />
        </button>
        <button className="toggle-sidebar__button w-full h-11.5 flex items-center justify-center">
          <img src={extensionIcnDark} alt="Extension Icon" />
        </button>
        <button className="toggle-sidebar__button w-full h-11.5 flex items-center justify-center">
          <img src={searchIcnDark} alt="Search Icon" />
        </button>
        <button className="toggle-sidebar__button w-full h-11.5 flex items-center justify-center">
          <img src={bugIcnDark} alt="Bug Icon" />
        </button>
      </div>
      {toggle ? (
        <div className="toggle-sidebar__content h-full">
          <div className="content-title flex justify-between items-center text-[#6F6F6F] dark:text-[#C0C7D3]">Explorer
            <button className="w-4 h-4 flex items-center justify-center md:hidden" onClick={toggleExplorer}><X className="text-[#DC2626] dark:text-[#FFB4AB]"/></button>
          </div>
          <Accordion
            multiple
            className="max-w-lg px-2!"
            defaultValue={["portfolio"]}
          >
            <AccordionItem value="portfolio" className="border-0!">
              <AccordionTrigger className="accordion-trigger text-[#6F6F6F] dark:text-[#C0C7D3]">
                PRASHANT - PORTFOLIO
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <ul className="accordion-content__list pt-0.5">
                  <li className="text-[#444444] dark:text-[#C0C7D3] hover:bg-[#E4E6F1] dark:hover:bg-[#2e2e2e]">
                    <img
                      src={tsIcn}
                      alt="About Icon"
                      className="inline-block"
                    />
                    about.ts
                  </li>
                  <li className="text-[#444444] dark:text-[#C0C7D3] hover:bg-[#E4E6F1] dark:hover:bg-[#2e2e2e]">
                    <img
                      src={tsIcn}
                      alt="Contact Icon"
                      className="inline-block"
                    />
                    contact.ts
                  </li>
                  <AccordionItem value="projects" className="border-0!">
                    <AccordionTrigger className="accordion-trigger text-[#6F6F6F] dark:text-[#C0C7D3] hover:bg-[#E4E6F1] dark:hover:bg-[#2e2e2e]">
                      <span className="flex items-center gap-2">
                        <img src={foldericn} alt="Folder Icon" />
                        Projects
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content">
                      <ul className="accordion-content__list__projects pt-0.5">
                        <li className="text-[#444444] dark:text-[#C0C7D3] hover:bg-[#E4E6F1] dark:hover:bg-[#2e2e2e]">
                          <img
                            src={tsIcn}
                            alt="About Icon"
                            className="inline-block"
                          />
                          all-projects.ts
                        </li>
                        <li className="text-[#444444] dark:text-[#C0C7D3] hover:bg-[#E4E6F1] dark:hover:bg-[#2e2e2e]">
                          <img
                            src={tsIcn}
                            alt="About Icon"
                            className="inline-block"
                          />
                          project-one.ts
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  {/* <li className="text-[#444444] dark:text-[#2A2A2A]">
                    <img
                      src={skillIcn}
                      alt="Skills Icon"
                      className="inline-block"
                    />
                    skills.json
                  </li> */}

                  <li className="text-[#444444] dark:text-[#C0C7D3] hover:bg-[#E4E6F1] dark:hover:bg-[#2e2e2e]">
                    <img src={pdfIcn} alt="PDF Icon" className="inline-block" />
                    resume.pdf
                  </li>
                  <li className="text-[#444444] dark:text-[#C0C7D3] hover:bg-[#E4E6F1] dark:hover:bg-[#2e2e2e]">
                    <img
                      src={readmeIcn}
                      alt="README Icon"
                      className="inline-block"
                    />
                    README.md
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ToggleSidebar;
