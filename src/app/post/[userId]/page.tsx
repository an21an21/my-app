const PostDetiailsPage = async ({ params }) => {
  const { userId } = await params;
  return <h1>Post Details Page for User ID: {userId}</h1>;
};

export default PostDetiailsPage;
