import React from "react";
import { FormattedMessage } from "react-intl";

function Footer() {
  return (
    <div className="footer">
      <h3 className="letsWork">
        <FormattedMessage
          id="footer.letsWork"
          defaultMessage="Let’s work together on your next product."
          values={{ product: <br /> }}
        />
      </h3>
      <div className="rectangle">
        <a className="email" href="mailto:av.gizemguzel@gmail.com">
          <img src={process.env.PUBLIC_URL + "/el"} alt="" />
          <p className="emailcss">
            <FormattedMessage
              id="footer.email"
              defaultMessage="👉{email}"
              values={{ email: "av.gizemguzel@gmail.com" }}
            />
          </p>
        </a>
        <nav className="sagF">
          <a className="sagF1" href="">
            <FormattedMessage
              id="footer.personalBlog"
              defaultMessage="Personal Blog"
            />
          </a>
          <a className="sagF2" href="https://github.com/avukatgizem">
            <FormattedMessage
              id="footer.github"
              defaultMessage="GitHub"
            />
          </a>
          <a className="sagF3" href="https://www.linkedin.com/">
            <FormattedMessage
              id="footer.linkedin"
              defaultMessage="Linkedin"
            />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
