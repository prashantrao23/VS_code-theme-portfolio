import React from "react";
import "./ContentSection.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import About from "./about";

function ContentSection() {
  return (
    <div className="content-section flex-1 bg-[#ffffff] dark:bg-[#131313]">
      <Tabs defaultValue="account" className="gap-0">
        <TabsList className="w-full justify-start bg-[#ececec] dark:bg-[#0E0E0E] border-b border-[#D4D4D4] dark:border-[#404751] h-9 rounded-none">
          <TabsTrigger value="account" className="tab-button">
            all-projects.ts
          </TabsTrigger>
          <TabsTrigger value="password" className="tab-button">
            project.ts
          </TabsTrigger>
          <TabsTrigger value="about" className="tab-button">
            about.ts
          </TabsTrigger>
        </TabsList>
        <div className="breadcrump">
            <span>Prashant-Portfolio</span>
            <span>&gt;</span>
            <span>Projects</span>
            <span>&gt;</span>
            <span className="active">all-projects.ts</span>
        </div>
        <TabsContent value="account">
          <Projects />
        </TabsContent>
        <TabsContent value="password">Projects</TabsContent>
        <TabsContent value="about">
          <About />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ContentSection;
