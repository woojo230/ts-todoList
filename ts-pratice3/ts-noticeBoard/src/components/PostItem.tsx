import { Post } from '../types';

interface PostItem {
  post: Post;
  deletePost: (id: number) => void;
  selectedPostForEdit: (post: Post) => void;
}

const PostItem = ({ post, deletePost, selectedPostForEdit }: PostItem) => {
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="post-item">
      <h3 className="post-title">{post.title}</h3>
      <div className="post-meta">
        <span className="post-author">작성자: {post.author}</span>
        <span className="post-date">작성일: {formatDate(post.createdAt)}</span>
      </div>
      <p className="post-content">{post.content}</p>
      <div className="post-actions">
        <button
          onClick={() => selectedPostForEdit(post)}
          className="edit-button"
        >
          수정
        </button>
        <button onClick={() => deletePost(post.id)} className="delete-button">
          삭제
        </button>
      </div>
    </div>
  );
};

export default PostItem;
