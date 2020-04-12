import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const activeLink = 'inline-block py-2 px-4 text-white no-underline';

const nonActiveLink =
	'inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4';

const routes = [
	{
		id: 'home',
		label: 'Home',
		href: '/',
		isActive: true,
	},
	{
		id: 'blog',
		label: 'Blog',
		href: '/blog',
		isActive: false,
	},
];

export default function Header() {
	const [showItems, setShowItems] = useState(false);
	const router = useRouter();

	return (
		<nav className="flex items-center flex-wrap bg-purple-900 py-2 px-4 justify-between">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<a className="text-white no-underline hover:text-white hover:no-underline">
					<span className="text-xl font-mono">{`<Frontend Topics />`}</span>
				</a>
			</div>

			<div className="block lg:hidden">
				<button
					id="nav-toggle"
					className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
					onClick={() => setShowItems(!showItems)}
				>
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>

			<div
				className={`flex-grow lg:flex lg:block lg:items-center lg:w-auto w-full 
            ${showItems ? 'text-center' : 'hidden'}`}
			>
				<ul className="list-reset lg:flex justify-end flex-1 items-center">
					{routes.map((r, index) => (
						<li className="mr-3" key={index}>
							<Link href={r.href}>
								<a
									className={
										router.pathname === r.href ? activeLink : nonActiveLink
									}
									href="#"
								>
									{r.label}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
