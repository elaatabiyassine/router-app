import React, { Component } from "react"
import Post from "./Post"
import axios from "axios"

class PostPage extends Component {

    state = {
        post: null
    }

    componentDidMount() {
        let post_id = this.props.match.params.post_id

        if (post_id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/` + post_id)
                .then((r) => {
                    this.setState({
                        post: r.data
                    })
                })
        }
    }

    render() {
        if (this.state.post) {
            return (
                <div className="container post-page">
                    <Post post={this.state.post}> </Post>
                </div>
            )
        }
        else {
            return (
                <h1 className="center text-red">Something Went Wrong !</h1>
            );
        }

    }

}

export default PostPage;