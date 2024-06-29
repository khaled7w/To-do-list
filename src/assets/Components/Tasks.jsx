import { useState } from 'react';
import styles from './Tasks.module.css';
import PropTypes from 'prop-types';
import Task from './Task';

function Tasks({ onAddTasks, onClearTask, tasks }) {
  const [newTask, setNewTask] = useState('');

  function handleAddTask(task) {
    onAddTasks(task);
    setNewTask('');
  }

  return (
    <div className={styles.tasks}>
      <h1>Tasks</h1>
      <div className={styles.addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={() => handleAddTask(newTask)}>Add Task</button>
      </div>
      {tasks.length > 0 ? (
        <div className={styles.allTasks}>
          {tasks.map((task) => (
            <Task task={task} onClearTask={onClearTask} key={task} />
          ))}
        </div>
      ) : (
        <h3>No Tasks added to these project yet</h3>
      )}
    </div>
  );
}

Tasks.propTypes = {
  onAddTasks: PropTypes.func,
  onClearTask: PropTypes.func,
  tasks: PropTypes.array,
};

export default Tasks;
