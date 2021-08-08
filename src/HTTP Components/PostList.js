import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  state = {
    posts: [],
    errMsg: '',
  };
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(err => {
        this.setState({ errMsg: 'Something went wrong!!' });
      });
  }
  render() {
    const { posts, errMsg } = this.state;
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map(post => (
              <div key={post.id}>
                <p>{post.body}</p>{' '}
              </div>
            ))
          : null}
        {errMsg ? <h1>{errMsg}</h1> : null}
      </div>
    );
  }
}

export default PostList;
