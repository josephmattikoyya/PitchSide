import React from "react";
import "./InfoCard.css";
import Pen from "../../img/pen.svg";
import { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <img src={Pen} alt="" onClick={() => setModalOpened(true)} />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span>Single</span>
      </div>

      <div className="info">
        <span>
          <b>Residence: </b>
        </span>
        <span>London</span>
      </div>

      <div className="info">
        <span>
          <b>Occupation: </b>
        </span>
        <span>Full-Stack Developer</span>
      </div>

      <button className="button logout-button">LOGOUT</button>
    </div>
  );
};

export default InfoCard;
