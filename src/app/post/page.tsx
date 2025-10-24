import Link from "next/link";

const PostPage = async () => {
  let data = [];
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(apiUrl + "/posts", {
      next: { revalidate: 10 }, // ISR (Incremental Static Regeneration)
    });

    data = await response.json();
  } catch (err) {
    throw new Error(err.message);
  }

  return (
    <>
      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id}>
            <Link href={"/post/" + post.userId}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostPage;
