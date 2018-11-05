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
                return <Comment comment={item} key={index} onDeleteComment={this.handleDelteComment.bind(this)}/>
            })}
        </div>
    )
  }
  handleDelteComment(index){
      if(this.props.doDeleteComment) {
        this.props.doDeleteComment(index);
      }
  }
}

export default CommentList