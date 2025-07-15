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
        
        `}
            </style>

            <div className="rowWrapper">
                <p>{title}</p>
                <h1>{txt}</h1>
            </div>
        </div>
    )
}

export default BankRow