import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import Footer from '../footer';
import Header from '../header';
import Hero from '../hero';

export default function Layout({ children }) {
	const router = useRouter();
	ReactGA.initialize(process.env.GOOGLE_ANALYTICS);
	ReactGA.pageview(router.pathname + router.search);
	return (
		<div>
			<Header />
			<Hero />
			<div className="container mx-auto p-4">{children}</div>
			<Footer />
		</div>
	);
}
