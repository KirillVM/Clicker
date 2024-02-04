import useFibCalculation from '@hooks/useFibCalculation/useFibCalculation';
import styles from './Fibonacci.module.scss';
import { clsx } from 'clsx';
import FibonacciSumOfEvenItems from './FibonacciEven/FibonacciEven';
import FibonacciMemoList from './FibonacciMemo/FibonacciMemo';

const Fibonacci = (): JSX.Element => {
  const {
    memoMap,
    calculationResult,
    calculationResultWithMaxItemValue,
    setN,
    n,
    setItemMaxValue,
  } = useFibCalculation();

  return (
    <section className={clsx(styles.section)}>
      <FibonacciSumOfEvenItems
        calculationResultWithMaxItemValue={calculationResultWithMaxItemValue}
        setItemMaxValue={setItemMaxValue}
      />
      <FibonacciMemoList
        calculationResult={calculationResult}
        memoMap={memoMap}
        setN={setN}
        n={n}
      />
    </section>
  );
};

export default Fibonacci;
