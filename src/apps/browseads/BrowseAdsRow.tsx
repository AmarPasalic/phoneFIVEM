import React from 'react'
import fire from "/media/fire.png"
import timeIcon from "/media/time.png"
import { UserRound } from 'lucide-react';
interface Props {
    title: string,
    img?: string,
    description: string,
    price: string;
    time: string;
    user: string;
}
const BrowseAdsRow: React.FC<Props> = ({ title, img, description, price, time, user }) => {
    return (
        <div className="rowContainer">
            <style>{`

.rowContainer{
width:100%;
display:flex;
justify-content:center;
align-items:center;
}

.rowWrapper{
width:90%;
display:flex;
flex-direction:column;
align-items:flex-start;
gap:15px;
}


.rowHeader{
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
h1{
color:#9c7922;
font-size:16px;
}
}
.sellButton{
width:85px;
height:45px;
display:flex;
justify-content:center;
align-items:center;
background:#2a332a;
    opacity: 0.8;
border:1px solid #496349;
border-radius:10px;
padding:8px;
p{
font-size:14px;
}
}


 .headerIcon
 {
            background:#ed5d1e;
 opacity:0.8;
 border-radius:5px;
 display:flex;
 justify-content:center;
 align-items:center;
 width:40px;
 height:40px;
 img{
 filter: brightness(0) invert(1);
 width:24px;
 height:24px;
 }
            }

            .rowImg{
            width:100%;
            height:25vh;
            img{
            width:100%;
            height:100%;
            border-radius:5px;
            }
            }
            .block{
            width:100%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            background:black;
            border-radius:5px;
            }
            .rowDescription{
            width:95%;
            align-self:center;
            p{
            font-size:18px;
            }
            }

            .rowPrice{
            align-self:center;
            width:95%;
            display:flex;
            align-items:center;
            jsutify-content:flex-start;
            span{
            color:#9c7922;
            }
            h3{
            font-size:16px;
            }
            }

            .rowButtons{
            width:95%;
            gap:10px;
            align-self:center;
            display:flex;
            align-items:center;
            justify-content:flex-start;
            }
            .rowButton{
            padding:10px;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#292520;
            border:1px solid #484441;
            border-radius:5px;
            p{
            font-size:16px;
            }
            }
            .rowFooter{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            img{
            width:18px;
            height:18px;
            filter: brightness(0) invert(1);
            }
            }

            .footerTxt{
            display:flex;
            align-items:center;
            gap:10px;
            h4{
            font-size:15px;
            }
            }

        
        `}</style>
            <div className="rowWrapper">
                <div className="rowHeader">
                    <h1>{title}</h1>

                    <div className="sellButton">
                        <p>Want-To-Sell</p>
                    </div>
                    <div className="headerIcon">
                        <img src={fire} />
                    </div>
                </div>
                <div className="rowImg">
                    {img ? <img src={img} /> : <div className='block'><h1>IMAGE</h1></div>}
                </div>
                <div className="rowDescription">
                    <p>{description}</p>
                </div>
                <div className="rowPrice">
                    <h3><span>$</span>  {price}</h3>
                </div>
                <div className="rowButtons">
                    <div className="rowButton">
                        <p>Deatils</p>
                    </div>
                    <div className="rowButton">
                        <p>Call</p>
                    </div>
                    <div className="rowButton">
                        <p>Message</p>
                    </div>
                </div>
                <div className="rowFooter">
                    <div className="footerTxt">
                    <img src={timeIcon}/>
                    <h4>{time}</h4>
                    </div>
                    <div className="footerTxt">
                        <UserRound style={{color:"white", fontSize:"18px"}}/>
                        <h4>{user}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseAdsRow