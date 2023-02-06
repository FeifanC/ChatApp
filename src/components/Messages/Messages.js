import "./Messages.css";
import React from "react";
import Message from "./Message/Message";

import ScrollToBottom from "react-scroll-to-bottom";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((mes, i) => (
        <div key={i}>
          <Message mes={mes} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
