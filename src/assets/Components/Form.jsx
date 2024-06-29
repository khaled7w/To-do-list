import PropTypes from 'prop-types';
import styles from './Form.module.css';

function Form({
  onOpen,
  name,
  setName,
  description,
  setDescription,
  date,
  setDate,
  onSave,
}) {
  const handleSave = (e) => {
    e.preventDefault();
    onSave();
  };

  function handleCancel(e) {
    e.preventDefault();
    onOpen(false);
  }

  return (
    <form className={styles.form}>
      <div className={styles.buttons}>
        <button onClick={handleCancel}>Cancel</button>
        <button className={styles.save} onClick={handleSave}>
          Save
        </button>
      </div>
      <label>TITLE</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>DESCRIPTION</label>
      <input
        type="text"
        className={styles.des}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Due DATE</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </form>
  );
}

Form.propTypes = {
  onOpen: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Form;
