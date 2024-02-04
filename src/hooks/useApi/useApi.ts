import { ClickerResponse, ClickerResponseWithError } from './Api.interface';
import { useEffect, useState } from 'react';

const useApi = (url: string | URL | Request, options?: RequestInit) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [responseData, setResponseData] = useState<ClickerResponse | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const data: ClickerResponse | ClickerResponseWithError =
          await response.json();
        if (!response.ok) {
          console.log(data);
          throw Error((data as ClickerResponseWithError)['error_ui']);
        } else {
          setError(null);
        }
        setResponseData(data as ClickerResponse);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { isLoading, error, responseData, setResponseData } as const;
};

export default useApi;
