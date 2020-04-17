export default function SvgIcon({ path, href }) {
	return (
		<a href={href} className="text-purple-300 hover:text-purple-200 m-2">
			<svg style={{ width: '30px', height: '30px' }} viewBox="0 0 24 24">
				<path fill="currentColor" d={path} />
			</svg>
		</a>
	);
}
