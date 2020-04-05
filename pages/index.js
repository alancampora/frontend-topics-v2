import fetch from 'node-fetch';
import Button from './components/button';
import Card from './components/card';

export default function Index() {
	return (
		<div className="p-4">
			<div className="header p-4">
				<img
					className="h-50 w-50 rounded-full mx-auto border-solid border-2"
					src="/profile.jpeg"
				/>
				<h1 className="text-2xl text-center font-mono">Frontend Topics</h1>
			</div>
			<div className="container mx-auto">
				{[
					{
						link: 'something',
						title: 'this is the title',
						description: 'this is the description',
						tag: 'React',
					},
				].map((element, index) => {
					return (
						<div key={index}>
							<Card {...element} />
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

	const posts = await res.json();
  
	console.log({ posts });

	// By returning { props: posts }, the Blog component
	// will receive `posts` as a prop at build time
	return {
		props: {
			posts,
		},
	};
}
