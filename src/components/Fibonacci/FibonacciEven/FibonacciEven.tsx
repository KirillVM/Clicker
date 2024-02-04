import styles from './FibonacciEven.module.scss';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import { ChangeEvent, MouseEvent, useState } from 'react';

interface FibonacciSumOfEvenItemsProps {
  calculationResultWithMaxItemValue: number;
  setItemMaxValue: React.Dispatch<React.SetStateAction<number>>;
}

const FibonacciSumOfEvenItems = (
  fibonacciSumOfEvenItems: FibonacciSumOfEvenItemsProps
): JSX.Element => {
  const { calculationResultWithMaxItemValue, setItemMaxValue } =
    fibonacciSumOfEvenItems;
  const [evenInputValue, setEvenInputValue] = useState<number>(0);

  const handleEvenInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setEvenInputValue(parseInt(e.target.value, 10));
  };

  const handleEvenButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    evenInputValue && setItemMaxValue(evenInputValue);
  };

  return (
    <div className={clsx(styles.even__wrapper)}>
      <h1>Sum of even calculation</h1>
      <div className={clsx(styles.form)}>
        <label htmlFor="even" className={clsx(styles.even__input)}>
          <p>Enter FibItemMaxValue</p>
          <input id="even" type="text" onChange={handleEvenInputChange}></input>
        </label>
        <Button
          variant="contained"
          color="success"
          onClick={handleEvenButtonClick}
          className={clsx(styles.even__button)}
        >
          Calculate
        </Button>
      </div>
      <h2 className={clsx(styles.result)}>
        {`ResultBest: `}
        <span>{calculationResultWithMaxItemValue}</span>
      </h2>
    </div>
  );
};

export default FibonacciSumOfEvenItems;
