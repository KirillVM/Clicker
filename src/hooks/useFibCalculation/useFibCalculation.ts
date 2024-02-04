import { useEffect, useState } from 'react';

const useFibCalculation = () => {
  const [memoMap, setMemoMap] = useState<Map<number, number>>(new Map());
  const [calculationResult, setCalculationResult] = useState<number>(0);
  const [n, setN] = useState<number>(0);
  const [itemMaxValue, setItemMaxValue] = useState<number>(0);
  const [
    calculationResultWithMaxItemValue,
    setCalculationResultWithMaxItemValue,
  ] = useState<number>(0);

  function getFibNumber(n: number): number {
    if (memoMap.has(n)) {
      return memoMap.get(n) as number;
    }
    if (n <= 1) {
      return n;
    }
    setMemoMap(memoMap.set(n, getFibNumber(n - 1) + getFibNumber(n - 2)));
    return memoMap.get(n) as number;
  }

  function getSumOfEvenFibNumber(max: number): number {
    let res = 2;
    let evenFibPrevLeft = 0;
    let evenFibPrevRight = 2;
    if (max < 2) {
      return 0;
    }
    while (res <= max) {
      [evenFibPrevLeft, evenFibPrevRight] = [
        evenFibPrevRight,
        evenFibPrevLeft + 4 * evenFibPrevRight,
      ];
      res += evenFibPrevRight;
    }
    return res;
  }

  useEffect(() => {
    getFibNumber(n);
    setCalculationResult(
      Array.from(memoMap)
        .filter((item) => item[1] % 2 === 0 && item[0] <= n)
        .reduce((acc, item) => acc + item[1], 0)
    );
  }, [n]);

  useEffect(() => {
    setCalculationResultWithMaxItemValue(getSumOfEvenFibNumber(itemMaxValue));
  }, [itemMaxValue]);

  return {
    memoMap,
    calculationResult,
    calculationResultWithMaxItemValue,
    setN,
    n,
    setItemMaxValue,
  } as const;
};

export default useFibCalculation;
