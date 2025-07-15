import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MarketApp from "@apps/marketplace/components/MarketPlaceRow"
import { Search } from "lucide-react";
const MarketplacePlayground = () => {
  return (

    <div className="container1">
      <style>
        {`
          .container1 {
            background: #222220;
            height:100%;
           width:100%
            display:flex;
            flex-direction:column;
            align-items:center;
          }

          h1,h2{
          color:white
          }
          .title{
          width:100%;
          display:flex;
          align-items:center;
          gap:10px;
          padding-left:10px;
          height:7vh;
          background:#111111;
          }
        .search{
        width:90%;
        margin-top:30px;
        margin-bottom:30px;
        margin-left:5%;
        height:5vh;
        display:flex;
        align-items:center;
        align-self:center;
        }
        .search input{
         width:90%;
         height:100%;
          padding:10px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
         background:#0f0f0f;
         color:#494c4b;
         }
        .searchIcon{
          width:10%;
          height:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#0f0f0f;
          color:#494c4b;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          font-size:20px;
          cursor:pointer;
        }
          .apps{
          width:100%;
          height:70%;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:10px;
          }
          
        `}
      </style>
      <div className="title">
        <h1>&lt;</h1>
        <h1>App Store </h1>
      </div>
      <div className="search">
        <input type='search' placeholder='Search for app....' />
        <div className="searchIcon"><Search size={20} /></div>
      </div>
      <div className="apps">
        <MarketApp img='https://cdn.prodigyrp.net/phone/apps/bank.webp' txt='Bank' isDownloaded />
        <MarketApp img='https://cdn.prodigyrp.net/phone/apps/calculator.webp' txt='Calculator' isDownloaded={false} />
        <MarketApp img='https://cdn.prodigyrp.net/phone/apps/calendar.webp' txt='Calendar' isDownloaded={false} />
        <MarketApp img='https://cdn.prodigyrp.net/phone/apps/callcenter.webp' txt='Call Center' isDownloaded />
        <MarketApp img='https://cdn.prodigyrp.net/phone/apps/camera.webp' txt='Camer' isDownloaded />
        <MarketApp img='https://cdn.prodigyrp.net/phone/apps/companybrowser.png' txt='CompanyBrowser' isDownloaded />
        <MarketApp img='https://cdn.prodigyrp.net/phone/apps/comanager.webp' txt='Company Menager' isDownloaded />
      </div>
    </div>



  );
};

export const MarketplaceApp: React.FC = () => {
  return (
    <Switch>
      <Route path="/marketplace" exact component={MarketplacePlayground} />
    </Switch>
  );
};
