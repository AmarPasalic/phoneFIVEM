import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SettingsRow from './SettingsRow';
const SettingsPlayground = () => {
  return (
    <div className="container1">
      <style>
        {`
          .container1 {
            background: #222220;
            height:100%;
            width:100%;
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:20px;
          }

          h1,h2,p{
            color:white;
          }
          .title{
          padding-left:10px;
            width:100%;
            display:flex;
            align-items:center;
            gap:10px;
            height:7vh;
            background:#111111;
          }
          .content{
            width:100%;
            height:80%;
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:3vh;
          }
            .details{
            width:90%;
            height:15%;
            border:1px solid #4a4a4a;
            border-radius:10px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding:10px;
            .txt{
            p{
            font-size:12px;
            }
            }
            }
          .notifications{
          width:90%;
          height:30%;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:10px;
         
          }
            .notificationTxt{
            width:100%;
            display:flex;
            align-items:center;
           margin-bottom:10px;
          }

            .costomization{
            width:90%;
            height:40%;
              display:flex;
          flex-direction:column;
           align-items:center;
           gap:10px;
            }


        `}
      </style>
      <div className="title">
        <h1>&lt;</h1>
        <h2>Settings</h2>
      </div>
      <div className="content">
        <div className="details">
          <div className="txt">
            <h2>Personal Details</h2>
            <p>View Personal Details</p>
          </div>
          <div className="icon"><ArrowRight style={{ color: 'white' }} size={20} /></div>
        </div>
        <div className="notifications">
          <div className="notificationTxt">
            <h1>Notifications</h1>
          </div>
          <SettingsRow txt='General' icon={<img src="/media/turn-on.png" alt="turn on" style={{ width: '20px', height: '20px' }} />} />
          <SettingsRow txt='Applications' icon={<ArrowRight size={20} style={{ color: 'white' }} />} />

        </div>
        <div className="costomization">
          <div className="notificationTxt">
            <h1>Customization</h1>
          </div>
          <SettingsRow txt='Sounds' icon={<ArrowRight size={20} style={{ color: 'white' }} />} />
          <SettingsRow txt='Wallpaper' icon={<ArrowRight size={20} style={{ color: 'white' }} />} />
          <SettingsRow txt='Zoom' isUnique={true} />
        </div>

      </div>
    </div>
  );
};

export const SettingsApp: React.FC = () => {
  return (
    <Switch>
      <Route path="/settings" exact component={SettingsPlayground} />
    </Switch>
  );
};
