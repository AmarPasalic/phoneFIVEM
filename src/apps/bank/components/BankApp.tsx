import { Banknote } from 'lucide-react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BankRow from '../BankRow';
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
            gap:20px;
          }
          .title{
            padding-left:10px;
            width:100%;
            display:flex;
            color:white;
            align-items:center;
            gap:10px;
            height:7vh;
            background:#111111;
          }
            h1,h2,h3,h4,h5,h6,p{
            color:white;
            }

            .header{
            width:90%;
            height:10%;
            display:flex;
            align-items:center;
            justify-content:space-between;
            }
            .headerTxt{
            height:100%;
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            justify-content:space-between;
            p{
            color:#7b7b7b;
            }
            h1{
            font-size:26px
            }
            }
            .headerButtons{
            display:flex;
            align-items:center;
            gap:10px;
            height:80%;
            h3{
            font-size:16px;
            color:#7b7b7b;
            }
            }
            .headerButton{
            width:100px;
            height:70%;
            border:2px solid #5f7f21;
            border-radius:5px;
            background:#25291f;
            display:flex;
            justify-content:center;
            align-items:center;
            }
            .headerButton h2{
            font-size:16px;
            }
            .balanceContainer{
            width:90%;
            height:25%;
            display:flex;
            justify-content:center;
            align-items:center;
              border:2px solid #313131;
              background:#242726;
              border-radius:5px;
            }
              .balanceWrapper{
              width:90%;
              height:80%;
              display:flex;
              flex-direction:column;
              align-items: flex-start;
              justify-content:space-between;
              }

              .balance{
              width:100%;
              display:flex;
              flex-direction:column;
              align-items:flex-start;
              gap:10px;
              }
              .balanceButton{
              width:20vw;
              height:5vh;
              display:flex;
              align-items:center;
              justify-content:space-between;
             border:3px solid #6a9537;
             border-radius:20px;
             background:#374427;
             padding:14px;
              p, h6{
              font-size:14px;
              }
              }
          .balanceIcon{
          display:flex;
          align-items:center;
          gap:5px;
          }
          .detailsContainer{
          width:90%;
          display:flex;
          justify-content:center;
          align-items:center;
          border:2px solid  #474747;
          background:#232325;
          border-radius:5px;
          }
          .detailsWrapper{
          width:90%;
          padding:15px;
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          }


        `}</style>
            <div className="title">
                <h1>&lt;</h1>
                <h2>Bank</h2>
            </div>
            <div className="header">

                <div className="headerTxt">
                    <p>Welcome</p>
                    <h1>J.RASHFORD</h1>
                </div>
                <div className="headerButtons">
                    <div className="headerButton">
                        <h2>Accounts</h2>
                    </div>
                    <h3>Bills</h3>
                </div>
            </div>
            <div className="balanceContainer">
                <div className="balanceWrapper">
                    <h1>TOTAL BALANCE</h1>
                    <div className="balance">
                        <h1>$10,734</h1>
                        <div className="balanceButton">
                            <p>change in last 7 days </p>
                            <div className="balanceIcon">
                                <img src="/media/banknote.png" alt='Banknote' />
                                <h6>$+9,984</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detailsContainer">
                <div className="detailsWrapper">
                    <BankRow title='NAME' txt='741660' />
                    <BankRow title='BANK NUMBER' txt='741660' />
                    <BankRow title='ACCOUNT TYPE' txt='CURRENT ACCOUNT' />
                    <BankRow title='BALANCE' txt='$10,734' />
                </div>
            </div>
        </div>
    );
};

export const BankApp: React.FC = () => {
    return (
        <Switch>
            <Route path="/bank" exact component={Blank} />
        </Switch>
    );
}; 