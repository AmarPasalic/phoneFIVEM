import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import CryptoRow from './CryptoRow';
const Blank = () => {
  const history = useHistory();
  return (
    <div className="crypto-container">
      <style>{`
        .crypto-container {
          background: #131313;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .crypto-title {
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

        .cryptoHeader{
        width:90%;
        padding-top:30px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        }

        .cryptoTxt{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        justify-content:center;
        h5{
        color:#5b5559;
        font-size:16px;
        margin:0;
      }
        h1{
        font-size:30px;
        margin:0;
        }
      }

      .cryptoButtons{
      display:flex;
      align-items:center;
      gap:10px;
      h5{
      font-size:18px;
      color:#5b5358;
      }
      }
        .cryptoButton{
        width:80px;
        height:40px;
        border:2px solid #36611d;
        background:#1b1c15;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:10px;
        h3{
        font-size:16px;
        }
        }

        .cryptoContent{
        width:90%;
        padding-top:20px;
        gap:20px;
        display:flex;
        flex-direction:column;
        align-items:center;
        flex: 1 0 auto;
        overflow-y: auto;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
        }
        .cryptoContent::-webkit-scrollbar {
          display: none;
        }
        /* Prevent children from shrinking */
        .cryptoContent > * {
          flex-shrink: 0;
        }

      `}</style>
      <div className="crypto-title">
        <h1 style={{ cursor: 'pointer' }} onClick={() => history.push('/')}>{'<'}</h1>
        <h2>Crypto</h2>
      </div>
      <div className="cryptoHeader">
        <div className="cryptoTxt">
          <h5>WALLET</h5>
          <h1>17435</h1>
        </div>
        <div className="cryptoButtons">
          <div className="cryptoButton">
            <h3>Wallet</h3>
          </div>
          <h5>Exchange</h5>
        </div>
      </div>
      <div className="cryptoContent">
        <CryptoRow title='Forge' txtColor='#277e93' txt='{SSCRIPT}' main='0 SCRIPT' value='0' background='#1f2c39' />
        <CryptoRow title='Loaded' txtColor='white' txt='{SGG}' main='0 GG' value='0' background='#3b3a3d' />
        <CryptoRow title='Trojan' txtColor='#649b28' txt='{$TRJ}' main='0 TRJ' value='0' background='#1e2f1b' />
      </div>
    </div>
  );
};

export default Blank;

export const CryptoApp: React.FC = () => {
  return (
    <Switch>
      <Route path="/crypto" exact component={Blank} />
    </Switch>
  );
}; 