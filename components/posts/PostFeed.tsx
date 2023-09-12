import usePosts from '@/hooks/usePosts';
import PostItem from './PostItem';

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: allPosts = [] } = usePosts(); // Obtén todos los posts

  // Filtra los posts por el userId si está presente
  const userPosts = userId ? allPosts.filter((post: Record<string, any>) => post.user.id === userId) : allPosts;

  return (
    <>
      {userPosts.map((post: Record<string, any>) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostFeed;
