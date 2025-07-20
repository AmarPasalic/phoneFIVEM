import React from 'react'
import heart from "/media/favorite.png"
import fire from "/media/fire.png"
import timeIcon from "/media/time.png"

interface Props {
    image?: string;
    title: string;
    time: string;
    source: string;
}
const NewsRow: React.FC<Props> = ({ image, title, time, source }) => {
    return (
        <div className="rowContainer">
            <style>{`
        .rowContainer{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        gap:15px;
        }
        img{
        width:24px;
        height:24px;
        }
        .rowImage{
        width:100%;
        height:25vh;
        position:relative;
      
        }
        .rowSlika{
           width:100%;
        height:100%;
        border-radius:5px;
        }
        .rowBlock{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        }
 .imageIcon{
 position:absolute;
 top:10px;
 right:10px;
 background:#ed5d1e;
 oppacity:0.8;
 border-radius:5px;
 display:flex;
 justify-content:center;
 align-items:center;
 width:35px;
 height:35px;
 img{
 filter: brightness(0) invert(1);
 }
 }

 .rowTitleWrap{
 width:100%
 display:flex;
 justify-content:flex-start;
 align-items:center;
 border-left:4px solid #71b729;
 padding-left:5px;
 h1{
 font-size:17px;
 line-height:32px;
 }
 }
  .rowFooter{
 width:100%;
 display:flex;
 align-items:center;
 justify-content:space-between;
 img{
filter: grayscale(100%) brightness(2) contrast(0.5);
opacity: 0.6;
 }
 }
 .rowTime{
 display:flex;
 align-items:cemter;
 font-size:14px;
 gap:10px;
 h3{
 }
 h4{
 color:#868384;
 }
 img{
 width:20px;
 height:20px;
 }
 }



        `}</style>
            <div className="rowImage">
                {image ? <img className='rowSlika' src={image} /> : <div className='rowBlock'><h1>IMAGE</h1></div>}
                <div className="imageIcon"><img src={fire} /> </div>
            </div>
            <div className="rowTitleWrap">
                <div className="rowTitle"><h1>{title}</h1></div>
            </div>
            <div className="rowFooter">
                <div className="rowTime">
                    <img src={timeIcon} />
                    <h3>{time}</h3>
                </div>

                <div className="rowTime">
                    <h4>{source}</h4>
                    <img src={heart} />
                </div>
            </div>
        </div>
    )
}

export default NewsRow