import PropTypes from 'prop-types';
import styles from './CreateProject.module.css';

function CreateProject({ onOpen, projects, onSelect }) {
  return (
    <div className={styles.side}>
      <h1>YOUR PROJECTS</h1>
      <button
        onClick={() => {
          onOpen(true);
        }}>
        + Add Project
      </button>

      <div className={styles.projects}>
        {projects.map((project) => (
          <p key={project.name} onClick={() => onSelect(project)}>
            {project.name}
          </p>
        ))}
      </div>
    </div>
  );
}

CreateProject.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
};

export default CreateProject;
