class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    // send the message from here to django
    let returnedMessage = "DjangoWorking(message)";
    this.actionProvider.send(returnedMessage);
  }
}

export default MessageParser;
