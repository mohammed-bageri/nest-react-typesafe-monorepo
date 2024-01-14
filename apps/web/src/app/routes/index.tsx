import { FileRoute } from '@tanstack/react-router';
import { client } from '../utils/client';

export const Route = new FileRoute('/').createRoute({
  component: Home,
});

function Home() {
  const post = client.posts.getPosts.useQuery(['posts']);
  return (
    <div className="p-2">
      <h3>Welcome Home! {post.data?.body.total}</h3>
    </div>
  );
}
