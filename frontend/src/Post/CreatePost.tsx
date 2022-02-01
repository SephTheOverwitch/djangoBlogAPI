import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { PostModel } from "../models/PostModel";

export const CreatePost = (): JSX.Element => {
  const [post, setPost] = useState<PostModel>();

  const handleTitleChange = (event: {
    currentTarget: { value: string | undefined };
  }) => {
    if (
      event.currentTarget.value !== post?.title &&
      event.currentTarget.value !== undefined
    ) {
        console.log('titlechange')
      setPost({ title: event.currentTarget.value, body: post?.body });
    }
  };

  const handleBodyChange = (event: {
    currentTarget: { value: string | undefined };
  }) => {
    if (
      event.currentTarget.value !== post?.body &&
      event.currentTarget.value !== undefined
    ) {
        console.log('body change')
      setPost({ title: post?.title, body: event.currentTarget.value });
    }
  };

  const submitPost = () => {
    fetch("http://localhost:8000/posts/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: post?.title,
        body: post?.body,
      }),
    });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      submitPost()
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Enter title"
            onChange={handleTitleChange}
          />
          <Form.Label>Body</Form.Label>
          <Form.Control
            type="body"
            placeholder="Body"
            onChange={handleBodyChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};