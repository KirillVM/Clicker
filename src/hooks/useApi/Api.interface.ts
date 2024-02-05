export interface ClickerResponse {
  count: number;
}

export interface ClickerResponseWithError {
  ok: boolean;
  error: string;
  error_ui: string;
}
