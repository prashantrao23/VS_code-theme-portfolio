import "./ProjectCard.scss"

function ProjectCard({ title, description, url, image }) {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={image} alt={`Screenshot of ${title}`} />
      </div>
      <div className="project-card__content">
        <h2 className="project-card__title">{title}</h2>
        <p className="project-card__description">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          Visit Site
        </a>
      </div>
    </div>
  )
}

export default ProjectCard