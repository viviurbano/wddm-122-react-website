import styles from './ProjectForm.module.css';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({ btnForm }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      ></Input>
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insert the total budget"
      ></Input>
      <Select name="category_id" text="Select the category"></Select>
      <SubmitButton text={btnForm}></SubmitButton>
    </form>
  );
}

export default ProjectForm;
