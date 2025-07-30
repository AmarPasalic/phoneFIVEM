import React from 'react'
interface Props {
  content: string,
  time: string,
}
const Message: React.FC<Props> = ({ content, time }) => {
  return (
    <div className="message-bubble">
      <style>{`
        .message-bubble {
          position: relative;
          display: block;
          background: #3b4e21;
          color: white;
          border-radius: 5px;
          padding: 10px 16px;
          margin: 8px 0 8px auto;
          width: 100%;
          max-width: 700px;
          word-break: break-word;
          white-space: pre-line;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .message-bubble .tail {
          position: absolute;
          right: 0;
          bottom: -8px;
          width: 0;
          height: 0;
          border-top: 8px solid #3b4e21;
          border-left: 8px solid transparent;
        }
        .message-time {
          display: block;
          text-align: right;
          font-size: 11px;
          color: #b0b0b0;
          margin-top: 4px;
        }
      `}</style>
      {content}
      <span className="message-time">{time}</span>
      <span className="tail"></span>
    </div>
  )
}

export default Message