import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

function usePost(postId: string) {
  const { data, error, isLoading, mutate } = useSWR(postId ? `/api/posts/${postId}` : null, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  };
}

export default usePost;