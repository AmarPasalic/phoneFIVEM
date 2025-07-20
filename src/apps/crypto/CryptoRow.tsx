import React from 'react'
interface Props {
    icon?: string;
    title: string;
    txtColor: string;
    txt: string;
    main: string;
    value: string;
    background: string;
}
const CryptoRow: React.FC<Props> = ({ icon, title, txtColor, txt, main, value, background }) => {
    return (
        <div style={{ background: background }} className="rowContainer">
            <style>{`
        .rowContainer{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:5px;
        border:1px solid #2f2e33;
        padding-top:20px;
        padding-bottom:20px;
        }

        .rowWrapper{
        width:90%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        gap:10px;
        }
       .rowHeader{
       display:flex;
       align-items:center;
       gap:10px;
       h4{
       color:#656167;
       font-size:18px;
       }
       }
        .circle{
        width:38px;
        height:38px;
        border-radius:100%;
        background:black;
        }

        .rowMain{
        h1{
        font-size:34px;
        }
        span{
        color:#8e929a;
        }
        }
        .rowButtons{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        gap:10px;
     }

            .rowButton{
            width:80px;
            height:40px;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#434d59;
            border:1px solid #5d656d;
            border-radius:10px;
            p{
            font-size:12px;
            }
            }

        
        `}</style>
            <div className="rowWrapper">
                <div className="rowHeader">
                    {icon ? <img src={icon} alt='icon' /> : <div className='circle'></div>}
                    <h4>{title} <span style={{ color: txtColor }}>{txt}</span></h4>
                </div>
                <div className="rowMain">
                    <h1>{main} <span>(${value})</span></h1>
                </div>
                <div className="rowButtons">
                    <div className="rowButton">
                        <p>Transfer</p>
                    </div>
                    <div className="rowButton">
                        <p>History</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoRow