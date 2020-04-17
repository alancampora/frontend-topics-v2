export default function({ photo, name }) {
	return (
		<div className="mt-3 px-4">
			<div className="flex items-center">
				<div className="rounded-full h-16 w-16 flex-shrink-0 mr-3 mt-1 overflow-hidden shadow-inner relative">
					<img
						loading="lazy"
						src={photo}
						className="absolute inset-0 z-negative w-full h-full"
					/>
				</div>
				<div className="flex-1 leading-snug w-0">
					<h4 className="whitespace-no-wrap text-secondary font-bold truncate hover:text-primary">
						{name}
					</h4>
				</div>
			</div>
		</div>
	);
}
