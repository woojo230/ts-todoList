import { FormEvent, useEffect, useState } from 'react';
import { Post } from '../types';

interface PostFormProps {
  addPost: (title: string, content: string, author: string) => void;
  selectedPost: Post | null;
  editPost: (post: Post) => void;
}

const PostForm = ({ addPost, selectedPost, editPost }: PostFormProps) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
      setAuthor(selectedPost.author);
      setIsEdit(true);
    } else {
      resetForm();
    }
  }, [selectedPost]);

  const resetForm = () => {
    setTitle('');
    setContent('');
    setAuthor('');
    setIsEdit(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !author.trim()) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    if (isEdit && selectedPost) {
      editPost({
        ...selectedPost,
        title,
        content,
        author,
      });
    } else {
      addPost(title, content, author);
    }
    resetForm();
  };

  return (
    <>
      <div className="post-form">
        <h2>{isEdit ? '게시글 수정' : '새 게시글 작성'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              rows={5}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">작성자</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="작성자 이름을 입력하세요"
            />
          </div>
          <button type="submit">{isEdit ? '수정' : '작성'}</button>
          {isEdit && (
            <button type="button" onClick={resetForm} className="cancle-button">
              수정 취소
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default PostForm;
