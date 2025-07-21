import React from 'react';
import Message from '../Message';
import { Phone } from 'lucide-react';
import mic from "/media/microphone.png"
import send from "/media/send.png"
import cam from "/media/video-camera.png"
import { useHistory } from 'react-router-dom';
const MessagesApp: React.FC = () => {
    const history = useHistory();
    return (
        <div className="messages-container">
            <style>{`
            .messages-container{
               background: #131313;
          height: 88vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
            }
          .icon{
          width:34px;
          height:34px;
          display:flex;
          justify-content:center;
          align-items:center;
          background:#272425;
          border-radius:100%;
          }
          .messageTitleWrap{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 7vh;
          background: #111111;
          border-bottom: 1px solid #242444;
          }
        .messagesTitle{
        width:90%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        }
        h1, h2, h3, h4, h5, h6, p {
          color: white;
        }
          .titleContent{
          display:flex;
          alig-items:center;
          gap:20px;
          }
          .messageIcons{
          display:flex;
          align-ietms:center;
          gap:20px;
          img{
          width:24px;
          height:24px;
            filter: brightness(0) invert(1);
          }
          }
          .chatFooter{
          img{
          width:24px;
          height:24px;
          }
          }

          .chat{
          width:100%;
          height:80%;
          background:#191919;
          display:flex;
          flex-direction:column;
          align-items:flex-end;
          justify-content:flex-end;
          padding-bottom:20px;
          }
          .stampContainer{
          width:100%;
          display:flex;
          justify-content:center;
          align-items:center;
          }
          .stamp{
          background:#29361b;
          opacity:0.8;
            display:flex;
          justify-content:center;
          align-items:center; 
          padding-left:20px;
          padding-right:20px;
          padding-top:8px;
          padding-bottom:8px;
          border-radius:5px;
          }

          .chatContent{
          padding-right:10px;
          }

          .chatFooter{
          padding-top:15px;
          width:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#121212;
          border-top:3px solid #2c2c2a;
          }

          .keyboard{
          width:70%;
          display:flex;
          justify-content:center;
          align-items:center;
          input{
          width:80%;
          height:35px;
          background:#2c2c2a;
          padding-left:15px;
          font-size:16px;
          border-top-left-radius:10px;
          border-bottom-left-radius:10px;
          }
        
          }

          .keyIcon{
          height:35px;
          display:flex;
          justify-content:center;
          align-items:center;
          border-top-right-radius:10px;
          border-bottom-right-radius:10px;
          background:#2c2c2a;
          padding-right:15px;
          img{
           filter: brightness(0) invert(1);
           width:20px;
           height:20px;
          }
          }
        .footerIcons{
        display:flex;
        align-items:center;
        gap:10px;
        img{
        width:24px;
        height:22px;
         filter: brightness(0) invert(1);
        }
         h1{
         font-size:30px;
         }
        }
     
      `}</style>
            <div className="messageTitleWrap">
                <div className="messagesTitle">
                    <div className="titleContent">
                        <h2 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>{'<'}</h2>
                        <div className="icon"><p>L</p></div>
                        <h2>Lobby</h2>
                    </div>

                    <div className="messageIcons">
                        <Phone width={24} height={24} style={{ color: "white", fontSize: "24px" }} />
                        <img src={cam} />
                    </div>
                </div>
            </div>
            <div className="chat">
                <div className="stampContainer">
                    <div className="stamp">
                        <p>Today</p>
                    </div>
                </div>

                <div className="chatContent">
                    <Message content='Vozi' time='3 hours ago' />
                </div>

            </div>
            <div className="chatFooter">
                <div className="keyboard">
                    <input id='send' type='search' placeholder='Text Message' />

                    <div className="keyIcon">
                        <img src={send} />
                    </div>

                </div>
                <div className="footerIcons">
                    <img src={mic} />
                    <h1>+</h1>
                </div>
            </div>
        </div>



    );
};

export default MessagesApp;
