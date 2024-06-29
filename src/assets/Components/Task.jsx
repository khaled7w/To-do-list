import PropTypes from 'prop-types';
import styles from './Task.module.css';

function Task({ task, onClearTask }) {
  return (
    <div className={styles.newTasks}>
      <div className={styles.task}>
        <p>{task}</p>
        <button onClick={() => onClearTask(task)}>Clear</button>
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.string,
  onClearTask: PropTypes.func,
};

export default Task;
