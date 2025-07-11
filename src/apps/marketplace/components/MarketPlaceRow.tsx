import React from 'react'
interface Props{
    img:string,
    txt:string,
    isDownloaded?:boolean
}
const MarketPlaceRow:React.FC<Props> = ({img,txt,isDownloaded}) => {
  return (
    <div className="container">
        <div className="wrapper">
            <div className="image">
                <img src={img}/>
            </div>
            <div className="txt">
                <h1>{txt}</h1>
            </div>
            <div className="icon">
                .
            </div>
        </div>
    </div>
  )
}

export default MarketPlaceRow