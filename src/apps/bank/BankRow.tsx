import React from 'react'
interface Props {
    title: string,
    txt: string
}
const BankRow: React.FC<Props> = ({ title, txt }) => {
    return (
        <div className="rowContainer">
            <style>
                {`
                .rowContainer{
                width:100%;
                height:10vh;
                 display:flex;
                 flex-direction:column;
                 align-items:flex-start;
                 gap:2px;
                 p{
                 color:#7a797c;
                 font-size:16px;
                 }
                 h1{
                 font-size:23px;
                 }
                }
        
        `}
            </style>

            
                <p>{title}</p>
                <h1>{txt}</h1>
            
        </div>
    )
}

export default BankRow