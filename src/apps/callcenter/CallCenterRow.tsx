import React from 'react'
interface Props{
    title:string,
    number:string,
}
const CallCenterRow:React.FC<Props> = ({title,number}) => {
  return (
   <div className="rowContainer">
    <style>{`
    .rowContainer{
    width:100%;
    height:20vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-shrink: 0;
    }
    `}</style>
    <div className="rowWrapper">
        <div className="rowContent">
            <div className="txt">
                <h1>{title}</h1>
                <p>{number}</p>
            </div>
        </div>
    </div>
   </div>
  )
}

export default CallCenterRow