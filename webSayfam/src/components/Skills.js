import React from "react";
import { FormattedMessage } from "react-intl";

export default function Skills() {
  return (
    <div className="skills">
      <h3>
        <FormattedMessage id="skills.title" defaultMessage="Skills" />
      </h3>
      <div className="skillsList">
        <div className="skillsListGroup">
          <h4>JavaScript</h4>
          <p>
            <FormattedMessage
              id="skills.javascriptDescription"
              defaultMessage="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </p>
        </div>
        <div className="skillsListGroup">
          <h4>React.Js</h4>
          <p>
            <FormattedMessage
              id="skills.reactDescription"
              defaultMessage="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </p>
        </div>
        <div className="skillsListGroup">
          <h4>Node.Js</h4>
          <p>
            <FormattedMessage
              id="skills.nodeDescription"
              defaultMessage="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </p>
        </div>
      </div>
    </div>
  );
}
