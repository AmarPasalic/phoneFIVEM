import React from 'react';
import bellImg from '../../../../public/media/bell.png';
import locationImg from '../../../../public/media/location.png';

interface Props {
  title: string;
  img?: string;
  paragraph?: string;
}

const BrowserRow: React.FC<Props> = ({ title, img, paragraph }) => {
  return (
    <div className="rowContainer">
      <style>
        {`
     .rowContainer{
     width:100%;
     display:flex;
     justify-content:center;
     align-items:center;
     background:#443c31;
     border-radius:10px;
     }

.rowWrapper{
width:90%;
padding-top:10px;
padding-bottom:15px;
display:flex;
gap:10px;
flex-direction:column;
}

.image{
width:100%;
height:20vh;
img{
width:100%;
height:100%;
}
}

.blck{
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
background:black;
border-radius:5px;
}
.rowMain{
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
}
.rowTxtWrapper{
display:flex;
align-items:center;
justify-content:center;
gap:10px;
position:relative;

}

.rowTxtWrapper img{
width:16px;
height:16px;
filter: invert(1) brightness(2);
position:absolute;

}
.rowTxtWrapper :nth-child(2) {
  left: 160px;
}
.rowTxtWrapper :nth-child(3) {
  left: 180px;
}

.rowTxt h1{
width:150px;
font-size:18px;
display:flex;
}

.rowTxt p{
font-size:16px;
color:#8d8a82;
}
.rowButton{
width:50px;
height:25px;
display:flex;
justify-content:center;
align-items:center;
border:1px solid #a67c32;
border-radius:5px;
background:#6c552f;
p{
font-size:12px;
}
}

     `}
      </style>

      <div className="rowWrapper">

        <div className="image">
          {img ? <img src={img} /> : <div className="blck"><h1>IMAGE</h1></div>}
        </div>
        <div className="rowMain">
          <div className="rowTxtWrapper">
            <div className="rowTxt">
              <h1>{title}</h1>
              <p>{paragraph}</p>
            </div>
            <img src={bellImg} alt='bell' />
            <img src={locationImg} alt='location' />
          </div>
          <div className="rowButton">
            <p>Open</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BrowserRow; 