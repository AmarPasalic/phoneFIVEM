import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { UserRound } from 'lucide-react';
import BrowseAdsAppWrapper from "./BrowseAdsAppWrapper";
import BrowseAdsRow from "./BrowseAdsRow";
import { useHistory } from 'react-router-dom';

const BrowseAdsApp: React.FC = () => {
  const history = useHistory();
  return (
    <div className="browseads-container">

      <style>{`
        .browseads-container {
          background: #131313;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }
        .browseads-title {
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
        .browseads-title img {
          width: 32px;
          height: 32px;
        }
        .browseads-title h2 {
          color: white;
        }
          h1,h2,h3,h4,h5,h6,p{
          color:white;
          }
        
          .header{
          width:90%;
          display:flex;
          flex-direction:column;
          align-items:center;
          padding-top:15px;
          gap:15px;
         h1{
         color:#f19d18;
         font-size:30px;
         }
         p{
         font-size:15px;
         }
          }
             
          .search{
          width:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          input{
          width:80%;
          height:5vh;
          background:#28282a;
          font-size:14px;
          padding:10px;
            border-top-left-radius: 5px;
            border-bottom-left-radius:5px;
          }
          }
          .searchIcon{
          width:21%;
          height:5vh;
          background:#28282a;
          display:flex;
          justify-content:center;
          align-items:center;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          }
          .ads{
          padding-top:20px;
          width:90%;
          displaf:flex;
          flex-direction:column;
          align-items:center;
          gap:10px;
          }

      `}</style>
      <div className="browseads-title">
        <h2 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>{'<'}</h2>
        <h2>Browse Ads</h2>
      </div>
      <div className="header">
        <h1>Yellow Pages</h1>
        <p>Connect with your local businesses and services.
          Discover trusted providers, compare prices, and find what you need, all in one place</p>
        <div className="search">
          <input placeholder="Search" type="search" />
          <div className="searchIcon">
            <SearchIcon style={{ color: "white" }} />
          </div>
        </div>
      </div>
      <div className="ads">
        <BrowseAdsRow title="Selling Cypher 160K" description="Stock with lvl3 suspension, can be A+ for more $" price="160,000" time="4 minutes ago" user="Que Wheeler" />
      </div>
    </div>
  );
};

export default BrowseAdsApp; 