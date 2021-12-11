import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggleReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggleReminder(task.id)}>
      <h3>
        <p>{task.text}</p>
        <FaTimes style={{ color: 'red' }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
