import styles from './Clicker.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import useApi from '@src/hooks/useApi/useApi';
import ApiResponse from './ApiResponse/ApiResponse';
import { Button, Alert } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

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
      setCount(0);
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
        loadingPosition="end"
        endIcon={<SendIcon/>}
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
        isLoading={isLoading}
      />
    </section>
  );
};

export default Clicker;
