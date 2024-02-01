import styles from './App.module.scss';
import Clicker from './components/Clicker/Clicker';
import clsx from 'clsx';

function App() {
  return (
    <div className={clsx(styles.app)}>
      <main className={clsx(styles.main)}>
        <Clicker />
      </main>
    </div>
  );
}

export default App;
