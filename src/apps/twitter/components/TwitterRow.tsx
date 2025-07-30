import React from 'react'

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
                    {mainImg ? <img src={mainImg} alt="main" /> : <div className='cube'> </div>}
                </div>
                <div className="footer">
                    <div className="likes">
                        <p>{likeCount || 0} Likes</p>
                    </div>
                    <div className="reposts">
                        <p>{repostCount || 0} Reposts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwitterRow