import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faGlobe,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Style from "./style";

export function Redes() {
  return (
    <Style>
      <div className="Redes">
        <div className="MainContent">
          <a href="https://www.instagram.com/sabordomel.buffet" target="_blank" rel="noreferrer">
            <div className="Redes__Items">
              <div className="IconItem">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <small>Instagram</small>
            </div>
          </a>
          <a href="https://smgastronomia.com/" target="_blank" rel="noreferrer">
            <div className="Redes__Items">
              <div className="IconItem">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <small>Site Oficial</small>
            </div>
          </a>
          <a href="https://smgastronomia.com/localizacao" target="_blank" rel="noreferrer">
            <div className="Redes__Items">
              <div className="IconItem">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <small>Localização</small>
            </div>
          </a>
          <a href="https://smgastronomia.com/contate-nos" target="_blank" rel="noreferrer">
            <div className="Redes__Items">
              <div className="IconItem">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <small>Orçamento</small>
            </div>
          </a>
        </div>
        <div className="BackgroundImageRedes"></div>
      </div>
    </Style>
  );
}
