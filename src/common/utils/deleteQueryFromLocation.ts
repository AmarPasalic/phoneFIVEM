import qs from 'qs';
import parsePath from 'parse-path';

interface IRouterLocation {
  pathname: string;
  search: any;
}

export const deleteQueryFromLocation = (
  location: Record<string, unknown> & IRouterLocation,
  key = '',
) => {
  try {
    const { query } = parsePath(location.pathname + location.search);
    return `${location.pathname}/?${qs.stringify({
      ...query,
      [key]: undefined,
    })}`;
  } catch (error) {
    console.warn('Failed to parse URL for deleting query:', location.pathname + location.search, error);
    // Return a simple fallback - just return the pathname
    return location.pathname;
  }
};
