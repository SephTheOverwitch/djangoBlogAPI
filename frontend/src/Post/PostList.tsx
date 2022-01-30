import { useState, useEffect } from "react";
import { Container as BootstrapContainer, ListGroup } from "react-bootstrap";
import { PostModel } from "../models/PostModel";
import { UserModel } from "../models/UserModel";

function fetchPosts() {
    const posts = fetch("http://localhost:8000/posts/")
      .then((x) => x.json())
      .then((result) =>
        result.map(
          (y: { title: string; body: string; owner: UserModel | undefined }) =>
            new PostModel(y.title, y.body, y.owner)
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
