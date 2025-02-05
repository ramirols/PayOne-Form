import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CheckCircle } from "lucide-react";

import YapeIcon from "../assets/yape.png";
import PlinIcon from "../assets/plin.png";

import { FaCcVisa, FaCcMastercard, FaCreditCard, FaPaypal } from 'react-icons/fa';

import Logo from "../assets/logo.jpg";

const paymentMethods = [
  { id: "yape", name: "Yape", icon: <img src={YapeIcon} alt="Yape" width={30} height={30} /> },
  { id: "plin", name: "Plin", icon: <img src={PlinIcon} alt="Plin" width={30} height={30} /> },
  { id: "visa", name: "Visa", icon: <FaCcVisa color="#1A1F71" size={30} /> },
  { id: "mastercard", name: "Mastercard", icon: <FaCcMastercard color="#EB001B" size={30} /> },
  { id: "paypal", name: "PayPal", icon: <FaPaypal color="#003087" size={30} /> },
  { id: "credit_card", name: "Tarjeta de Crédito", icon: <FaCreditCard color="#FF5F00" size={30} /> },
];

const Paso3 = () => {
  const navigate = useNavigate();

  return (
    <div className="payone-paso3-container">
      <img src={Logo} width={200} height={80} alt="logo" />
      <div className="payone-paso3-step">3</div>
      <h1 className="payone-paso3-title">Cancelemos la deuda...</h1>

      <div className="payone-paso2-input-container">
        <div className="payone-paso2-icon">
          <CheckCircle size={40} color="#28a745" />
        </div>
        <div className="payone-paso2-content">
          <label className="payone-paso2-label">Estudio FINANTY: Nro:</label>
          <span>Cuenta corriente Soles</span>
          <label className="payone-paso2-label">1247894903739-928-09</label>
          <span>Banco BPC</span>

          <label className="payone-paso2-label">Cuenta Interbancaria</label>
          <span className="payone-paso2-label">1247894903739-928-09</span>

          <div className="payone-paso3-payment-methods-container">

            {paymentMethods.map((method) => (
              <div key={method.id} className="payone-paso3-payment-method">
                {method.icon}
              </div>
            ))}
            
          </div>

          <span className="payone-paso2-label-number">+51 957 271 213</span>
        </div>
      </div>
      <div className="payone-paso2-input-container">
        <div className="payone-paso2-icon">
          <CheckCircle size={40} color="#28a745" />
        </div>
        <div className="payone-paso2-content">
          <label className="payone-paso2-label">CLICK AQUI PARA</label>
        </div>
      </div>

      <button className="payone-paso3-btn" onClick={() => navigate("/confirmacion")}>
        Pagar
      </button>
    </div>
  );
};

export default Paso3;