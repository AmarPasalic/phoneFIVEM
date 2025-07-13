import React from 'react'
interface Props {
    img: string,
    txt: string,
    isDownloaded?: boolean
}
const MarketPlaceRow: React.FC<Props> = ({ img, txt, isDownloaded }) => {
    return (
        
      
            <div className="container">
              <style>
                {`
                .container{
                
                width:90%;
                height:20%;
                align-items:center;
                justify-content:center;
                background:#151515;
                border-radius:10px;
                display:flex;
                }
                .wrapper{
                width:90%;
                height:8px;
                display:flex;
                align-items:center;
                gap:15px;
                position:relative;
                }
                .image{
                width:50px;
                height:50px;
                }
                .txt h1{
                font-size:18px;
                }
                .icon{
                position:absolute;
                right:0;
                width:30px;
                height:30px;
                display:flex;
                justify-self:flex-end;
                align-items:center;
                justify-content:center;
                border:1px solid #222220;
                }
                .icon img{
                width:50%;
                height:50%;
                object-fit:contain;
                filter: invert(1);
                }
                
                `}
            </style>
                <div className="wrapper">
                    <div className="image">
                        <img src={img} />
                    </div>
                    <div className="txt">
                        <h1>{txt}</h1>
                    </div>
                    <div className="icon">
                        <img src={isDownloaded ? "/media/close.png" : "/media/downloads.png"} alt={isDownloaded ? "Close" : "Download"} />
                    </div>
                </div>
            </div>
        
    )
}

export default MarketPlaceRow