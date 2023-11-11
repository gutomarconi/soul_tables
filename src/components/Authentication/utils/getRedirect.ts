import { CALLBACK_PATH } from '../constants';

export const FALLBACK_ROUTE = '/';

export const getRedirect = (path: string | null): string => {
  if (!path || path === CALLBACK_PATH) return FALLBACK_ROUTE;
  return path;
}
