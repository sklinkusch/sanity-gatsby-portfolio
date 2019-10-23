import React from "react";
import "./address-section.css";
import styles from "./layout.module.css";

const Addresssection = () => (
  <div className="wrapper">
    <div className="container">
      <div className="hotline addresselement">
        <h3 className="addresstitle">Hotline</h3>
        <p>
          Ruf uns an: <span>+49 511 87458409</span>
        </p>
        <p>Mo. - Fr. von 9:00 - 17:00 Uhr</p>
      </div>
      <div className="livechat addresselement">
        <h3 className="addresstitle">Live Chat</h3>
        <p>Benutze das Charfenster unten rechts</p>
        <p>Mo. - Fr. von 9:00 - 17:00 Uhr</p>
      </div>
      <div className="nachricht addresselement">
        <h3 className="addresstitle">Nachricht</h3>
        <p>fragen@sleepink.de</p>
        <p>Wir werden so schnell wie möglich auf deine Nachricht antworten</p>
      </div>
    </div>
  </div>
);

export default Addresssection;
