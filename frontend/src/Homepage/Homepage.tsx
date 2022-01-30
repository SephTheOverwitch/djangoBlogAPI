import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { PostModel } from "../models/PostModel";

function fetchLastPost() {
  const post = fetch("http://localhost:8000/posts/latest").then((x) =>
    x.json()
  );
  return post;
}

export const Homepage = (): JSX.Element => {
  const [lastPost, setPost] = useState<PostModel>();

  useEffect(() => {
    fetchLastPost().then(setPost);
    console.log(lastPost);
  }, []);

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{lastPost?.title}</Card.Title>
          <Card.Text> {lastPost?.body}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
