var ref = new Firebase('https://smallchat01.firebaseio.com/');
var App = React.createClass({
  getInitialState() {
    ref.on('child_added', snapshot => {
      this.setState({ chats: this.state.chats.concat(snapshot.val()) });
      if (typeof snapshot.val() === 'string') this.setState({topic: snapshot.val()});
    });
    ref.on('child_changed', snapshot => { this.setState({topic: snapshot.val()}) }); // The only thing capable of changing is the topic :p
    return { chats: [], display: '', topic: '' };
  },
  render() {
    var chats = this.state.chats.filter(chat => {return typeof chat !== 'string'}).map((chat, index) => {
      return (<div className={'chat' + (chat.display === this.state.display ? ' mine' : ' theirs')} key={index}>
          <div className="chat-display">{chat.display}</div><div className="chat-message">{chat.text} <div className="chat-topic">{chat.topic}</div></div>
        </div>);
    });
    setTimeout(() => { React.findDOMNode(this.refs.chatWrapper).scrollTop = React.findDOMNode(this.refs.chatWrapper).scrollHeight; }, 0);

    return (
      <div>
        <div className="chat-container"><div className="chat-wrapper" ref="chatWrapper">{chats}</div></div>
        <form onSubmit={this.handleSubmit}>
          <input ref="display" placeholder='First Name' className="display-input" onChange={this.changeDisplay} value={this.state.display}/>
          <input className="message-input" placeholder='Message' ref="input"/><button style={{display: 'none'}}/>
        </form>
        <div className="topic">What do you think about {this.state.topic}?</div>
      </div>
    );
  },
  changeDisplay(event) { this.setState({display: event.target.value}); },
  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    if (React.findDOMNode(this.refs.input).value.trim() && this.state.display) {
      ref.push({display: this.state.display, text: React.findDOMNode(this.refs.input).value, time: new Date(), topic: this.state.topic});
    }
    React.findDOMNode(this.refs.input).value = '';
  }
});
React.render(<App/>, document.body);
