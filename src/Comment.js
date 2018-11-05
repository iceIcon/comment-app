import React, { Component } from 'react'

class Comment extends Component {
    state = {
        timeString: ''
    }
    componentWillMount() {
        this._updateTimeString();
        this._timer = setInterval(()=>{
            this._updateTimeString();
        },5000)
    }
    _updateTimeString() {
       const comment = this.props.comment;
       const duration = ((+new Date) - comment.createTime)/1000;
       this.setState({
        timeString: duration > 60
          ? `${Math.round(duration / 60)} 分钟前`
          : `${Math.round(Math.max(duration, 1))} 秒前`
      })
    }
    render() {
        const {comment} = this.props
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>
                        {comment.username} :
                    </span>
                </div>
                <p>{comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleDelete.bind(this)}>
                    删除
                </span>
            </div>
        )
    }
    handleDelete(){
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.comment.index)
        }
    }
    componentWillUnmount(){
        clearInterval(this._timer)
    }
}

export default Comment