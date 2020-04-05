import fetch from 'node-fetch';
import Button from './components/button';
import Card from './components/card';

export default function Index({ playlists }) {
	return (
		<div className="container mx-auto p-4">
			<div className="header p-4">
				<img
					className="h-50 w-50 rounded-full mx-auto border-solid border-2"
					src="/profile.jpeg"
				/>
				<h1 className="text-3xl text-center font-mono">Frontend Topics</h1>
			</div>
			<div className="container mx-auto">
				{playlists &&
					playlists.items.map((element, index) => {
						return (
							<div className="container my-10">
								<div className="text-center text-black py-2 px-4 text-2xl">
									{element.title}
								</div>
								<div className="py-2 border-grey-500 rounded-lg shadow-lg">
									{element.videos.map(video => (
										<Card {...video} />
									))}
								</div>
							</div>
						);
					})}
			</div>
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
