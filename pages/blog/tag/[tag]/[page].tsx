import { Blog } from "../../../../lib/blog";
import BlogPage from "../../index";

export default BlogPage;
export { getStaticProps } from "../../index";

export async function getStaticPaths() {
  const { posts: allPosts } = await Blog.getAll({ count: 99999 });
  const tags = [
    ...new Set(allPosts.map((post) => [...post.meta.tags]).flat(1)),
  ];

  const paths = tags
    .map((tag) => {
      const pages =
        Math.ceil(
          allPosts.filter((p) => p.meta.tags.includes(tag)).length /
            Blog.perPage
        ) + 1;
      return Array.from(Array(pages).keys()).map((page) => {
        return { params: { tag, page: page.toString() } };
      });
    })
    .flat();

  return {
    paths,
    fallback: true,
  };
}
