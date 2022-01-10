import { PostList } from "../Post/PostList"

const posts = fetch('http://localhost:8000/posts')

export const Homepage = (): JSX.Element => {

    return ( 
        <div className="home">
            <PostList title='temp' body='temp' />
        </div>
    )
}