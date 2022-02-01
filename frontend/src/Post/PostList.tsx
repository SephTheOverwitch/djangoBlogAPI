import { useState, useEffect } from "react";
import { Container as BootstrapContainer, ListGroup } from "react-bootstrap";
import { PostModel } from "../models/PostModel";

function fetchPosts() {
    const posts = fetch("http://localhost:8000/posts/")
      .then((x) => x.json())
      .then((result) =>
        result.map(
          (y: { title: string; body: string }) =>
            new PostModel(y.title, y.body)
        )
      );
  
    return posts;
  }

export const PostList = (): JSX.Element => {
  const [posts, setPosts] = useState<PostModel[]>();

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <BootstrapContainer>
    <ListGroup>
        {posts?.map((post) => (
            <ListGroup.Item key={post.title}>{post.title}</ListGroup.Item>
        ))}
    </ListGroup>
  </BootstrapContainer>
  );
};
