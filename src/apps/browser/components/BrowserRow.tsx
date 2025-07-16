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
     }

.rowWrapper{
width:90%;
padding-top:10px;
padding-bottom:10px;
display:flex;
flex-direction:column;
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