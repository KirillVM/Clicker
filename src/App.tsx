import styles from './App.module.scss';
import Clicker from './components/Clicker/Clicker';
import clsx from 'clsx';
import Fibonacci from './components/Fibonacci/Fibonacci';

function App() {
  return (
    <div className={clsx(styles.app)}>
      <main className={clsx(styles.main)}>
        <Clicker />
        <Fibonacci />
      </main>
    </div>
  );
}

export default App;
