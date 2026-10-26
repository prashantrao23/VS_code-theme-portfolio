import React from "react";
import "./ContentSection.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import About from "./about";
import Readme from "./readme";
import ContactWorkspace from "./contact";
import { X } from "lucide-react";

function ContentSection() {
  return (
    <div className="content-section flex-1 bg-[#ffffff] dark:bg-[#131313] overflow-hidden">
      <Tabs defaultValue="account" className="gap-0 overflow-hidden h-full">
        <TabsList className="w-full overflow-x-auto scrollbar-none p-0 justify-start bg-[#ececec] dark:bg-[#0E0E0E] border-b border-[#D4D4D4] dark:border-[#404751] h-9 rounded-none">
          <TabsTrigger value="account" className="tab-button bg-transparent data-active:bg-[#ffffff] dark:data-active:bg-[#2e2e2e] text-[#666666] data-active:text-[#333333] dark:text-[#C0C7D3] dark:data-active:text-[#E5E2E1] font-normal data-active:font-medium border-0 data-active:border-t-2! data-active:border-[#007acc]!">
            all-projects.ts
            <button className="close-button"><X/></button>
          </TabsTrigger>
          <TabsTrigger value="password" className="tab-button bg-transparent data-active:bg-[#ffffff] dark:data-active:bg-[#2e2e2e] text-[#666666] data-active:text-[#333333] dark:text-[#C0C7D3] dark:data-active:text-[#E5E2E1] font-normal data-active:font-medium border-0 data-active:border-t-2! data-active:border-[#007acc]!">
            project.ts
            <button className="close-button"><X/></button>
          </TabsTrigger>
          <TabsTrigger value="about" className="tab-button bg-transparent data-active:bg-[#ffffff] dark:data-active:bg-[#2e2e2e] text-[#666666] data-active:text-[#333333] dark:text-[#C0C7D3] dark:data-active:text-[#E5E2E1] font-normal data-active:font-medium border-0 data-active:border-t-2! data-active:border-[#007acc]!">
            about.ts
            <button className="close-button"><X/></button>
          </TabsTrigger>
          <TabsTrigger value="readme" className="tab-button bg-transparent data-active:bg-[#ffffff] dark:data-active:bg-[#2e2e2e] text-[#666666] data-active:text-[#333333] dark:text-[#C0C7D3] dark:data-active:text-[#E5E2E1] font-normal data-active:font-medium border-0 data-active:border-t-2! data-active:border-[#007acc]!">
            readme.ts
            <button className="close-button"><X/></button>
          </TabsTrigger>
          <TabsTrigger value="contact" className="tab-button bg-transparent data-active:bg-[#ffffff] dark:data-active:bg-[#2e2e2e] text-[#666666] data-active:text-[#333333] dark:text-[#C0C7D3] dark:data-active:text-[#E5E2E1] font-normal data-active:font-medium border-0 data-active:border-t-2! data-active:border-[#007acc]!">
            contact.ts
            <button className="close-button"><X/></button>
          </TabsTrigger>
        </TabsList>
        <div className="breadcrump bg-[#ffffff] dark:bg-[#131313] border-b border-[#E5E5E5] dark:border-[#404751] flex items-center gap-1.5 px-3 py-1 text-[0.75rem] text-[#616161] dark:text-[#C0C7D3]">
            <span>Prashant-Portfolio</span>
            <span>&gt;</span>
            <span>Projects</span>
            <span>&gt;</span>
            <span className="active text-[#24292F] dark:text-[#E5E2E1] font-medium">all-projects.ts</span>
        </div>
        <TabsContent value="account" className="overflow-auto">
          <Projects />
        </TabsContent>
        <TabsContent value="password" className="overflow-auto">Projects</TabsContent>
        <TabsContent value="about" className="overflow-auto">
          <About />
        </TabsContent>
        <TabsContent value="readme" className="overflow-auto">
          <Readme/>
        </TabsContent>
        <TabsContent value="contact" className="overflow-auto">
          <ContactWorkspace/>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ContentSection;
