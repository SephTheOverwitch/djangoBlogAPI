import { PostModel } from '../models/PostModel';

interface IProps {
    posts: PostModel[] | undefined
}

export const PostList = (props: IProps): JSX.Element => {
    return(
        <label>{props.posts?.map((post) => {
            return post.title
        })}</label>
    )
}