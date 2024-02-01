import { useEffect, useState } from 'react';

interface ClickerResponse {
  count: number;
}

const useApi = (url: string | URL | Request, options?: RequestInit) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [responseData, setResponseData] = useState<ClickerResponse | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setResponseData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { isLoading, error, responseData } as const;
};

export default useApi;
