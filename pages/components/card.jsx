export default function Card({
	title,
	description,
	url,
	tag,
	imgSrc,
}) {
	return (
		<a href={url}>
			<div className="m-4 md:flex">
				<div className="md:flex-shrink-0">
					<img
						className="rounded-lg md:w-56"
						src={imgSrc}
					/>
				</div>
				<div className="mt-4 md:mt-0 md:ml-6">
					<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
						{tag}
					</div>
					<a
						href={url}
						className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
					>
						{title}
					</a>
					<p className="mt-2 text-gray-600">{description}</p>
				</div>
			</div>
		</a>
	);
}
