import { useNavigate } from 'react-router-dom';
import styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';

function NewProject() {
  const history = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch('http://192.168.2.11:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        //redirect
        history.push('/projects', { message: 'Projeto criado com sucesso' });
      })
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Create Project</h1>
      <p>Create your project and add services</p>
      <ProjectForm handleSubmit={createPost} btnTxt="Criar Projeto" />
    </div>
  );
}

export default NewProject;
