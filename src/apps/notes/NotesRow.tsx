import React from 'react'
interface Props {
    mail: string;
    txt: string;
    days: string;
}
const NotesRow: React.FC<Props> = ({ mail, txt, days }) => {
    return (
        <div className="notesContainer">
            <style>
                {`
                
                .notesContainer{
                padding-top:10px;
                padding-bottom:10px;
                width:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                background:#202713;
                border-bottom:1px solid #7e8278;
                }
                .notesWrapper{
                width:90%;
                height:90%;
                display:flex;
                justify-content:space-between;
                align-items:center;
                }
                .dotWrap{
                display:flex;
                justify-content:center;
                align-items:center;
                }
                .dot{
                width:12px;
                height:12px;
                border-radius:100%;
                background:#89e123;
                }
                .notesMain{
                width:60%;
                display:flex;
                gap:5px;
                flex-direction:column;
                align-items:flex-start;
                }

                .notesMain h5{
                font-size:16px;
                }
                .notesMain p{
                font-size:14px;
                color:#7e8278;
                }
                .notesFooter{
                height:100%;
                display:flex;
                justify-content:center;
                align-items:flex-start;
                p{
                font-size:12px;
                color:#7e8278;
                }
                }

                `}
            </style>
            <div className="notesWrapper">
                <div className="dotWrap">
                    <div className="dot"></div>
                </div>
                <div className="notesMain">
                    <h5>{mail}</h5>
                    <p>{txt}</p>
                </div>
                <div className="notesFooter">
                    <p>{days} days ago   &gt;</p>
                </div>
            </div>
        </div>
    )
}

export default NotesRow