import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Welcome to <span>Costs Manager</span>
      </h1>
      <p>Start to manage budget from all of your projects right now</p>
      <LinkButton to="/newproject" text="Create new project right now">
        Create project!
      </LinkButton>
      <img src={savings} alt="logo in svg" />
    </section>
  );
}

export default Home;
