//External Imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Internal Import
import { fetchPost } from "../features/posts/postsSlice";

const Posts = () => {
  const { isLoading, isError, posts, error } = useSelector(
    (state) => state.postR
  );

  console.log("POSTS PAGE=", posts);

  const dispatch = useDispatch();

  //fetch data
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  console.log("postsPage=", posts);
  //Content
  let content = {};

  if (isLoading && !isError) {
    return (content = <h3>Loading...</h3>);
  }
  if (isLoading && isError && !error) {
    return (content = <h3>{error}</h3>);
  }
  if (!isLoading && !isError && posts.length <= 0) {
    return (content = <h3>No posts found! </h3>);
  }
  if (!isLoading && !isError && posts.length > 0) {
    return (content = (
      <div>
        {posts.map((post) => {
          return (
            <ol key={post.id}>
              <li>{post.id}</li>
              <li>{post.title}</li>
              <li>{post.body}</li>
            </ol>
          );
        })}
      </div>
    ));
  }
  return <div>{content}</div>;
};

export default Posts;
