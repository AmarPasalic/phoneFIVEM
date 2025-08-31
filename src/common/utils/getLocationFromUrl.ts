import parsePath from 'parse-path';

interface GetLocationFromUrlValue {
  pathname: string;
  search: string;
}

export const getLocationFromUrl = (url: string): GetLocationFromUrlValue => {
  try {
    const { href, search } = parsePath(url);
    const searchStr = '?' + (search || '');
    return { pathname: href, search: searchStr };
  } catch (error) {
    console.warn('Failed to parse URL:', url, error);
    // Return safe fallback values
    return { pathname: url || '/', search: '' };
  }
};
