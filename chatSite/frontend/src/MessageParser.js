import axios from "axios";

async function sendMessage(message) {
  await axios
    .put("http://192.168.1.6:8000/api/", message)
    .then((res) => getMessage());
}

async function getMessage() {
  let message = "";
  await axios
    .get("http://192.168.1.6:8000/api/")
    .then((res) => (message = res.data));
  return message;
}

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  async parse(message) {
    console.log(message);

    // send the message from here to django
    await sendMessage(message);
    let returnedMessage = getMessage();
    console.log(returnedMessage);
    let val = "";
    await returnedMessage.then(
      (data) =>
        (val = (function (data) {
          return data.reply;
          //this.actionProvider.send(data.reply.reply);
        })(data))
    );
    console.log(val);
    this.actionProvider.send(val);

    // returnedMessabhage = "DjangoWorking(message)";
    // this.actionProvider.send(returnedMessage);
  }
}

export default MessageParser;
