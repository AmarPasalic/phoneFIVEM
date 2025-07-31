import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import plus from "/media/add.png"
import messageIcon from "/media/no-talking.png"
import userIcon from "/media/profile.png"
import repost from "/media/refreshing.png"
import TwitterRow from './TwitterRow';
const TwitterApp: React.FC = () => {
  const history = useHistory();
  return (
    <div className="twitter-container">
      <style>{`
        .twitter-container {
          background: #131313;
          height: 88vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .twitter-title {
          padding-left: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          height: 7vh;
          background: #111111;
          border-bottom: 1px solid #242444;
        }
        h1, h2, h3, h4, h5, h6, p {
          color: #fff;
        }
        .twitter-search {
          width: 90%;
          margin: 24px auto 0 auto;
          display: flex;
          align-items: center;
          height: 5vh;
        }
        .twitter-search input {
          width: 90%;
          height: 100%;
          background: #28282a;
          font-size: 14px;
          padding: 10px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border: none;
          color: white;
        }
        .twitter-search div {
          width: 10%;
          height: 100%;
          background: #28282a;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
          .twitterContent{
          width:90%;
          display:flex;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          overflow-y: scroll;
          height: 100%;
          scrollbar-width: none; /* Firefox */
        }
        .twitterContent::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
      <div className="twitter-title">
        <h1 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>{'<'}</h1>
        <h2>L</h2>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '18px', paddingRight: '16px' }}>
          <img src={messageIcon} alt="Message" style={{ width: 20, height: 20, filter: 'invert(1)' }} />
          <img src={plus} alt="Plus" style={{ width: 20, height: 20, filter: 'invert(1)' }} />
          <img src={userIcon} alt="User" style={{ width: 20, height: 20, filter: 'invert(1)' }} />
        </div>
      </div>
      <div className="twitter-search" style={{ width: '90%', margin: '24px auto 0 auto', display: 'flex', alignItems: 'center', height: '5vh' }}>
        <input type="search" placeholder="Search on L..." style={{ width: '90%', height: '100%', background: '#28282a', fontSize: 14, padding: 10, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, border: 'none', color: 'white' }} />
        <div style={{ width: '10%', height: '100%', background: '#28282a', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
          <SearchIcon style={{ color: 'white', fontSize: 20 }} />
        </div>
      </div>
      <div className="twitterContent">
        <TwitterRow userName='@TripleT' time='a few seconds ago' txt='Orale Homes' />
        <TwitterRow userName='@NickHead' time='2 minutes ago' txt='Hungrry?, Thirsty, come to burgershot?' />
      </div>
    </div>
  );
};

export default TwitterApp;
