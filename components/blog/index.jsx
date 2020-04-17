import { MDXProvider } from '@mdx-js/react';
import GlobalLayout from './layout';
import CodeBlock from '../code-block';

export default function Layout({ children, ...rest }) {
	return (
		<GlobalLayout {...rest}>
			<MDXProvider
				components={{
					h1: props => (
						<h1 {...props} className="font-lilitaone text-4xl p-4" />
					),
					h2: props => (
						<h2 {...props} className="font-lilitaone text-3xl p-4" />
					),
					h3: props => (
						<h3 {...props} className="font-lilitaone text-2xl p-4" />
					),
					em: props => <em {...props} className="italic" />,
					strong: props => <strong {...props} className="font-bold" />,
					p: props => (
						<p
							{...props}
							className="font-merriweather text-l leading-7 py-2 px-4"
						/>
					),
					code: props => <CodeBlock {...props} />,
				}}
			>
				{children}
			</MDXProvider>
		</GlobalLayout>
	);
}
