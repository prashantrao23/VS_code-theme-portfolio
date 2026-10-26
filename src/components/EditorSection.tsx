import { ChevronRight, FileJson, FileText, FileType, X } from "lucide-react";
import Projects from "./Projects";
import About from "./about";
import Readme from "./readme";
import ContactWorkspace from "./contact";
import { editorFiles, useEditorTabs } from "./hooks/useEditorTabs";
import "./EditorSection.scss";
import tsIcn from "../assets/ts-icn.svg";
import pdfIcn from "../assets/pdf-icn.svg"
import readmeIcn from "../assets/readme-icn.svg"

function FileIcon({ language }: { language: string }) {
  if (language === "json")
    return <FileJson size={14} className="shrink-0 text-[#C9A227]" />;
  if (language === "pdf")
    return <img src={pdfIcn} alt="PDF file icon"/>;
  if (language === "markdown")
    return <img src={readmeIcn} alt="PDF file icon"/>;
  return <img src={tsIcn} alt="TS file icon"/> ;
}

function ActiveEditor({ fileId }: { fileId: string }) {
  switch (fileId) {
    case "readme":
      return <Readme />;
    case "about":
      return <About />;
    case "skills":
      return <About initialSection="skill" />;
    case "contact":
      return <ContactWorkspace />;
    // case "all-projects":
    // case "project-one":
    case "projects":
      return <Projects />;
    case "resume":
      return (
        <div className="h-full min-h-0 bg-white dark:bg-[#131313]">
          <iframe
            title="Prashant Rao resume"
            src="./Prashant_Frontend_Developer_React.pdf"
            className="h-full min-h-[65vh] w-full border-0"
          />
        </div>
      );
    default:
      return (
        <div className="p-6 text-sm text-[#616161] dark:text-[#C0C7D3]">
          This file is not available yet.
        </div>
      );
  }
}

function ContentSection() {
  const { openTabs, activeFile, activeFileId, openFile, closeFile } =
    useEditorTabs();

  return (
    <div className="content-section flex min-w-0 flex-1 flex-col overflow-hidden bg-[#ffffff] dark:bg-[#131313]">
      <div
        role="tablist"
        aria-label="Open editor files"
        className="flex h-9 w-full shrink-0 overflow-x-auto scrollbar-none border-b border-[#D4D4D4] bg-[#ececec] p-0 dark:border-[#404751] dark:bg-[#0E0E0E]"
      >
        {openTabs.map((file) => {
          const active = file.id === activeFileId;
          return (
            <div key={file.id} role="presentation" className={`tab-button group flex h-full shrink-0 items-center border-r border-[#D4D4D4] dark:border-[#30363d] ${active ? "border-t-2 border-t-[#007acc] bg-white text-[#333333] dark:bg-[#2e2e2e] dark:text-[#E5E2E1]" : "bg-transparent text-[#666666] dark:text-[#C0C7D3]"}`}>
              <button type="button" role="tab" aria-selected={active} onClick={() => openFile(file)} className="flex pl-3 w-max h-full items-center gap-2 text-xs font-normal">
                <FileIcon language={file.language} />
                <span className="whitespace-nowrap">{file.name}</span>
              </button>
              <button type="button" aria-label={`Close ${file.name}`} title={`Close ${file.name}`} onClick={() => closeFile(file.id)} className="mr-2! flex h-5 w-5 items-center justify-center rounded-sm hover:bg-black/10 dark:hover:bg-white/10">
                <X size={13} />
              </button>
            </div>

          );
        })}
      </div>

      <div className="breadcrump flex shrink-0 items-center gap-1.5 border-b border-[#E5E5E5] bg-[#ffffff] px-3 py-1 text-[0.75rem] text-[#616161] dark:border-[#404751] dark:bg-[#131313] dark:text-[#C0C7D3]">
        {activeFile ? (
          <>
            <span>Prashant-Portfolio</span>
            <ChevronRight size={12} />
            {activeFile.path
              .split("/")
              .slice(0, -1)
              .map((part) => (
                <span key={part} className="flex items-center gap-1">
                  {part}
                  <ChevronRight size={12} />
                </span>
              ))}
            <span className="font-medium text-[#24292F] dark:text-[#E5E2E1]">
              {activeFile.name}
            </span>
          </>
        ) : (
          <span className="italic">No file open</span>
        )}
      </div>

      <div className="min-h-0 flex-1 overflow-auto">
        {activeFile ? (
          <ActiveEditor fileId={activeFile.id} />
        ) : (
          <div className="flex h-full min-h-64 flex-col items-center justify-center gap-2 text-sm text-[#777777] dark:text-[#8A919D]">
            <FileText size={32} strokeWidth={1.2} />
            <p>No editor is open.</p>
            <button
              type="button"
              onClick={() =>
                openFile(editorFiles.find((file) => file.id === "readme")!)
              }
              className="text-[#007ACC] hover:underline"
            >
              Open README.md
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentSection;
