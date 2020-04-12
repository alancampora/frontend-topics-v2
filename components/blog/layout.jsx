import Footer from '../footer';
import Header from '../header';
import Hero from '../hero';

export default function Layout({ frontmatter, children }) {
	return (
		<div>
			<Header />
			<div className="container mx-auto p-4 max-w-4xl">
				<div className="mx-auto">
					{frontmatter.hero && (
						<div>
							<img className="mx-auto" src={frontmatter.hero.image} />
							<p className="text-center text-sm">{frontmatter.hero.author} </p>
						</div>
					)}
				</div>
				<div>{children}</div>
			</div>
			<Footer />
		</div>
	);
}
