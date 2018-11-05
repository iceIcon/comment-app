import React, { Component } from 'react'

class CommentInput extends Component {
    state = {
        username:'',
        content:''
    }
    // static propsTypes = {
    //     onSubmit: PropsTypes.func
    // }
    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.username} onChange={this.changeUsername.bind(this)} onBlur={this.hanleSaveName.bind(this)}/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} onChange={this.changeConent.bind(this)} ref={(contentInput)=> this.contentInput = contentInput}/>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.hanleSubmit.bind(this)}>发表</button>
                </div>
            </div>
        )
    }
    componentWillMount() {
        let username = localStorage.getItem('username')
        if(username) {
            this.setState({username})
        }
    }
    componentDidMount() {
        this.contentInput.focus();
    }
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
            this.state.createTime = +new Date();
            const {username,content,createTime} = this.state;
            // console.log(this.state.createTime)
            this.props.onSubmit({username,content,createTime})
            this.setState({
                content:''
            })
        }
    }
    hanleSaveName(e) {
        localStorage.setItem('username',e.target.value);
    }
}

export default CommentInput