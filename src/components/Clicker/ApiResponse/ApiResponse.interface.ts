import { ClickerResponse } from '@src/hooks/useApi/Api.interface';

export interface ApiResponseProps {
  data: ClickerResponse | null;
  error: Error | null;
  isLoading: boolean;
}
