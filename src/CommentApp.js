import React, { Component } from 'react'
import CommentInput from './CommentInput.js'
import CommentList from './CommentList.js'

class CommentApp extends Component {
 state = {
     comment:[]
 }
 componentWillMount(){
     let comment = localStorage.getItem('content');
     if(comment) {
         comment = JSON.parse(comment);
         this.setState({comment});
     }
 }
  render() {
    return (
        <div className="wrapper">
            <CommentInput onSubmit={this.handleChange.bind(this)} />
            <CommentList comment={this.state.comment} doDeleteComment={this.handleDeleteComment.bind(this)}/>
        </div>
    )
  }
  _saveContent() {
      localStorage.setItem('content',JSON.stringify(this.state.comment))
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
    this._saveContent();
  }
  handleDeleteComment(index){
      this.state.comment.splice(index,1);
      this.setState({
          comment:this.state.comment
      })
      this._saveContent()
  }
}

export default CommentApp