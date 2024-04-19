import React from 'react'
import "./message.css"
function message() {
  return (
    <div>
    <div className="message-container">
        <div className="messages">
            <div className="message">
                <div className="sender">John Doe:</div>
                <div className="text">Hello, how are you?</div>
            </div>
            <div className="message">
                <div className="sender">Jane Smith:</div>
                <div className="text"> I am good thanks! How about you?</div>
            </div>
          
        </div>

        <form>
            <input type="text" id="messageInput" placeholder="Type your message..." required/>
            <button type="submit">Send</button>
        </form>
    </div>
    </div>
  )
}

export default message