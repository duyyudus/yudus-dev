import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

function Title() {
  return (
    <div className="row" id="title-row">
      <a className="col Title" href="https://yudus.dev">
        Yudus Lab
      </a>
    </div>
  );
}

function Greet() {
  return (
    <div className="row" id="greet-row">
      <div className="col Greet">
        welcome to{" "}
        <span className="color-secondary-cool-3">
          <img
            src="yudus-lab-1-small.png"
            className="img-rounded Greet-logo"
            alt="logo"
          />
        </span>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="row" id="intro-row">
      <p className="col Intro">
        we are an inter-chain lab, interested in cross-chain Dapps development and services,
        especially on-chain gaming and NFT
        <br />
        <br />
        we are also seeking to work on open source blockchain frameworks as well
        as limited outsourcing projects
        <br />
        <br />
        with multi-disciplined experience in game industry, software development
        and blockchain space,
        <br />
        we are determined to make the best out of those worlds
        <br />
        <br />
        preferred blockchain ecosystems :{" "}
        <b>
          <i>Polkadot, Ethereum and ICON</i>
        </b>
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="row" id="contact-row">
      <p className="col Contact">contacts</p>
    </div>
  );
}

function ContactDetail() {
  return (
    <div className="row" id="contact-detail-row">
      <p className="col ContactDetail">
      <i>contact telegram</i> <br />
        <a className="custom-link" href="https://t.me/duyyudus" alt="Telegram">
          https://t.me/duyyudus
        </a>
        <br />
        <br />
        <i>announcement telegram</i> <br />
        <a className="custom-link" href="https://t.me/yudus_lab" alt="Ann Telegram">
          https://t.me/yudus_lab
        </a>
        <br />
        <br />
        <i>twitter</i> <br />
        <a
          className="custom-link"
          href="https://twitter.com/yudus_lab"
          alt="Twitter"
        >
          https://twitter.com/yudus_lab
        </a>
        <br />
        <br />
        <i>medium</i> <br />
        <a
          className="custom-link"
          href="https://medium.com/yudus-lab"
          alt="Medium"
        >
          https://medium.com/yudus-lab
        </a>
      </p>
    </div>
  );
}

function Project() {
  return (
    <div className="row" id="project-row">
      <p className="col Project">projects</p>
    </div>
  );
}

function ProjectItem(props) {
  return (
    <div className="row project-item-row">
      <div className="col ProjectItem">
        <div className="row">
          <div className="col-auto ProjectItemTitle">{props.title}</div>
          {props.appLink ? (
            <a
              className="col-auto custom-link try-it-link"
              href={props.appLink}
            >
              try it here
            </a>
          ) : (
            ""
          )}
        </div>

        {props.github ? (
          // <div className="row">
          <a className="custom-link" href={props.github}>
            {props.github}
          </a>
        ) : (
          // </div>
          ""
        )}
        <br />
        <br />

        <p className="ProjectItemBody">{props.intro}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container Home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yudus Lab</title>
        <link rel="canonical" href="https://yudus.dev" />
      </Helmet>
      <Title />
      <Greet />
      <Intro />
      <Project />
      <ProjectItem
        title="ICX Contract Explorer"
        intro="responsive developer-oriented explorer for smart contract development on ICON blockchain"
        github="https://github.com/duyyudus/icx-contract-explorer"
        appLink="https://yudus.dev/icxce"
      />
      <ProjectItem
        title="ICONVIET MEGALOOP"
        intro="an experimental lottery-like Dapp co-developed with ICONVIET"
        github="https://github.com/duyyudus/megaloop-lottery"
      />
      <ProjectItem
        title="Chainalytic"
        intro="modular framework for blockchain time-series data and arbitrary chain-state derivation/aggregation, which help to generate more insights of generic blockchains"
        github="https://github.com/duyyudus/chainalytic-framework"
      />
      <Contact />
      <ContactDetail />
    </div>
  );
}
