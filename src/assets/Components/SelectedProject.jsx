import styles from './SelectedProject.module.css';
import PropTypes from 'prop-types';
import Tasks from './Tasks';

function SelectedProject({
  selectedProject,
  onAddTasks,
  onDeleteProject,
  tasks,
  onClearTask,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        <div className={styles.flex}>
          <h1>{selectedProject.name}</h1>
          <button onClick={() => onDeleteProject(selectedProject.name)}>
            Delete
          </button>
        </div>
        <p className={styles.date}>{selectedProject.date}</p>
        <p className={styles.description}>{selectedProject.description}</p>
      </div>
      <Tasks onAddTasks={onAddTasks} tasks={tasks} onClearTask={onClearTask} />
    </div>
  );
}

SelectedProject.propTypes = {
  selectedProject: PropTypes.object,
  onAddTasks: PropTypes.func,
  onDeleteProject: PropTypes.func,
  onClearTask: PropTypes.func,
  tasks: PropTypes.array,
};
export default SelectedProject;
