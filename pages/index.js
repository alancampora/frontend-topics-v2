import { useEffect } from 'react';
import fetch from 'node-fetch';
import Card from './components/card';
import Layout from './components/layout';

export default function Index({ playlists }) {
	return (
		<Layout>
			<div className="container mx-auto p-4">
				<div className="container mx-auto">
					{playlists &&
						playlists.items &&
						playlists.items.map((element, index) => {
							return (
								<div className="container my-10">
									<div className="flex items-center">
										<div
											className="
                      h-p 
                      border-t-2 
                      border-purple-200
                      w-full
                    "
										></div>
										<div
											className="
                      flex-shrink-0
                      text-center 
                      text-purple-900
                      py-2 
                      px-4 
                      text-xl
                      rounded-md
                      bg-purple-200
                    "
										>
											{element.title}
										</div>
										<div
											className="
                      h-p 
                      border-t-2 
                      border-purple-200
                      w-full
                    "
										></div>
									</div>
									<div
										className="
                    py-2 
                    border-grey-500 
                    rounded-lg
                  "
									>
										{element.videos.map(video => (
											<Card {...video} />
										))}
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</Layout>
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
