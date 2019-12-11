import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PostDisplay from './PostDisplay';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            image_url: ''
        }
    }

    handleInput = event => {
        this.setState({
            image_url: event.target.value
        })
    }

    componentDidMount(){
        axios.get(`/api/posts/${this.props.user.user_id}`).then(res => {
            this.setState({posts: res.data})
        })
        .catch(err => console.log(err))
    }

    addPost = () => {
        axios.post(`/api/posts/${this.props.user.user_id}` ,{image_url: this.state.image_url}).then(res => {
            this.setState({
                posts: res.data,
                image_url: ''
            })
        })
        .catch(err => console.log(err))
    }

    deletePost = id => {
        axios.delete(`/api/posts/${id}/${this.props.user.user_id}`).then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    render(){
        // console.log(this.state.posts)
        const mappedPosts = this.state.posts.map((post, index) => {
            return (
                <PostDisplay deletePost={this.deletePost} key={index} post={post} />
            )
        })
        return(
            <div>
                {mappedPosts}
                <input onChange={event => this.handleInput(event)} value={this.state.image_url} placeholder='drop image here'></input>
                <button onClick={this.addPost}>Submit Post</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps) (Dashboard);