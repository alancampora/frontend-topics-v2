import glob from 'glob';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Blog(props) {
  return (
    <Layout>
      {props.posts.map((post, index) => (
        <div key={index}>
          <Link href={post.url}>
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
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
    })
  );

  return {
    props: {
      posts: posts
    }
  };
}
