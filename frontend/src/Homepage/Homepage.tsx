import { useEffect, useState } from "react"
import { PostModel } from "../models/PostModel"
import { UserModel } from "../models/UserModel"
import { PostList } from "../Post/PostList"

function fetchPosts(){
    const posts = fetch('http://localhost:8000/posts')
    .then(x => x.json())
    .then(result => result.map(
        (        y: { title: string; body: string; owner: UserModel | undefined }) => new PostModel(y.title, y.body, y.owner)
    ))

    return posts
}

export const Homepage = (): JSX.Element => {

    const [posts, setPosts] = useState()

    useEffect(() => {
        fetchPosts().then(setPosts)
        console.log(posts)
    }, [posts]) 

    return ( 
        <>
        <p>BLA</p>
        <div className="home">
            <PostList posts={posts}  />
        </div>
        </>
    )
}