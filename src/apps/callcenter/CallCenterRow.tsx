import React from 'react'
import phone from '/media/telephone.png'
interface Props {
    title: string,
    number: string,
}
const CallCenterRow: React.FC<Props> = ({ title, number }) => {
    return (
        <div className="rowContainer">
            <style>{`
    .rowContainer{
    width:100%;
    height:20vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-shrink: 0;
    border-top:1px solid #202020;
    border-bottom: 1px solid #202020;
    }
    .rowWrapper{
    width:100%;
    height:60%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:15px;
    background:#51473b;
    }
    .rowContent{
    width:90%;
    height:90%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    }
.txt{
p{
color:#787b78;
font-size:16px;
}
h1{
font-size:20px;
}
}
    .circle{
    width:40px;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100%;
    background:#ea9f29;
    img{
    width:25px;
    height:25px;
    filter: brightness(0) invert(1);
    }
    }
    `}</style>
            <div className="rowWrapper">
                <div className="rowContent">
                    <div className="txt">
                        <h1>{title}</h1>
                        <p>{number}</p>
                    </div>
                    <div className="circle">
                        <img src={phone}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallCenterRow