import { Post } from '../types';
import PostItem from './PostItem';

interface PostListProps {
  posts: Post[];
  deletePost: (id: number) => void;
  selectedPostForEdit: (post: Post) => void;
}

const PostList = ({
  posts,
  deletePost,
  selectedPostForEdit,
}: PostListProps) => {
  if (posts.length === 0) {
    return <p>게시글 증발~^^</p>;
  }
  return (
    <div className="post-list">
      <h2>게시글 목록</h2>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          deletePost={deletePost}
          selectedPostForEdit={selectedPostForEdit}
        />
      ))}
    </div>
  );
};

export default PostList;
