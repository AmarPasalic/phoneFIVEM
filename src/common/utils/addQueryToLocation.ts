import qs from 'qs';
import parsePath from 'parse-path';

interface IRouterLocation {
  pathname: string;
  search: string;
}

export const addQueryToLocation = (
  { pathname = '', search = '' }: IRouterLocation,
  key = '',
  value = '',
) => {
  try {
    const { query } = parsePath(pathname + search);
    return `${pathname}?${qs.stringify({
      ...query,
      [key]: value,
    })}`;
  } catch (error) {
    console.warn('Failed to parse URL for adding query:', pathname + search, error);
    // Return a simple fallback
    return `${pathname}?${key}=${value}`;
  }
};
