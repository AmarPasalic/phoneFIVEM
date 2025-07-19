import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BrowserRow from './BrowserRow';
const Blank = () => {
  return (
    <div className="container1">
      <style>{`
        .container1 {
          background: #010101;
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
        .header{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        padding-top:20px;
        padding-bottom:20px;
        font-size:28px;
        }
       .content{
       width:90%;
       display:flex;
       flex-direction:column;
       align-items:center;
       gap:15px;
       flex: 1;
       overflow-y: auto;
       /* Hide scrollbar for Webkit browsers */
       scrollbar-width: none; /* Firefox */
       -ms-overflow-style: none;  /* IE and Edge */
       }
       .content::-webkit-scrollbar {
         display: none;
       }
      `}</style>
      <div className="title">
        <h1>&lt;</h1>
        <h2>Company Browser</h2>
      </div>
      <div className="header">
        <h1>Currently Open</h1>
      </div>
      <div className="content">
        <BrowserRow title='Farmer Markets' />
        <BrowserRow title='Premium Deluxe Motorsport' paragraph='LS Premium Car Dealership' />
      </div>

    </div>
  )
};

export const BrowserApp: React.FC = () => {
  return (
    <Switch>
      <Route path="/browser" exact component={Blank} />
    </Switch>
  );
};
