export default function Hero() {
	return (
		<div className="h-200 bg-purple-500 text-yellow-200">
			<div className="flex mx-auto p-5 items-center max-w-5xl">
				<div className="flex-1 text-right p-4">
					<div className="font-hero text-4xl w-25">
						Learning the latest Frontend frameworks for free. Javascript, HTML,
						CSS and more!
					</div>
				</div>
				<div className="flex-1 p-4">
					<img className="w-64" src="/hero.png" />
				</div>
			</div>
		</div>
	);
}
