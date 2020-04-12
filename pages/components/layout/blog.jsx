import { MDXProvider } from '@mdx-js/react';
import GlobalLayout from './';

export default function Layout({ children }) {
	return (
		<GlobalLayout>
			<MDXProvider
				components={{
					h1: props => (
						<h1 {...props} className="font-lilitaone text-4xl p-4" />
					),
					p: props => (
						<p {...props} className="font-merriweather text-l py-2 px-4" />
					),
				}}
			>
				{children}
			</MDXProvider>
		</GlobalLayout>
	);
}
