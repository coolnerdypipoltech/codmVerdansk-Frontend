
import './Counter.css';

const Counter = () => {

  

  return (
    <div className="counter-container"> 
      <div className="counter-inner">
        <p style={{ color: "#D6A92D", fontSize: "54px" }}>01</p>
        <p style={{ color: "white", fontSize: "24px" }}>DÍA</p>
      </div>

      <div className="counter-inner">
        <p style={{ color: "#D6A92D", fontSize: "54px" }}>15</p>
        <p style={{ color: "white", fontSize: "24px" }}>HORA</p>
      </div>
      <div className="counter-inner">
        <p style={{ color: "#D6A92D", fontSize: "54px" }}>30</p>
        <p style={{ color: "white", fontSize: "24px" }}>MIN</p>
      </div>

      <div className="counter-inner">
        <p style={{ color: "#D6A92D", fontSize: "54px" }}>48</p>
        <p style={{ color: "white", fontSize: "24px" }}>SEG</p>
      </div>
    
    </div>
  );
};

export default Counter;
