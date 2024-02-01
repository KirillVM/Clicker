import styles from './Loader.module.scss';

function Loader() {
  return (
    <div data-testid="loader-container" className={styles.loader_container}>
      <span data-testid="loader" className={styles.loader}></span>
    </div>
  );
}

export default Loader;
