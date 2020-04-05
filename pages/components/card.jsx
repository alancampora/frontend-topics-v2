export default function Card({ title, description, link, tag }) {
	return (
		<div className="md:flex">
			<div className="md:flex-shrink-0">
				<img
					className="rounded-lg md:w-56"
					src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
				/>
			</div>
			<div className="mt-4 md:mt-0 md:ml-6">
				<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
					{tag}
				</div>
				<a
					href={link}
					className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
				>
					{title}
				</a>
				<p className="mt-2 text-gray-600">{description}</p>
			</div>
		</div>
	);
}
