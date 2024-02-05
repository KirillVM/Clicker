import styles from './ApiResponse.module.scss';
import Alert from '@mui/material/Alert';
import { ApiResponseProps } from './ApiResponse.interface';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const ApiResponse = (apiResponseProps: ApiResponseProps): JSX.Element => {
  const { data, error, isLoading } = apiResponseProps;
  const [responseMessage, setResponseMessage] =
    useState<string>('Кликните на кнопку');
  

  useEffect(() => {
      if(!isLoading) {
        !error && data && setResponseMessage(`По версии сервера: ${data?.count.toString()}`);
        error && setResponseMessage(error.toString());
      }
  }, [error, data, isLoading]);

  return (
    <>
      <Alert
        severity={error ? 'error' : 'warning'}
        className={clsx(styles.alert)}
      >
        {responseMessage}
      </Alert>
    </>
  );
};

export default ApiResponse;
