import styles from './Clicker.module.scss';
import useApi from '@src/hooks/useApi/useApi';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import clsx from 'clsx';
import ApiResponse from './ApiResponse/ApiResponse';
import { Button } from '@mui/material';

const url = 'https://lk.zont-online.ru/api/button_count';
const initOptions: RequestInit = {
  headers: {
    'X-ZONT-Client': 'mezentsevkv@gmail.com',
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify({ count: 0 }),
};

const Clicker = (): JSX.Element => {
  const [options, setOptions] = useState<RequestInit>(initOptions);
  const { isLoading, error, responseData, setResponseData } = useApi(
    url,
    options
  );
  const [count, setCount] = useState<number>(0);
  const [timerId, setTimerId] = useState<number>(0);

  const handleButtonClick = () => {
    clearTimeout(timerId);
    const id: ReturnType<typeof setTimeout> = setTimeout(() => {
      setOptions({ ...options, body: JSON.stringify({ count: count + 1 }) });
    }, 1000);
    setTimerId(+id);
    setCount(count + 1);
  };

  const handleResetButtonClick = () => {
    setCount(0);
    setResponseData(null);
  };

  return (
    <section className={clsx(styles.section)}>
      <LoadingButton
        variant="contained"
        onClick={handleButtonClick}
        size="large"
        loading={isLoading}
        color="secondary"
        loadingPosition="start"
        className={clsx(styles.button)}
      >
        Кликнуть
      </LoadingButton>
      <Alert severity="info" className={clsx(styles.alert)}>
        Кликнули {count} раз
      </Alert>
      <ApiResponse
        data={responseData}
        error={error}
        count={count}
        isLoading={isLoading}
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleResetButtonClick}
        color="warning"
        className={clsx(styles.button)}
      >
        Reset
      </Button>
    </section>
  );
};

export default Clicker;
