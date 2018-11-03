import React, { Component } from 'react'
import CommentInput from './CommentInput.js'
import CommentList from './CommentList.js'

class CommentApp extends Component {
 state = {
     comment:[]
 }
  render() {
    return (
        <div className="wrapper">
            <CommentInput onSubmit={this.handleChange.bind(this)} />
            <CommentList comment={this.state.comment}/>
        </div>
    )
  }
  handleChange(e) {
    if(!e) return;
    if(!e.username){
        alert('请输入姓名');
        return 
    }
    if(!e.content) {
        alert('请输入内容');
        return
    }
    this.state.comment.push(e);
    this.setState({
        comment: this.state.comment
    })
  }
}

export default CommentApp