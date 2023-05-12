import React from "react";
import { FormattedMessage } from "react-intl";

export default function Projects() {
  return (
    <div className="projects">
      <span className="profileLine"></span>
      <h3>
        <FormattedMessage id="projects.projects" defaultMessage="Projects" />
      </h3>
      <div className="kartlarGrup">
        <div className="projects-list1">
          <img src={process.env.PUBLIC_URL + "/Rectangle 41.png"} alt="" />
          <h4>Workintech</h4>
          <p className="aciklama">
            <FormattedMessage
              id="projects.workintechDesc"
              defaultMessage="A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes."
            />
          </p>
          <div className="techStack">
            <p>react</p>
            <p>redux</p>
            <p>axios</p>
          </div>
          <div className="details">
            <a href= "https://github.com/avukatgizem/fsweb-s9g1-task-yonetimi.git">GitHub</a>            
            <a href= "https://task-yonetimi-chi.vercel.app/"> View Site </a>
          </div>
        </div>
        <div className="projects-list2">
          <img src={process.env.PUBLIC_URL + "/random.png"} alt="" />
          <h4>Random Jokes</h4>
          <p className="aciklama">
            <FormattedMessage
              id="projects.randomJokesDesc"
              defaultMessage="A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible."
            />
          </p>
          <div className="techStack">
            <p>react</p>
            <p>redux</p>
            <p>axios</p>
          </div>
          <div className="details">
          <a href= "https://github.com/avukatgizem/fsweb-s9g1-task-yonetimi.git">GitHub</a>
            <a href= "https://task-yonetimi-chi.vercel.app/"> View Site </a>
          </div>
        </div>
        <div className="projects-list3">
          <img src={process.env.PUBLIC_URL + "/journey.png"} alt="" />
          <h4>Journey</h4>
          <p className="aciklama">
            <FormattedMessage
              id="projects.journeyDesc"
              defaultMessage="A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible."
            />
          </p>
          <div className="techStack">
            <p>react</p>
            <p>redux</p>
            <p>axios</p>
          </div>
          <div className="details">
          <a href= "https://github.com/avukatgizem/fsweb-s9g1-task-yonetimi.git">GitHub</a>
            <a href= "https://task-yonetimi-chi.vercel.app/"> View Site </a>
          </div>
          </div>
        </div>
      </div>    
  );
}
