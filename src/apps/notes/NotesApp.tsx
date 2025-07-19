import React from 'react';
import NotesRow from './NotesRow';
const Blank = () => {
  return (
    <div className="container1">
      <style>{`
        .container1 {
          background: #222220;
          height:100%;
          width:100%;
          display:flex;
          flex-direction:column;
          align-items:center;
        }
        .title{
          padding-left:10px;
          width:100%;
          display:flex;
          align-items:center;
          gap:10px;
          height:7vh;
          background:#111111;
          border-bottom:1px solid #242424;
        }
        h1,h2,h3,h4,h5,h6,p{
          color:white;
        }
          .content{
          width:100%;
          display:flex;
          flex-direction:column;
          }
       
     
      `}</style>
      <div className="title">
        <h1>&lt;</h1>
        <h2>Inbox</h2>
      </div>
      <div className="content">
      <NotesRow mail='goverment@prodigy.rp' txt='Welcome to San Andreas' days='5'/>
      <NotesRow mail='goverment@prodigy.rp' txt='Welcome to San Andreas' days='5'/>
      <NotesRow mail='goverment@prodigy.rp' txt='Welcome to San Andreas' days='5'/>
      <NotesRow mail='goverment@prodigy.rp' txt='Welcome to San Andreas' days='5'/>
      </div>
    </div>
  );
};

export const NotesApp: React.FC = () => {
  return <Blank />;
};
