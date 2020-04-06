import fetch from 'node-fetch';
import Button from './components/button';
import Card from './components/card';
import Footer from './components/footer';
import Header from './components/header';

export default function Index({ playlists }) {
	return (
		<div className="container mx-auto p-4">
			<Header />
			<div className="container mx-auto">
				{playlists &&
					playlists.items &&
					playlists.items.map((element, index) => {
						return (
							<div className="container my-10">
								<div className="text-center text-black py-2 px-4 text-2xl">
									{element.title}
								</div>
								<div className="py-2 border-grey-500 rounded-lg">
									{element.videos.map(video => (
										<Card {...video} />
									))}
								</div>
							</div>
						);
					})}
			</div>
			<Footer />
		</div>
	);
}

export async function getStaticProps({ req }) {
	// Call an external API endpoint to get posts.
	const baseUrl =
		process.env.APP_ENVIRONMENT === 'development'
			? 'http://localhost:3001'
			: 'https://frontend-topics-v2.now.sh';

	const res = await fetch(`${baseUrl}/api/all-videos-en`);

	const playlists = await res.json();

	console.log({ playlists });
	return {
		props: {
			playlists,
		},
	};
}
