import React from "react"
import NewsRow from "./NewsRow";
import { useHistory } from 'react-router-dom';

const NewsApp: React.FC = () => {
  const history = useHistory();
  return (
    <div className="news-container">
      <style>{`
        .news-container {
          background: #131313;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow:hiddden;
        }
          h1,h2,h3,h4,h5,h6,p{
          color:white;
          }
        .news-title {
          padding-left: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          height: 7vh;
          background: #111111;
          border-bottom: 1px solid #242444;
        }
        .news-title h1, .news-title h2 {
          color: #fff;
        }
        .news-title-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .news-title-icons {
        padding-right:20px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .news-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
          filter: invert(0.7) grayscale(1);
          opacity: 0.7;
          transition: filter 0.2s, opacity 0.2s;
          vertical-align: middle;
        }
        .news-icon.like {
          filter: invert(1);
          opacity: 1;
        }
          .newsHeader{
          width:100%;
          display:flex;
          justify-content:flex-start;
          align-items:center;
          padding:20px;
          }
          .headerBlock{
          width:150px;
          height:40px;
          display:flex;
          justify-content:center;
          align-items:center;
          background:#f15e24;
          border-radius:5px;
         
          }

          .news{
          width:92%;
          display:flex;
          gap:20px;
          flex-direction:column;
          align-items:center;
          overflow-y:auto;           /* Enable vertical scrolling */
          scrollbar-width:none;      /* Hide scrollbar in Firefox */
          -ms-overflow-style:none;   /* Hide scrollbar in IE/Edge */
          }
          .news::-webkit-scrollbar {
            display: none;           /* Hide scrollbar in Chrome/Safari */
          }
          .news > * {
            flex-shrink: 0;          /* Prevent children from shrinking */
          }

      `}</style>
      <div className="news-title">
        <div className="news-title-left">
          <h1 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>{'<'}</h1>
          <h2>News</h2>
        </div>
        <div className="news-title-icons">
          <img src="/media/like.png" alt="Like" className="news-icon like" />
          <img src="/media/newspaper-folded.png" alt="Newspaper" className="news-icon" />
          <img src="/media/compass.png" alt="Compass" className="news-icon" />
          <img src="/media/settings-1.png" alt="Settings" className="news-icon" />
        </div>
      </div>
      <div className="newsHeader">
        <div className="headerBlock">
          <h1>Trending News</h1>
        </div>
      </div>
      <div className="news">
        <NewsRow title='TRASH TROUBLE IN LOS SANTOS: CITY STREETS BECOMING A DUMPING GROUND' time='A MONTH AGO' source='OFFICIAL WEAZEL NEWS' />
        <NewsRow title='SHAKE-UP IN JUSTICE SYSTEM:  SAMANTHA HICKS STEPS INTO A NEW ROLE' time='A MONTH AGO' source='OFFICIAL WEAZEL NEWS' />
      </div>
    </div>
  );
};

export default NewsApp; 