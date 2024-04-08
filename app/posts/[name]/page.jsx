import { getPost } from "../../../helpers/api";

export default async function Post({ params }) {
  const post = await getPost(params.name);

  return (
    <>
      <h1>{post.name}</h1>
      <h2>{post.email}</h2>
      <h3>{post.address.street}</h3>
    </>
  );
}