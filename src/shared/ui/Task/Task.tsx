import { TaskType } from '../../types/task.type';
import './Task.css';

interface Props {
  task: TaskType;
  onDelete: () => void;
}

const Task = ({ task, onDelete }: Props) => {
  return (
    <div className="task-container">
      <div className="task">
        <span className="task-text">{task.text}</span>
        <button className="task-button" onClick={() => onDelete()}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Task;
