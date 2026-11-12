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
        {characterHelper ? (<><img className="squadItem-character" src={character} alt="num"></img></>) : (<><img src={squad_num} className="squadItem-character"  alt="num"></img>
        <div className="squadItem-holder"><p className="squadItem-num">{number}</p></div></>)}

    </div>

     <div className="squadItem-images2" >
        <img src={squad_text} alt="text" className="squadItem-text-img"></img>
        <div className="squadItem-holder"><p className="squadItem-text" style={{transform: characterHelper && "translate(20%, -50%)"}}>
            {text}
        </p></div>
        
    </div>

</div>
);

};

export default SquadItem;
