
import Post
    from "./Post"
const Posts = ({ posts }) => {

    let postsList = posts.length ? (
        posts.map((post) => {
            return (
                <Post post={post} key={post.id}></Post>
            )
        })
    ) : (
        <div className="red-text">
            No posts to show.
        </div>
    )

    return (
        <div className="container center posts">
            {postsList}
        </div>
    )



}

export default Posts