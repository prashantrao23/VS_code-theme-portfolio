import { useState } from 'react'
import './App.scss'
import ProjectCard from './components/ProjectCard'
import projects from './data/projects'

function App() {

  return (
    <div className="portfolio">
      {/* Page header with title and tagline */}
      <header className="portfolio__header">
        <h1>My Portfolio</h1>
        <p>A collection of my web projects</p>
      </header>
      {/* Responsive card grid */}
      <main className="portfolio__grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            url={project.url}
            image={project.image}
          />
        ))}
      </main>
    </div>
  )
}

export default App
