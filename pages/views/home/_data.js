import fetch from 'node-fetch';

export default async (path) => {
  const baseUrl =
    process.env.APP_ENVIRONMENT === 'development'
      ? 'http://localhost:3001'
      : process.env.PROD_URL;

  const res = await fetch(`${baseUrl}/${path}`);

  const playlists = await res.json();

  return {
    props: {
      playlists
    }
  };
}
