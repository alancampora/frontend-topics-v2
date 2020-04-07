export default function Header() {
	return (
		<div className="header p-4">
			<img
				className="w-50 shadow-lg rounded-full mx-auto border-solid border-2 border-gray-300"
				src="/profile.jpeg"
			/>
          <h1 className="text-2xl text-center font-mono p-2">{`<Frontend Topics />`}</h1>
		</div>
	);
}
