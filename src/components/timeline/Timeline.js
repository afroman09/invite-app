import React, { Component } from 'react';
import "./Timeline.css"

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], user: '', text: '' };
    this.tweet = this.tweet.bind(this);
    this.userName = this.userName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form onSubmit={this.handleSubmit}
                autoComplete="off">
            <input
              onChange={this.userName}
              value={this.state.user}
              id='tweets'
              placeholder="your name"
            /><br/>
            <textarea
              id="new-todo"
              onChange={this.tweet}
              value={this.state.text}
              placeholder="What are you doing now？"
            /><br/>
            <button
              className="btn btn-success"
              type="submit"
            >つぶやく
            </button>
          </form>
          </div>
      　{/*  TweetList Componentの呼び出し */}
        <div className="tweet-list">
          <TweetList items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }

  // 
  tweet(event) {
    this.setState({ text: event.target.value });
  }

  userName(event){
    this.setState({ user: event.target.value});
  }

  handleSubmit(event) {
    /*  ユーザー名・ツイートが入力されなかった場合のバリデーション */
    event.preventDefault();
    /* ユーザー名の空入力を防止 */
    if(this.state.user === "") { 
      alert('ユーザー名を入力してください')
      return;
      /* テキストの空入力を防止 */
    } else if(this.state.text === "") {
      alert('ツイート内容を入力してください')
      return;
    }

    const newItem = {
      user: this.state.user,
      text: this.state.text,
    };

    this.setState(state => ({
      items: state.items.concat(newItem),
      user: '',
      text: ''
    }));
  }
}

class TweetList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.items.map((item, i) => (
            <li key={i}>
            <div className="line-bc">
              <div className="balloon6">
                <div className="faceicon">
                    {item.user}
                </div>
                <div className="chatting">
                  <div className="says">
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Timeline;