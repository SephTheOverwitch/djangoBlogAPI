import { useEffect, useState } from "react";
import { PostModel } from "../models/PostModel";
import { UserModel } from "../models/UserModel";

function fetchLastPost() {
  const posts = fetch("http://localhost:8000/posts")
    .then((x) => x.json())
    .then((result) =>
      result.map(
        (y: { title: string; body: string; owner: UserModel | undefined }) =>
          new PostModel(y.title, y.body, y.owner)
      )
    );

  return posts;
}

export const Homepage = (): JSX.Element => {
  const [lastPost, setPost] = useState();

//   useEffect(() => {
//     fetchLastPost().then(setPost);
//     console.log(lastPost);
//   }, []);

  return (
<></>
  );
};
