import fetch from 'node-fetch';
import Home from '../views/home/';

export default function Index({ playlists }) {
	return <Home playlists={playlists} />;
}

export async function getStaticProps({ req }) {
	// Call an external API endpoint to get posts.
	const baseUrl =
		process.env.APP_ENVIRONMENT === 'development'
			? 'http://localhost:3001'
			: 'https://frontend-topics-v2.now.sh';

	const res = await fetch(`${baseUrl}/api/es/all-videos`);

	const playlists = await res.json();

	console.log({ playlists });
	return {
		props: {
			playlists,
		},
	};
}
