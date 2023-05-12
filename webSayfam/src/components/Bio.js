import React from "react";
import { FormattedMessage } from "react-intl";

function Bio() {
  return (
    <div className="hero">
      <div className="heroLeft">
        <div className="isim">
          <div className="line"></div>
          <p>
            <FormattedMessage id="bio.bio.name" />
          </p>
        </div>
        <h2>
          <FormattedMessage id="bio.bio.title" />
        </h2>
        <p className="isimP">
          <FormattedMessage id="bio.bio.description" />
        </p>
        <div className="buttons">
          <div className="button-1">
            <p>
              <FormattedMessage id="bio.bio.hireBtn" />
            </p>
          </div>
          <div className="button-2">
            <img src={process.env.PUBLIC_URL + "/github.png"} alt="Github" />
            <a href="https://github.com/avukatgizem">
              <p>
                <FormattedMessage id="bio.bio.githubBtn" />
              </p>
            </a>
          </div>
          <div className="button-2">
            <img src={process.env.PUBLIC_URL + "/Linkedn.png"} alt="Linkedin" />
            <a href="https://www.linkedin.com/">
              <p>
                <FormattedMessage id="bio.bio.linkedinBtn" />
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="heroRight">
        <img src={process.env.PUBLIC_URL + "/calisankiz.png"} alt="calisankiz" />
      </div>
    </div>
  );
}

export default Bio;
