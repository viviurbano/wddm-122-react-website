import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const remove = e => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Budget</span> ${budget}
      </p>
      <p>
        <span></span>
        {category}
      </p>
      <div>
        <p>Editat</p>
        <p>Remover</p>
      </div>
    </div>
  );
}

export default ProjectCard;
