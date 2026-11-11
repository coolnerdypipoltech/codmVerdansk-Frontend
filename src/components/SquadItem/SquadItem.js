import "./SquadItem.css";

import {
squad_text,
squad_num
} from "../../assets/assetsDirectory";


const SquadItem = ({ number, text, character }) => {

    
let characterHelper = false;

if(character !== null && character !== undefined){
    characterHelper = true;
}



return (
<div className="squadItem-container">

    <div className="squadItem-images">
        {characterHelper ? (<><img className="squadItem-character" src={character} alt="num"></img></>) : (<><img src={squad_num} alt="num"></img>
        <p className="squadItem-num">{number}</p></>)}

    </div>

     <div className="squadItem-images" >
        <img src={squad_text} alt="text" className="squadItem-text-img"></img>
        <p className="squadItem-text" style={{left: characterHelper && "25%"}}>
            {text}
        </p>
    </div>

</div>
);

};

export default SquadItem;
