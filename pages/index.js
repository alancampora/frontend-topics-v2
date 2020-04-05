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
