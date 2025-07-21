import React from 'react'
import icon from "/media/people.png"
import star from "/media/star.png"
import coin from "/media/coin.png"
interface Props {
    title: string,
    people?: string,
    img?: string,
    reward?: boolean,
    layoutType: 'layout1' | 'layout2' | 'layout3' | 'layout4',
    border: string,
}

const LaborRow: React.FC<Props> = ({ title, people, reward, layoutType, img, border }) => {
    const renderButtons = () => {
        switch (layoutType) {
          case 'layout1':
            return <Layout1 />;
          case 'layout2':
            return <Layout2 />;
          case 'layout3':
            return <Layout3 />;
          case 'layout4':
            return <Layout4 />;
          default:
            return null;
        }
      };
    return (
        <div style={{ border: `1px solid ${border}` }} className="rowContainer">
            <style>{`
          .rowContainer{
          width:100%;
          display:flex;
         justify-content:center;
          align-items:center;
          border-radius:5px;
          padding-top:20px;
          padding-bottom:30px;
          }
          .rowWrapper{
          width:90%;
          height:90%;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:20px;
          }
          .rowMain{
          width:100%;
          display:flex;
          align-items:center;
          justify-content:space-berween;
          gap:10px;
          }
           .rowImg{
           width: 100px;
           height:14vh;
           img{
           width:100%;
           height:100%;
           border-radius:5px;
           }
           }
           .block{
           width:100%;
           height:100%;
           display:flex;
           justify-content:center;
           align-items:center;
           background:black;
            border-radius:5px;
           }

           .rowTxt{
           display:flex;
           flex-direction:column;
           align-items:flex-start;
           gap:12px;
           img{
           width:16px;
           height:16px;
            filter: brightness(0) invert(1);
           }
           }

           .rowTitle{
           display:flex;
           align-items:center;
           gap:5px;
           }
           .people{
           background:#292b2d;
           border-radius:5px;
           display:flex;
           justify-content:center;
           align-items:center;
           gap:5px;
           height:30px;
          width:50px;
           p{
           font-size:16px;
           }
           }
          .reward{
          display:flex;
          align-items:center;
          gap:10px;
          h1{
          font-size:18px;

          color:#625c60;
          }
          span{
          font-size:18px;
          color:white;
          }
          }

          .reputation{
          display:flex;
          align-items:center;
          gap:35px;
          justify-content:space-between;
          h1{
          font-size:16px;
          color:#625c60;
          }
          h2{
          font-size:16px;
          }
          }
          .progress{
          width:185px;
          height:5px;
          background:#625c60;
          border-radius:15px;
          }
          .rowButtons{
          width:100%;
          display:flex;
          justify-content:center;
          align-items:center;
          h1{
          font-size:16px;
          }
          }
          .container1{
          width:100%;
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:10px;
          }

        `}</style>
            <div className="rowWrapper">
                <div className="rowMain">
                    <div className="rowImg">
                        {img ? <img src={img} /> : <div className='block'><h1>IMAGE</h1></div>}
                    </div>
                    <div className="rowTxt">
                        <div className="rowTitle">
                            <h1>{title}</h1>
                            <div className="people">
                                <img src={icon} />
                                <p>{people|| "?"}</p>
                            </div>
                            <div className="people">
                                <img src={star} alt="star" />
                            </div>

                        </div>
                        {reward && <div className='reward'>
                            <img src={coin} />
                            <h1>Reward: <span>$100</span></h1>
                        </div>}
                        <div className="reputation">
                            <h1>Reputation</h1>
                            <h2>No Rank</h2>
                        </div>
                        <div className="progress">
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
                <div className="rowButtons">
                  {renderButtons()}
                </div>
            </div>
        </div>
    );
}


const Layout4 = () => (
    <div className="container1">
        <style>{`
        .buttons{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
        }
        .button{
        background:#393c3b;
        border-radius:10px;
        display:flex;
        justify-content:center;
        align-items:center;
        padding-left:23px;
        padding-right:23px;
        padding-top:6px;
        padding-bottom:6px;
        }
        .bigButton{
        width:100%;
         display:flex;
        justify-content:center;
        align-items:center;
         padding:10px;
         background:#393c3b;
         padding-top:10px;
         padding-bottom:10px;
         border-radius:10px;
        }
        `}</style>
        <div className="buttons">
            <div className="button">
                <h1>Start</h1></div>
            <div className="button">
                <h1>Map</h1>
            </div>
            <div className="button">
                <h1>Progression</h1>
            </div>
        </div>
        <div className="bigButton">
            <h1>Create Group</h1>
        </div>
    </div>
)

const Layout1 = () => (
    
        
        <div className="bigButton">
            <style>{``}</style>
            <h1>Progression</h1>
        </div>

   
)

const Layout3 = () => (
   
        
        <div className="buttons">
            <style>{`
                 .button1{
        background:#393c3b;
        border-radius:10px;
        display:flex;
        justify-content:center;
        align-items:center;
        padding-left:14px;
        padding-right:14px;
        padding-top:6px;
        padding-bottom:6px;
      
        }

         .button2{
        background:#393c3b;
        border-radius:10px;
        display:flex;
        justify-content:center;
        align-items:center;
        padding-left:15px;
        padding-right:15px;
        padding-top:6px;
        padding-bottom:6px;
      
        }

            `}</style>
            <div className="button2">
                <h1>Start</h1>
            </div>
            <div className="button2">
                <h1>Progression</h1>
            </div>
            <div className="button1">
           <h1>Create group</h1>
            </div>
        </div>

    
)

const Layout2= ()=>(
<div className="buttons1">
    <style>
        {`
          .buttons1{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:15px;
        }
        `}
    </style>
    <div className="button">
        <h1>Enable Blips</h1>
    </div>
    <div className="button">
        <h1>Progression</h1>
    </div>
</div>
)






export default LaborRow