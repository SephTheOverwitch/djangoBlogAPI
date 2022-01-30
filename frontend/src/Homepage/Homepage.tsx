import { useEffect, useState } from "react";

function fetchLastPost() {
  const post = fetch("http://localhost:8000/posts/latest")
    .then((x) => x.json())

  return post;
}

export const Homepage = (): JSX.Element => {
  const [lastPost, setPost] = useState();

  useEffect(() => {
    fetchLastPost().then(setPost);
    console.log(lastPost);
  }, []);

  return (
<></>
  );
};
