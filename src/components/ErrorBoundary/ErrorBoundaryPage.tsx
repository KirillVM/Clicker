import Button from '@mui/material/Button';
import styles from './ErrorBoundaryPage.module.scss';
import clsx from 'clsx';

const ErrorBoundaryPage = (): JSX.Element => {
  const onClickHandler = () => {
    window.location.reload();
  };

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.container)}>
        <h1>Oops!Somthig went wrong.</h1>
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={onClickHandler}
        >
          Reload page
        </Button>
      </div>
    </div>
  );
};

export default ErrorBoundaryPage;
