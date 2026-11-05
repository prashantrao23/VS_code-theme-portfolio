import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import "./Header.scss";
import codeIcn from "../assets/code-icn.svg";
import sunIcn from "../assets/sun-icn.svg";
import moonIcn from "../assets/moon-icn.svg";
import { Menu, Search } from "lucide-react";
import { useTheme } from "./themeContext";
import { editorFiles, useEditorTabs } from "./hooks/useEditorTabs";

function Header() {
  const { theme, toggleTheme, toggleExplorer } = useTheme();
  const { openFile } = useEditorTabs();
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return editorFiles.filter((file) => `${file.name} ${file.path} ${file.language}`.toLowerCase().includes(normalized)).slice(0, 5);
  }, [query]);

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (matches[0]) {
      openFile(matches[0]);
      setQuery("");
    }
  };

  return (
    <div className="header relative z-20 grid grid-cols-2 items-center gap-x-1 gap-y-2 border-b border-[#D4D4D4] bg-[#DDDDDD] px-3 py-2 md:grid-cols-3 dark:border-[#404751] dark:bg-[#0E0E0E]">
      <div className="workspace order-1 col-span-2 flex items-center gap-4 md:col-span-1">
        <div className="workspace__icon hidden gap-1.5 md:flex"><span className="rounded-full bg-[#ED6A5E] dark:bg-[#93000A]"></span><span className="rounded-full bg-[#F5BF4F] dark:bg-[#019AD6]"></span><span className="rounded-full bg-[#62C554] dark:bg-[#007ACC]"></span></div>
        <button type="button" aria-label="Toggle explorer" className="flex h-6 w-6 items-center justify-center bg-transparent dark:text-[#C0C7D3] md:hidden" onClick={toggleExplorer}><Menu /></button>
        <div className="workspace__name flex items-center gap-2 text-[#333333] dark:text-[#C0C7D3]"><img src={codeIcn} alt="" />DevFolio — Developer Portfolio</div>
      </div>

      <form onSubmit={submitSearch} className="searchbar relative order-3 col-span-3 flex justify-center md:order-2 md:col-span-1">
        <div className="relative flex items-center w-full max-w-md min-w-8.4375rem rounded-sm bg-[#ffffff] shadow-md dark:bg-[#2A2A2A] px-3 py-1">
          <Search size={14} className="pointer-events-none text-[#777777] dark:text-[#8A919D]" />
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Escape") setQuery(""); }} placeholder="Search files... (press Enter)" aria-label="Search portfolio files" className="searchbar__input flex-1 outline-none text-[#333333]  dark:text-[#C0C7D3]" />
          {query.trim() && <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-sm border border-[#D4D4D4] bg-white shadow-lg dark:border-[#404751] dark:bg-[#1B1B1C]">
            {matches.length ? matches.map((file) => <button key={file.id} type="button" onClick={() => { openFile(file); setQuery(""); }} className="flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-xs text-[#333333] hover:bg-[#E4E6F1] dark:text-[#E5E2E1] dark:hover:bg-[#2e2e2e]"><span>{file.name}</span><span className="text-[#777777] dark:text-[#8A919D]">{file.path}</span></button>) : <p className="px-3 py-2 text-xs text-[#777777] dark:text-[#8A919D]">No matching files</p>}
          </div>}
        </div>
      </form>

      <div className="profile-section order-2 col-span-1 flex items-center justify-end gap-4 md:order-3">
        <div className="icons-section flex justify-end gap-1"><button type="button" className="theme-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}><img src={theme === "light" ? sunIcn : moonIcn} alt="Theme" /></button></div>
      </div>
    </div>
  );
}

export default Header;
