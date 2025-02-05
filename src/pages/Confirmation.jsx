import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react"; 

import CartaDeNoAdeudo from "../assets/carta-de-no-adeudo.png";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="payone-confirmation-container">
      <CheckCircle className="payone-confirmation-icon" size={80} />

      <h1 className="payone-confirmation-title">¡Enhorabuena, tu carta de no adeudo te llegará a tu correo registrado!</h1>
      <p className="payone-confirmation-text">
        Felicitaciones, tu carta de no adeudo te llegara a tu correo.
      </p>

      <div className="payone-confirmation-image">
        <img src={CartaDeNoAdeudo} alt="carta de no adeudo" width={300}/>
      </div>

      <button className="payone-confirmation-btn" onClick={() => navigate("/")}>
        Volver al inicio
      </button>  
    </div>
  );
};

export default Confirmation;