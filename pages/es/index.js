import fetch from 'node-fetch';
import Home from '../views/home/';
import getData from '../views/home/data';

export default function Index({ playlists }) {
  return <Home playlists={playlists} />;
}

export async function getStaticProps({ req }) {
  return getData('api/es/all-videos');
}
