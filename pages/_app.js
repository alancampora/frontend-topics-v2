import '../styles/index.css';
import Router from 'next/router';
import withGA from 'next-ga';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

console.log('analitycs', process.env.GOOGLE_ANALYTICS, 'env', process.env);

export default withGA(process.env.GOOGLE_ANALYTICS, Router)(MyApp);
