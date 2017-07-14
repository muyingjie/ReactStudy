import React from "react";

require("./infoItem.css");
import headImg from "InfoItem/img/matt.jpg";

export default class InfoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            infoStatus: "reply",
            reply: this.props.info.subComment,
            replyContent: ""
        };
        this.reply = this.reply.bind(this);
        this.commit = this.commit.bind(this);
        this.commitReplyContent = this.commitReplyContent.bind(this);
    }
    reply(){
        this.setState({
            infoStatus: "commit"
        });
    }
    commit(){
        const d = new Date();
        if (this.props.info.subComment) {
            console.log(this.state.replyContent);
            this.props.info.subComment.push({
                date: "今天",
                time: d.getHours() + ":" + d.getMinutes(),
                name: "aaa",
                content: this.state.replyContent,
                avatar: headImg
            });
        } else {
            this.props.info.subComment = [{
                date: "今天",
                time: d.getHours() + ":" + d.getMinutes(),
                name: "aaa",
                content: this.state.replyContent,
                avatar: headImg
            }];
        }
        this.setState({
            infoStatus: "reply",
            reply: this.props.info.subComment
        });
    }
    commitReplyContent(e){
        this.state.replyContent = e.target.value;
    }
    render(){
        const img = this.props.info.avatar;
        const name = this.props.info.name;
        const content = this.props.info.content;
        const date = (this.props.info.date || "今天") + " " + this.props.info.time;
        const subCommentData = this.props.info.subComment;
        const aSubComments = subCommentData ? subCommentData.map((info, i) => (
            <InfoItem info={info} key={i} />
        )) : [];
        const {infoStatus} = this.state;
        const isReply = infoStatus == "reply";
        const replyClassList = "btn reply " + (isReply ? "" : "hide");
        const commitClassList = "btn reply " + (isReply ? "hide" : "");
        const replyWrapClassList = "reply-wrap " + (isReply ? "hide" : "");
        
        return (
            <div>
                <div className="info-item clear">
                    <img src={img} className="fl" alt="" />
                    <div className="name fl">{name}</div>
                    <div className="comment fl">
                        <div className="content">{content}</div>
                        <div className="date">{date}</div>
                        <a href="javascript:;" className={replyClassList} onClick={this.reply}>回复</a>
                        <a href="javascript:;" className={commitClassList} onClick={this.commit}>提交</a>
                        <div className={replyWrapClassList}>
                            <input type="text" className="reply-input" value={this.replyContent} onChange={this.commitReplyContent} />
                        </div>
                    </div>
                </div>
                <div className="sub-comment">
                    {aSubComments}
                </div>
            </div>
        );
    }
}