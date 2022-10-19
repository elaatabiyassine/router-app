
import { Link } from 'react-router-dom'
import Pokeball from '../images/pokeball.png'


const Post = ({ post }) => {

    let link = "/posts/" + post.id

    return (<div className="post card blue-grey darken-1 " key={post.id}>
        <div className="card-content white-text">

            <span className="card-title">
                <Link to={link}>
                    {post.title}
                </Link>
            </span>
            <img src={Pokeball} alt="pokeball" />
            <p>
                {post.body}
            </p>
        </div>
    </div>)
}

export default Post;