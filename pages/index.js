import Home from './views/home';
import getData from './views/home/data'

export default function Index({ playlists }) {
	return <Home playlists={playlists} />;
}

export async function getStaticProps() {
  return getData('api/en/all-videos');
}
