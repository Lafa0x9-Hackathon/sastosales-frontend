import React, { useState } from "react";
import "./chat.css";
import ownerPic from "../../assets/Images/profile.png";
import dots from "../../assets/Images/DotsThree.png";
import pencil from "../../assets/Images/pencil.png";
import PaperPlaneRight from "../../assets/Images/PaperPlaneRight.png";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);

  const handleClick = () => {
    if (msg.length > 0) {
      setMessages([
        ...messages,
        { sender: "receiver", content: msg, name: "Times" },
      ]);
      setMsg("");
    }
  };
  return (
    <div className="chat-box">
      <div className="profile">
        <div className="userInfo">
          <img src={ownerPic} alt="profile" className="ownePic" />
          <div className="circle"></div>
          <div className="user">
            <div className="ownerName">Hari Prasad Fuinal</div>
            <div className="status">Active Now</div>
          </div>
        </div>
        <div className="other">
          <img src={dots} alt="three dots" />
        </div>
      </div>
      <div className="current-chat">
        <div className="date">
          <span>{new Date().toDateString().slice(0, 4)}</span>
        </div>
        <div className=" sender-message">
          <div className="message-info">
            <img src={ownerPic} alt="profile" className="sender-pic" />
            <div className="sender-name">Hari Prasad Fuinal</div>
          </div>
          <div className="sender-message-content">
            Hello and thanks for signing up to the course. If you have any
            questions about the Product, feel free to get in touch and I'll be
            happy to help 😀
          </div>
        </div>

        {messages.map((message, index) => (
          <div key={index} className={`${message.sender}-message`}>
            <div className="receiver-name">{message.name}</div>
            <div className="receiver-message-content">{message.content}</div>
          </div>
        ))}
      </div>
      <div className="input-message">
        <div className="input-box">
          <img className="pencil" src={pencil} alt=" pencil" />
          <input
            type="text"
            placeholder="Type your message"
            name="msg"
            id="msg"
            value={msg}
            onChange={(e) => {
              setMsg(e.target.value);
            }}
          />
        </div>

        <button className="sendBtn" onClick={handleClick}>
          Send
          <img src={PaperPlaneRight} alt="right arrow" className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Chat;
