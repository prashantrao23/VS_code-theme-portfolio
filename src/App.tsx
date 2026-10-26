import "./App.scss";
import "./tailwind.css";
import Header from "./components/Header";
import ToggleSidebar from "./components/ToggleSidebar";
import ContentSection from "./components/ContentSection";
import { ArrowRight, Check, Code2, Terminal } from "lucide-react";
import { useTheme } from "./components/themeContext";

function App() {
  const { theme, toggleSidebar } = useTheme();
  
  return (
    <div className={`flex flex-col h-full relative ${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <main className="portfolio__main flex flex-row overflow-hidden">
        <nav className={`portfolio__nav md:static! h-full w-fit hidden md:flex bg-[#F3F3F3] dark:bg-[#0E0E0E] border-r border-[#D4D4D4] dark:border-[#404751] ${toggleSidebar? 'absolute top-0 left-0 z-1 flex!':''}`}>
          <ToggleSidebar />
        </nav>
        <ContentSection />
      </main>
      {/* Terminal-style contact bar */}
      <footer className="workspace-terminal flex flex-col md:flex-row items-center gap-x-3 gap-y-2 justify-between px-3 py-2 bg-[#F3F3F3] dark:bg-[#2a2a2a] border-t border-[#e0e0e0] dark:border-[#2a2a2a]">
        <div className="workspace-terminal__prompt mr-auto! w-full flex flex-wrap items-center gap-2 text-[#007ACC] dark:text-[#84CFFF] text-[0.75rem]">
          <span className="flex items-center gap-2">
            <Terminal
              size={13}
              className="stroke-[#007ACC] dark:stroke-[#84CFFF]"
            />
            prashant@portfolio:
          </span>
          <span className="terminal-command text-[#1e1e1e] dark:text-[#E5E2E1] bg-transparent dark:bg-[#202020] rounded-sm px-2 py-1 scrollbar-none overflow-x-auto">
            <span className="whitespace-nowrap">
            $ ./initiate-collaboration.sh --target=contact.ts
            </span>
          </span>
        </div>

        {/* <div className="workspace-terminal__message ms-auto! text-[#616161] dark:text-[#C0C7D3] text-[0.75rem]">
          Want to build accessible, scalable web experiences?
        </div> */}

        <a
          href="mailto:prashantrao744@gmail.com"
          className="flex items-center justify-center max-w-80 w-full md:w-fit gap-1 rounded-sm px-2 py-1 bg-[#007ACC] text-[#ffffff] text-[0.75rem] font-medium whitespace-nowrap"
        >
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
    </div>
  );
}

export default App;
