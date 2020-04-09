export default function Navbar() {
	return (
		<div className="flex full-width">
			<div className="">
				<img
					className="w-20 mx-auto rounded-full border-solid border-2"
					src="/profile.jpeg"
				/>
				<h1 className="text-m text-center font-mono">Frontend Topics</h1>
			</div>
			<div className="justy-content">
				<p>About</p>
			</div>
		</div>
	);
}
