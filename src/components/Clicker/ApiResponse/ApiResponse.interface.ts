import { ClickerResponse } from '@src/hooks/useApi/Api.interface';

export interface ApiResponseProps {
  data: ClickerResponse | null;
  error: Error | null;
  count: number;
  isLoading: boolean;
}
