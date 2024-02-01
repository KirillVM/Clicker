import styles from './Clicker.module.scss';
import useApi from '@src/hooks/useApi';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import clsx from 'clsx';

const url = 'https://lk.zont-online.ru/api/button_count';
const initOptions: RequestInit = {
  headers: {
    'X-ZONT-Client': 'mezentsevkv@gmail.com',
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify({ count: 1 }),
};

const Clicker = (): JSX.Element => {
  const [options, setOptions] = useState<RequestInit>(initOptions);
  const { isLoading, error, responseData } = useApi(url, options);
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

  return (
    <section className={clsx(styles.section)}>
      <LoadingButton
        variant="contained"
        onClick={handleButtonClick}
        size="large"
        loading={isLoading}
        color="secondary"
        loadingPosition="start"
      >
        Кликнуть
      </LoadingButton>
      <Alert severity="info">Кликнули {count} раз</Alert>
      {!error && (
        <Alert severity="warning">
          По версии сервера: {responseData?.count}
        </Alert>
      )}
      {error && <Alert severity="error">{error.message}</Alert>}
    </section>
  );
};

export default Clicker;
