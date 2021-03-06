import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  console.log(posts);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

const Posts = ({ posts }) => {
  const router = useRouter();

  const move = (id) => {
    router.push(`/Posts/${id}`);
  };

  return (
    <div style={{ margin: "15px" }}>
      <Head>
        <title>next app | Posts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>posts</h1>
      <hr />
      {posts.map((post) => {
        return (
          <Link href={`/Posts/${post.id}`} key={post.id}>
            <div>
              <h2> - {post.title}</h2>
              <p>{post.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
