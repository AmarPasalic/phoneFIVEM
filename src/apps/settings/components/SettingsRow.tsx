import React from 'react'
import { Plus, Minus } from 'lucide-react';
interface Props {
    txt: string,
    icon?: React.ReactNode,
    isUnique?: boolean
}
const SettingsRow: React.FC<Props> = ({ txt, icon, isUnique }) => {
    return (
        <div className="container">
            <style>{`
            .container{
            width:100%;
            height:55px;
           border:1px solid #4a4a4a;
            border-radius:10px;
            display:flex;
            align-items:center;
            justify-content:center;
            }
            .wrapper{
            width:90%;
            height:90%;
            display:flex;
            justify-content:space-between;
            align-items:center;
            }
.size{
color:white;
display:flex;
align-items:center;
gap:5px;
h3{
font-size:18px;
}
}

            `}</style>
            <div className="wrapper">
                <div className="txt"><h2>{txt}</h2></div>
                {isUnique ? (
                    <div className="size"> <Minus size={20} style={{ color: 'white' }} /> <h3>90%</h3> <Plus size={20} style={{ color: 'white' }} /> </div>
                ) : (
                    <div className="icon">{icon}</div>
                )}
            </div>

        </div>
    )
}

export default SettingsRow