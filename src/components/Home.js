import React, { Component } from "react"
import axios from 'axios'
import Posts from "./Posts";

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                var posts = response.data.slice(0, 10);
                this.setState({
                    posts: posts
                })
            })
    }


    render() {
        const { posts } = this.state

        return (
            <section className="container">
                <h4 className="center text-blue">Home</h4>
                <Posts posts={posts} ></Posts>
            </section>
        )
    }
}

export default Home;