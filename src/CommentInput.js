import React, { Component } from 'react'

class CommentInput extends Component {
    state = {
        username:'',
        content:''
    }
    render() {
    
    return (
        <div className="comment-input">
            <div className="comment-field">
                <span className="comment-field-name">用户名：</span>
                <div className="comment-field-input">
                    <input value={this.state.username} onChange={this.changeUsername.bind(this)}/>
                </div>
            </div>
            <div className="comment-field">
                <span className="comment-field-name">评论内容：</span>
                <div className="comment-field-input">
                    <textarea value={this.state.content} onChange={this.changeConent.bind(this)}/>
                </div>
            </div>
            <div className="comment-field-button">
                <button onClick={this.hanleSubmit.bind(this)}>发表</button>
            </div>
        </div>
    )}
    changeUsername(e) {
        this.setState({
            username:e.target.value
        })
    }
    changeConent(e) {
        this.setState({
            content:e.target.value
        })
    }
    hanleSubmit() {
        if(this.props.onSubmit) {
            const {username,content} = this.state;
            this.props.onSubmit({username,content})
            this.setState({
                content:''
            })
        }
    }
}

export default CommentInput