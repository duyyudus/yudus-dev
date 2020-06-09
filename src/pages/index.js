import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

function Title() {
  return (
    <div className="row" id="title-row">
      <a className="col Title" href="https://duyyudus.me">
        duyyudus • dp
      </a>
    </div>
  );
}

function Greet() {
  return (
    <div className="row" id="greet-row">
      <div className="col Greet">
        welcome to <span className="color-secondary-cool-3">Yudus Lab</span>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="row" id="intro-row">
      <p className="col Intro">
        we are interested in cross-chain Dapps, especially inter-chain gaming and NFT
        <br />
        with experience in both gaming and blockchain space,
        <br />
        we are determined to make the best out of two worlds
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
      <Title />
      <Greet />
      <Intro />
      <Project />
      <ProjectItem
        title="ICX Contract Explorer"
        intro="developer-oriented explorer for smart contract development on ICON blockchain"
        github="https://github.com/duyyudus/icx-contract-explorer"
        appLink="https://yudus.dev/icxce"
      />
      <ProjectItem
        title="ICONVIET MEGALOOP"
        intro="lottery-like Dapp co-developed with ICONVIET"
        github="https://github.com/duyyudus/megaloop-lottery"
        appLink="https://megaloop.io"
      />
      <ProjectItem
        title="Chainalytic"
        intro="Modular framework for blockchain time-series data and arbitrary chain-state derivation/aggregation, which help to generate more insights of generic blockchains"
        github="https://github.com/duyyudus/chainalytic-framework"
      />
    </div>
  );
}
