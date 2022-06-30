import { useState, useEffect } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css';

function ProjectForm({ btnForm }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://192.168.2.11:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(data => {
        setCategories(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insert the total budget"
      />
      <Select
        name="category_id"
        text="Select the category"
        options={categories}
      />
      <SubmitButton text={btnForm} />
    </form>
  );
}

export default ProjectForm;
