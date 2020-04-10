import fetch from 'node-fetch';
import Home from './views/home/';

export default function Index({ playlists }) {
	return <Home playlists={playlists} />;
}

export async function getStaticProps({ req }) {
	// Call an external API endpoint to get posts.
  console.log(process);
	const baseUrl =
		process.env.APP_ENVIRONMENT === 'development'
			? 'http://localhost:3001'
			: process.env.PROD_URL;

	const res = await fetch(`${baseUrl}/api/en/all-videos`);

	const playlists = await res.json();

	return {
		props: {
			playlists,
		},
	};
}
