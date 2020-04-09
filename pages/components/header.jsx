export default function Header() {
	return (
		<nav className="flex items-center flex-wrap bg-purple-900 py-2 px-4 justify-between">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<a className="text-white no-underline hover:text-white hover:no-underline">
					<span className="text-xl font-mono">{`<Frontend Topics />`}</span>
				</a>
			</div>

			<div class="block lg:hidden">
				<button
					id="nav-toggle"
					class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
				>
					<svg
						class="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
		 			>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>

			<div class="flex-grow lg:flex lg:items-center lg:w-auto lg:block w-full">
				<ul class="list-reset lg:flex justify-end flex-1 items-center">
					<li class="mr-3">
						<a class="inline-block py-2 px-4 text-white no-underline" href="#">
							Active
						</a>
					</li>
					<li class="mr-3">
						<a
							class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
							href="#"
						>
							link
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

//<div className="header p-4">
//<div className="flex items-center">
//<div>
//<img
//className="w-10 shadow-lg rounded-full border-solid border-2 border-gray-300 flex-shrink-0"
//src="/profile.jpeg"
///>
//<h1 className="text-xl text-center font-mono p-2">{`<Frontend Topics />`}</h1>
//</div>
//</div>
//</div>
