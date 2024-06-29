import styles from './Main.module.css';
import PropTypes from 'prop-types';
import SelectedProject from './SelectedProject';

function Main({
  onOpen,
  selectedProject,
  onAddTasks,
  onDeleteProject,
  onClearTask,
  tasks,
}) {
  if (selectedProject === null) {
    return (
      <div className={styles.main}>
        <img src="Standard.png" />
        <h3>No Project Selected</h3>
        <p>Select a project or get started with a new one </p>
        <button onClick={() => onOpen(true)}>Create new project</button>
      </div>
    );
  } else {
    return (
      <SelectedProject
        selectedProject={selectedProject}
        onAddTasks={onAddTasks}
        onDeleteProject={onDeleteProject}
        onClearTask={onClearTask}
        tasks={tasks}
      />
    );
  }
}

Main.propTypes = {
  onOpen: PropTypes.func.isRequired,
  selectedProject: PropTypes.object,
  onAddTasks: PropTypes.func,
  onDeleteProject: PropTypes.func,
  onClearTask: PropTypes.func,
  tasks: PropTypes.array,
};
export default Main;
