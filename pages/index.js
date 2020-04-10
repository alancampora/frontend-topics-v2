import fetch from 'node-fetch';
import Home from './views/home/';

export default function Index({ playlists }) {
	return <Home playlists={playlists} />;
}

export async function getStaticProps(context) {
  console.log({context});
  console.log(process.env);
	// Call an external API endpoint to get posts.
	const baseUrl =
		process.env.APP_ENVIRONMENT === 'development'
			? 'http://localhost:3001'
			: process.env.APP_PROD_URL;

	const res = await fetch(`${baseUrl}/api/en/all-videos`);

	const playlists = await res.json();

	console.log({ playlists });
	return {
		props: {
			playlists,
		},
	};
}
