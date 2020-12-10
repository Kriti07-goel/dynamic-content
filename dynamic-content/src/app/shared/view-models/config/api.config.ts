import { InjectionToken } from '@angular/core';

export const API_BASE_URL = new InjectionToken('API Base URL Injection Token');

export class ApiConfig {
  baseApiUri: string;
}
