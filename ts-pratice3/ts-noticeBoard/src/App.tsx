import { useState } from 'react';
import { Post } from './types';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const addPost = (title: string, content: string, author: string) => {
    const newPost: Post = {
      id: nextId,
      title,
      content,
      author,
      createdAt: new Date(),
    };
    setPosts([...posts, newPost]);
    setNextId((prev) => prev + 1);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const editPost = (updatedPost: Post) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
    setSelectedPost(null);
  };

  const selectPostForEdit = (post: Post) => {
    setSelectedPost(post);
  };

  return (
    <>
      <div className="App">
        <h1>게시판</h1>
        <PostForm
          addPost={addPost}
          selectedPost={selectedPost}
          editPost={editPost}
        />
        <PostList
          posts={posts}
          deletePost={deletePost}
          selectPostForEdit={selectPostForEdit}
        />
      </div>
    </>
  );
}

export default App;
