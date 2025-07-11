import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MarketApp from "@apps/marketplace/components/MarketPlaceRow"
const MarketplacePlayground = () => {
  return (
    <div>
      <style>
        {`
          .container {
            background: #222220;
            min-height: 100vh;
           
            display:flex;
            flex-direction:column;
          }

          h1,h2{
          color:white
          }
          .title{
          width:100vw;
          display:flex;
          align-items:center;
          gap:10px;
          padding-left:10px;
          height:7vh;
          background:#111111;
          }
        .search{
        margin:30px;
        min-width:80vw;
        display:flex;
        align-items:center;
        }
        .search input{
         width:80%;
         height:5vh;
         border-radius:5px;
         background:#0f0f0f;
         color:#494c4b;
        
         
         }
          
        `}
      </style>

      <div className="container">
        <div className="title">
          <h1>&lt;</h1>
          <h1>App Store </h1>
        </div>
        <div className="search">
          <input type='search' placeholder='Search for app....' />
          <div className="searchIcon">A</div>
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
