import React from "react"
import CallCenterRow from "./CallCenterRow";
import news from "/media/newspaper-folded.png"
import { useHistory } from 'react-router-dom';

const Blank = () => {
  const history = useHistory();
  return (
    <div className="callcenter-container">
      <style>{`
        .callcenter-container {
          background: #131313;
          min-height:88vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        
        }
          h1,h2,h3,h4,h5,h6,p{
          color:white;
          }
        .callcenter-title {
          padding-left: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          height: 7vh;
          background: #111111;
          border-bottom: 1px solid #242444;
        }
          .callcenter{
          width:90%;
          height: 100%;
          overflow-y: auto;
          display:flex;
          flex-direction:column;
          align-items:center;
          }
       

      `}</style>
      <div className="callcenter-title">
        <h1 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>{'<'}</h1>
        <h2>Call Center</h2>
      </div>

      <div className="callcenter">
        <CallCenterRow title="Jacks Used Cars" number="080-008" />
        <CallCenterRow title="Strokemasters" number="080-006" />
        <CallCenterRow title="Southside Pawn" number="080-013" />
        <CallCenterRow title="Premium Deluxe Motorsport" number="080-000" />
        <CallCenterRow title="Auzzie Angels" number="080-011" />
      </div>
    </div>
  );
};

export const CallCenterApp: React.FC = () => {
  return <Blank />;
}; 