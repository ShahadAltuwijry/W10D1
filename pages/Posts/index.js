import { useRouter } from "next/router";

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

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
      <h1>posts</h1>
      <hr />
      {posts.map((post) => {
        return (
          <div
            onClick={() => move(post.id)}
            key={post.id}
            style={{ borderBottom: "1px solid black" }}
          >
            <h2> - {post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
