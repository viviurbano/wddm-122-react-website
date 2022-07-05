import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
  const history = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch(
      'https://my-json-server.typicode.com/viviurbano/wddm-122-react-website/projects',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      }
    )
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        //redirect
        history.push('/projects', { message: 'Project created successfully' });
      })
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Create Project</h1>
      <p>Create your project and add services</p>
      <ProjectForm handleSubmit={createPost} btnTxt="Create Project" />
    </div>
  );
}

export default NewProject;
