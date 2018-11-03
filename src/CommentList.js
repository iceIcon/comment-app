import React, { Component } from 'react'
import Comment from './Comment.js'

class CommentList extends Component {
  static defaultProps = {
      comment:[]
  }
  render() {
    return (
        <div>
            {this.props.comment.map((item,index)=>{
                return <Comment comment={item} key={index}/>
            })}
        </div>
    )
  }
}

export default CommentList