import React from "react";
import { FormattedMessage } from "react-intl";

export default function Profile() {
  return (
    <div className="profile">
      <span className="profileLine"></span>
      <h3><FormattedMessage id="profile.profile" /></h3>
      <div className="profileBox1">
        <div className="profileBox">
          <h4><FormattedMessage id="profile.profileTitle" /></h4>
          <div className="dogumTarihi">
            <div className="solBolum">
              <p><FormattedMessage id="profile.birthDate" /></p>
              <p><FormattedMessage id="profile.city" /></p>
              <p><FormattedMessage id="profile.education" /></p>
              <br />
              <br />
              <p><FormattedMessage id="profile.role" /></p>
            </div>
            <div className="sagBolum">
              <p>24.03.1996</p>
              <p>Ankara</p>
              <p>Hacettepe Ünv.  Biyoloji
                <br />
                Lisans, 2016
                <br />
                <br />
              </p>
              <p>Frontend, UI</p>
            </div>
          </div>
        </div>
        <div className="aboutMe">
          <h4><FormattedMessage id="profile.aboutMe" /></h4>
          <p>
            <FormattedMessage id="profile.aboutMeText1" /><br /><br />
            <FormattedMessage id="profile.aboutMeText2" />
          </p>
        </div>
      </div>
    </div>
  );
}
