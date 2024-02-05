import React, { useCallback, useEffect, useReducer, useState } from 'react';

interface FibAction {
  type: string;
  n: number;
  memoMap: Map<number, number>;
}

interface FibState {
  calculationResult: number;
}

const initialState: FibState = {
  calculationResult: 0,
};

const fibReducer = (state: FibState, action: FibAction): FibState => {
  switch (action.type) {
    case 'set_calcualtion_result': {
      const calculationResult = Array.from(action.memoMap)
        .filter((item) => item[1] % 2 === 0 && item[0] <= action.n)
        .reduce((acc, item) => acc + item[1], 0);
      return {
        calculationResult: calculationResult,
      };
    }
    default: {
      return state;
    }
  }
};

const useFibCalculation = () => {
  const [memoMap, setMemoMap] = useState<Map<number, number>>(
    new Map([
      [0, 0],
      [1, 1],
    ])
  );
  const [fibState, dispatch] = useReducer<React.Reducer<FibState, FibAction>>(
    fibReducer,
    initialState
  );
  const [n, setN] = useState<number>(0);
  const [itemMaxValue, setItemMaxValue] = useState<number>(0);
  const [
    calculationResultWithMaxItemValue,
    setCalculationResultWithMaxItemValue,
  ] = useState<number>(0);

  const getFibNumber = useCallback(
    (n: number): number => {
      if (memoMap.has(n)) {
        return memoMap.get(n) as number;
      }
      if (n <= 1) {
        return n;
      }
      setMemoMap(memoMap.set(n, getFibNumber(n - 1) + getFibNumber(n - 2)));
      return memoMap.get(n) as number;
    },
    [memoMap]
  );

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
    dispatch({ type: 'set_calcualtion_result', n: n, memoMap: memoMap });
  }, [n, getFibNumber, memoMap]);

  useEffect(() => {
    setCalculationResultWithMaxItemValue(getSumOfEvenFibNumber(itemMaxValue));
  }, [itemMaxValue]);

  return {
    memoMap,
    calculationResult: fibState.calculationResult,
    calculationResultWithMaxItemValue,
    setN,
    n,
    setItemMaxValue,
  } as const;
};

export default useFibCalculation;
