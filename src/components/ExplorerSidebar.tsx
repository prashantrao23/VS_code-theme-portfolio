import { useState } from "react";
import explorerIcnDark from "../assets/explorer-icn-dark.svg";
import extensionIcnDark from "../assets/extension-icn-dark.svg";
import searchIcnDark from "../assets/search-icn-dark.svg";
import bugIcnDark from "../assets/bug-icn-dark.svg";
import readmeIcn from "../assets/readme-icn.svg";
import tsIcn from "../assets/ts-icn.svg";
import skillIcn from "../assets/skill-icn.svg";
import foldericn from "../assets/folder-icn.svg";
import pdfIcn from "../assets/pdf-icn.svg";
import { X } from "lucide-react";
import "./ExplorerSidebar.scss";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTheme } from "./themeContext";
import { useScreenSize } from "./useScreenSize";
import { editorFiles, useEditorTabs } from "./hooks//useEditorTabs";

function ToggleSidebar() {
  const [explorerOpen, setExplorerOpen] = useState(true);
  const { toggleExplorer } = useTheme();
  const { openFile, activeFileId } = useEditorTabs();
  const { width } = useScreenSize();

  const openById = (id: string) => {
    const file = editorFiles.find((item) => item.id === id);
    if (!file) return;

    openFile(file);
    if (width > 0 && width <= 768) toggleExplorer();
  };

  const fileRow = (id: string, icon: string, label?: string, nested = false) => {
    const file = editorFiles.find((item) => item.id === id);
    if (!file) return null;

    const isActive = activeFileId === id;

    return (
      <li key={id}>
        <button
          type="button"
          onClick={() => openById(id)}
          aria-current={isActive ? "page" : undefined}
          className={`flex w-full items-center gap-2 py-1 pr-2 text-left text-xs transition-colors ${
            nested ? "pl-7" : "pl-2"
          } ${
            isActive
              ? "bg-[#DCEBFA] text-[#1E1E1E] dark:bg-[#2e2e2e] dark:text-[#E5E2E1]"
              : "text-[#444444] hover:bg-[#E4E6F1] dark:text-[#C0C7D3] dark:hover:bg-[#2e2e2e]"
          }`}
        >
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            className="inline-block h-4 w-4 shrink-0 object-contain"
          />
          <span>{label ?? file.name}</span>
        </button>
      </li>
    );
  };

  return (
    <>
      <div className="toggle-sidebar pt-1! flex h-full w-12 flex-col gap-1 border-r border-[#1E1E1E] bg-[#2C2C2C] dark:border-[#404751] dark:bg-[#0E0E0E]">
        <button
          type="button"
          aria-label="Explorer"
          aria-pressed={explorerOpen}
          className={`toggle-sidebar__button flex h-11.5 w-full items-center justify-center ${
            explorerOpen ? "selected" : ""
          }`}
          onClick={() => setExplorerOpen((value) => !value)}
        >
          <img src={explorerIcnDark} alt="Explorer Icon" />
        </button>
        <button
          type="button"
          aria-label="Extensions"
          className="toggle-sidebar__button flex h-11.5 w-full items-center justify-center"
          title="Extensions (coming soon)"
        >
          <img src={extensionIcnDark} alt="Extension Icon" />
        </button>
        <button
          type="button"
          aria-label="Search"
          className="toggle-sidebar__button flex h-11.5 w-full items-center justify-center"
          title="Use the search field in the header"
        >
          <img src={searchIcnDark} alt="Search Icon" />
        </button>
        <button
          type="button"
          aria-label="Run and debug"
          className="toggle-sidebar__button flex h-11.5 w-full items-center justify-center"
          title="Run and debug (coming soon)"
        >
          <img src={bugIcnDark} alt="Bug Icon" />
        </button>
      </div>

      {explorerOpen && (
        <div className="toggle-sidebar__content h-full w-33.5 lg:w-62 transition-all ease-in-out overflow-x-auto">
          <div className="content-title flex items-center justify-between text-[#6F6F6F] dark:text-[#C0C7D3]">
            Explorer
            <button
              type="button"
              aria-label="Close explorer"
              className="flex h-4 w-4 items-center justify-center md:hidden"
              onClick={toggleExplorer}
            >
              <X className="text-[#DC2626] dark:text-[#FFB4AB]" size={14} />
            </button>
          </div>

          {/* Keep the existing shadcn Accordion so its styling and behavior remain consistent. */}
          <Accordion
            multiple
            className="max-w-lg px-2! w-fit"
            defaultValue={["portfolio", "projects"]}
          >
            <AccordionItem value="portfolio" className="border-0!">
              <AccordionTrigger className="accordion-trigger text-[#6F6F6F] dark:text-[#C0C7D3]">
                PRASHANT - PORTFOLIO
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <ul className="accordion-content__list pt-0.5">
                  {fileRow("about", tsIcn)}
                  {fileRow("skills", skillIcn)}
                  {fileRow("contact", tsIcn)}
                  {fileRow("projects", tsIcn)}

                    {/* <Accordion
                      multiple
                      defaultValue={["projects"]}
                      className="border-0"
                    >
                      <AccordionItem value="projects" className="border-0!">
                        <AccordionTrigger className="accordion-trigger text-[#6F6F6F] dark:text-[#C0C7D3] hover:bg-[#E4E6F1] dark:hover:bg-[#2e2e2e]">
                          <span className="flex items-center gap-2">
                            <img src={foldericn} alt="Folder Icon" />
                            Projects
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="accordion-content">
                          <ul className="accordion-content__list__projects pt-0.5">
                            {fileRow("all-projects", tsIcn, "all-projects.ts", true)}
                            {fileRow("project-one", tsIcn, "project-one.ts", true)}
                            {fileRow("project", tsIcn, "project.ts", true)}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion> */}
                  {fileRow("readme", readmeIcn, "README.md")}
                  {fileRow("resume", pdfIcn)}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </>
  );
}

export default ToggleSidebar;
