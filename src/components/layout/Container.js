import styles from './Container.module.css';

function Container(props) {
  return (
    // <div className={`container ${props.min_height}`}>{props.children}</div>
    // <div className={styles.container}>{props.children}</div>
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}

export default Container;
