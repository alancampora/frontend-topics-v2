import Layout from '../components/layout/';

export default function About() {
	return (
		<Layout>
			<div className="shadow-lg rounded-lg mx-auto max-w-screen-lg">
				<div className="sm:flex sm:items-center sm:justify-around block">
					<div className="flex-shrink-0 bg-purple-900 rounded-l-lg">
						<img
							className="w-48 border-purple-900 border-2 border-solid rounded-full m-4"
							src="/profile.jpeg"
						/>
					</div>
					<div className="m-4 text-xl">
						<p>this is a tests</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
