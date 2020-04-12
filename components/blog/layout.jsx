import Footer from '../footer';
import Header from '../header';
import Hero from '../hero';

export default function Layout({ children }) {
	return (
		<div>
			<Header />
			<Hero />
			<div className="container mx-auto p-4 max-w-4xl">{children}</div>
			<Footer />
		</div>
	);
}

