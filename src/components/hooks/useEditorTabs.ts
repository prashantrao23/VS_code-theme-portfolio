import { createContext, createElement, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type EditorFile = {
  id: string;
  name: string;
  path: string;
  language: string;
};

/** One canonical file registry used by the Explorer, search, quick links and editor. */
export const editorFiles: EditorFile[] = [
  { id: "readme", name: "README.md", path: "README.md", language: "markdown" },
  { id: "about", name: "about.ts", path: "about.ts", language: "typescript" },
  // { id: "skills", name: "skills.json", path: "skills.json", language: "json" },
  { id: "contact", name: "contact.ts", path: "contact.ts", language: "typescript" },
  // { id: "all-projects", name: "all-projects.ts", path: "Projects/all-projects.ts", language: "typescript" },
  // { id: "project-one", name: "project-one.ts", path: "Projects/project-one.ts", language: "typescript" },
  { id: "projects", name: "projects.ts", path: "projects.ts", language: "typescript" },
  { id: "resume", name: "resume.pdf", path: "resume.pdf", language: "pdf" },
];

type EditorTabsContextValue = {
  openTabs: EditorFile[];
  activeFile: EditorFile | null;
  activeFileId: string;
  openFile: (fileOrId: EditorFile | string) => void;
  closeFile: (fileId: string) => void;
};

const EditorTabsContext = createContext<EditorTabsContextValue | null>(null);

export function EditorTabsProvider({ children, initialFile = "all-projects" }: { children: ReactNode; initialFile?: string }) {
  const initial = editorFiles.find((file) => file.id === initialFile) ?? editorFiles[0];
  const [openTabs, setOpenTabs] = useState<EditorFile[]>([initial]);
  const [activeFileId, setActiveFileId] = useState(initial.id);

  const openFile = useCallback((fileOrId: EditorFile | string) => {
    const file = typeof fileOrId === "string"
      ? editorFiles.find((candidate) => candidate.id === fileOrId)
      : fileOrId;
    if (!file) return;

    setOpenTabs((tabs) => tabs.some((tab) => tab.id === file.id) ? tabs : [...tabs, file]);
    setActiveFileId(file.id);
  }, []);

  const closeFile = useCallback((fileId: string) => {
    const closingIndex = openTabs.findIndex((tab) => tab.id === fileId);
    if (closingIndex < 0) return;

    const nextTabs = openTabs.filter((tab) => tab.id !== fileId);
    setOpenTabs(nextTabs);
    if (activeFileId === fileId) {
      // Prefer the tab to the left; when closing the first tab, select the new first tab.
      const nextIndex = closingIndex === 0 ? 0 : Math.min(closingIndex - 1, nextTabs.length - 1);
      setActiveFileId(nextTabs[nextIndex]?.id ?? "");
    }
  }, [openTabs, activeFileId]);

  const activeFile = openTabs.find((tab) => tab.id === activeFileId) ?? null;
  const value = useMemo(() => ({ openTabs, activeFile, activeFileId, openFile, closeFile }), [openTabs, activeFile, activeFileId, openFile, closeFile]);

  return createElement(EditorTabsContext.Provider, { value }, children);
}

export function useEditorTabs() {
  const context = useContext(EditorTabsContext);
  if (!context) throw new Error("useEditorTabs must be used within EditorTabsProvider");
  return context;
}
