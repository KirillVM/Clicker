import styles from './FibonacciMemo.module.scss';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import { ChangeEvent, MouseEvent, useState } from 'react';

interface FibonacciMemoListProps {
  calculationResult: number;
  memoMap: Map<number, number>;
  setN: React.Dispatch<React.SetStateAction<number>>;
  n: number;
}

const FibonacciMemoList = (
  fibonacciMemoListProps: FibonacciMemoListProps
): JSX.Element => {
  const { calculationResult, memoMap, setN, n } = fibonacciMemoListProps;
  const [memoInputValue, setMemoInputValue] = useState<number>(0);

  const handleMemoInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    console.log(typeof e.target.value);
    setMemoInputValue(parseInt(e.target.value, 10));
  };

  const handleMemoButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    memoInputValue && setN(memoInputValue);
  };

  return (
    <div className={clsx(styles.memo__wrapper)}>
      <h1>List of all numbers</h1>
      <div className={clsx(styles.form)}>
        <label htmlFor="memo" className={clsx(styles.memo__input)}>
          <p>Enter N (With Memo)</p>
          <input id="memo" type="text" onChange={handleMemoInputChange}></input>
        </label>
        <Button
          variant="contained"
          onClick={handleMemoButtonClick}
          className={clsx(styles.memo__button)}
        >
          Calculate
        </Button>
      </div>
      <h2 className={clsx(styles.result)}>
        {`Sum of even: `}
        <span>{calculationResult}</span>
      </h2>
      List of results:
      <div className={clsx(styles['memo-list'])}>
        {Array.from(memoMap)
          .slice(0, n - 1)
          .map((item) => (
            <span key={item[0]} className={clsx(styles['memo-list__item'])}>
              {`${item[0]}: ${item[1]}`}
            </span>
          ))}
      </div>
    </div>
  );
};

export default FibonacciMemoList;
