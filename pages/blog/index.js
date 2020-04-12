import glob from 'glob';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Blog(props) {
	return (
		<Layout heroImage="/blog.png">
			<div className="flex flex-wrap justify-center">
				{props.posts.map((post, index) => (
					<div className="m-4 cursor-pointer" key={index}>
						<Link href={post.url}>
							<div className="max-w-sm rounded shadow-lg">
								<img
									className="w-full"
									src={post.hero.image}
									alt="Sunset in the mountains"
								/>
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2">{post.title}</div>
									<p className="text-gray-700 text-base">{post.description}</p>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const slugs = glob
		.sync('**/p/**/*.mdx')
		.map(slug => slug.replace(/.*\//, '').replace(/\.mdx/, ''));

	const posts = await Promise.all(
		slugs.map(async slug => {
			const file = await import(`./p/${slug}.mdx`);
			return { ...file.frontmatter, url: `/blog/p/${slug}` };
		}),
	);

	return {
		props: {
			posts: posts,
		},
	};
}
