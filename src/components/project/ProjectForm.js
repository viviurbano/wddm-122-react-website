import { useState, useEffect } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css';

function ProjectForm({ handleSubmit, btnTxt, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/viviurbano/wddm-122-react-website/categories',
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }
    )
      .then(resp => resp.json())
      .then(data => {
        setCategories(data);
      })
      .catch(err => console.log(err));
  }, []);

  const submit = e => {
    e.preventDefault();
    // handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
    console.log(project);
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Project name"
        name="name"
        placeholder="Enter the project name"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        text="Project budget"
        name="budget"
        placeholder="Insert the total budget"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <Select
        name="category_id"
        text="Select the category"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnTxt} />
    </form>
  );
}

export default ProjectForm;
