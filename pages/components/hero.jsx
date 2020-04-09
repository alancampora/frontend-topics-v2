export default function Hero() {
	return (
		<div className="h-200 bg-gray-800">
			<div className="flex mx-auto p-5 items-center max-w-5xl">
				<div className="flex-1 text-right p-4">
					<div className="font-serif text-4xl text-white w-25">
						Learning the latest Frontend frameworks for free. Javascript, HTML,
						CSS and more!
					</div>
				</div>
				<div className="flex-1 p-4">
					<img className="w-48" src="/hero.png" />
				</div>
			</div>
		</div>
	);
}
