import React from "react";
import LaborRow from "./LaborRow";
import { useHistory } from 'react-router-dom';
const LaborApp: React.FC = () => {
  const history = useHistory();
  return (
    <div className="labor-container">
      <style>{`
        .labor-container {
          background: #131313;
          height: 88vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .labor-title {
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
        .labor-title img.people-img {
          margin-left: 230px;
          width: 24px;
          height: 24px;
          filter: brightness(0) invert(1);
        }
        h1,h2,h3,h4,h5,h6,p{
        color:white;
        }
        .labor-title h2 {
          color: white;
        }
        .laborContent{
         width:90%;
         height:90%;
         overflow-y: auto;
         display:flex;
         flex-direction:column;
         align-items:center;
         gap:15px;
         padding-top:15px;
        }
      `}</style>
      <div className="labor-title">
        <h2 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>{'<'}</h2>
        <h2>Labor</h2>
        <img src="/media/people.png" alt="People" className="people-img" />
      </div>
      <div className="laborContent">
        <LaborRow title="Salvaging" people="15" reward layoutType="layout3" border="#7b2322" />
        <LaborRow title="Hunting" layoutType="layout2" border="#7b2322" />
        <LaborRow title="Garbage" people="15" reward layoutType="layout3" border="#8b8b8b" />
        <LaborRow title="Brush" layoutType="layout1" border="#8b8b8b" />
        <LaborRow title="Pressure Wash" people="60" layoutType="layout4" border="#516d7f" />
        <LaborRow title="Electrical Job" people="50" layoutType="layout4" border="#7c7d17" />

      </div>
    </div>
  );
};

export default LaborApp; 