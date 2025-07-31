import React from 'react'
import repost from "/media/refreshing.png"
import like from "/media/favorite.png"
interface Props {
    userImg?: string,
    userName: string,
    time: string,
    txt: string,
    mainImg?: string,
    likeCount?: number,
    repostCount?: number,
}

const TwitterRow: React.FC<Props> = ({ userImg, userName, time, txt, mainImg, likeCount, repostCount }) => {
    return (
        <div className="rowContainer">
            <style>{`
            .rowContainer{
            width:100%;
            display:flex;
            justify-content: center;
            align-items: center;
            background:#151515;
            border: 1px solid #454545;
            border-radius: 10px;
            }
            .rowWrapper{
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 20px;
            gap:20px;
            }
           
            .header{
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            }
            .profile{
            display: flex;
            align-items: center;
            gap: 10px;
            h1{
            font-size: 14px;
             text-decoration: underline;
            }
             img{
                 width:35px;
            height:35px;
            border-radius: 100%;
             }
            }
            .circle{
            width:35px;
            height:35px;
            border-radius: 100%;
            background:white;
            }
            .time p{
            font-size: 13px;
            color:#434041;
            }
            .txt{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
            p{
            font-size: 18px;
            }
            }
            .main{
            width:100%;
            height:20vh;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
            }
            }

            .cube{
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background:black;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            }
         
            .footer{
            width:100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
            width: 20px;
            height: 20px;
              filter: brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(90%);
            }
            }
            .interactions{
            display: flex;
            align-items: center;
            gap: 10px;
            }
            .likes, .reposts{
            display: flex;
            align-items: center;
            gap: 5px;
            p{
            font-size: 16px;
            }
            }
            .btn{
            width: 80px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background:#1f1f1f;
            border-radius: 10px;
            border: 1px solid  #636363;
            }
            
        
        `}</style>
            <div className="rowWrapper">
                <div className="header">
                    <div className="profile">
                        {userImg ? <img src={userImg} alt="profile" /> : <div className='circle' > </div>}
                        <h1>{userName}</h1>
                    </div>
                    <div className="time">
                        <p>{time}</p>
                    </div>
                </div>
                <div className="txt">
                    <p>{txt}</p>
                </div>
                <div className="main">
                    {mainImg ? <img src={mainImg} alt="main" /> : <div className='cube'> L </div>}
                </div>
                <div className="footer">
                    <div className="interactions">
                        <div className="likes">
                            <img src={like} alt="Like" />
                            <p>{likeCount || 0} </p>
                        </div>
                        <div className="reposts">
                            <img src={repost} alt="repost" />
                            <p>{repostCount || 0} </p>
                        </div>
                    </div>
                      <div className="btn">
                        <h1>Reply</h1>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default TwitterRow