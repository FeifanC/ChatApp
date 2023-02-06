import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import InfoBar from "../infoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState({ text: "", id: "", user: "" });
  const [messages, setMessages] = useState([]);
  const [curID, setCurId] = useState(0);
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});
  }, [ENDPOINT, name]);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((old) => [...old, data]);
      setCurId(data.id);
    });
  }, []);

  //function for sending messages
  const sendMessage = (e) => {
    setMessage((old) => ({ ...old, id: curID, user: name }));

    if (message.text && message.id) {
      socket.emit("sendMessage", message, () =>
        setMessage({ text: "", id: "", user: name })
      );
    }

    e.preventDefault();
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
