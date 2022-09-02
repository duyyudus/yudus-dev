import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";

function Title() {
  return (
    <div className="row" id="title-row">
      <a className="col Title" href="https://yudus.dev">
        Yudus Labs
      </a>
    </div>
  );
}

function Greet() {
  return (
    <div className="row" id="greet-row">
      <div className="col Greet">
        welcome to{" "}
        <span className="color-secondary-3">
          <img
            src="yudus-labs-logo-v2-full-transparent.png"
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
        we are an inter-chain team focused on cross-chain Dapps development
        and services, especially on-chain gaming and NFT
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
          <i>Polkadot and Ethereum ( including L2s )</i>
        </b>
        <br />
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
        <i>email</i> <br />
        <a
          className="custom-link"
          href="mailto:yudus.labs@gmail.com"
          alt="Email"
        >
          yudus.labs@gmail.com
        </a>
        <br />
        <br />
        <i>twitter</i> <br />
        <a
          className="custom-link"
          href="https://twitter.com/yudus_lab"
          alt="Twitter"
        >
          https://twitter.com/yudus_labs
        </a>
        <br />
        <br />
        <i>medium</i> <br />
        <a
          className="custom-link"
          href="https://medium.com/yudus-labs"
          alt="Medium"
        >
          https://medium.com/yudus-labs
        </a>
        <br />
        <br />
        <i>about founder</i> <br />
        <a className="custom-link" href="https://duyyudus.me" alt="duyyudus">
          https://duyyudus.me
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
              check it out
            </a>
          ) : (
            ""
          )}
        </div>

        {props.github ? (
          <a className="custom-link" href={props.github}>
            {props.github}
            <br />
          </a>
        ) : (
          ""
        )}
        <br />

        <p className="ProjectItemBody">
          <b>{props.status}</b> • {props.intro}
        </p>
        <img src={props.image} className="img-rounded Project-image" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container Home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yudus Labs</title>
        <meta
          name="description"
          content="A blockchain labs focused on cross-chain services"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yudus.dev/" />
        <meta property="twitter:title" content="Yudus Labs" />
        <meta
          property="twitter:description"
          content="A blockchain labs focused on cross-chain services"
        />
        <meta
          property="twitter:image"
          content="https://raw.githubusercontent.com/duyyudus/yudus-dev/master/static/preview.png"
        />

        <meta property="og:url" content="https://yudus.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yudus Labs" />
        <meta
          property="og:description"
          content="A blockchain labs focused on cross-chain services"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/duyyudus/yudus-dev/master/static/preview.png"
        />
      </Helmet>
      <Title />
      <Greet />
      <Intro />
      <Project />
      <ProjectItem
        title="Lamdamoon NFT"
        status="ON HOLD"
        intro="experimental crosschain NFT game, initially deployed on Aptos and Polkadot/Kusama"
        github="https://github.com/yudus-labs/lamdamoon-metaverse"
        appLink="https://lamdamoon.xyz"
        image="lamdamoon.jpg"
      />
      <ProjectItem
        title="Ethereum Mage"
        status="IN DESIGN"
        intro="experimental cross-L2s interactive collectible on StarkNet, zkSync, Arbitrum, Optimism"
        appLink="https://ethmage.com"
        image="eth-mage.jpg"
      />
      <ProjectItem
        title="Layer 0 Space"
        status="IN RESEARCH"
        intro="cross-consensus heterogeneous asset swap based on LayerZero messaging protocol and Polkadot XCM"
        github="https://github.com/yudus-labs/layer0-space"
        appLink="https://layer0.space"
        image="layer0-space.png"
      />
      <ProjectItem
        title="Coinalytic"
        status="IN RESEARCH"
        intro="exotic insights from on-chain data and advanced market data aggregation, first iteration will support Polkadot and Substrate-based chains"
        appLink="https://coinalytic.xyz"
      />
      <ProjectItem
        title="Chainalytic"
        status="DEPRECATED"
        intro="modular framework for blockchain time-series data and arbitrary chain-state derivation/aggregation, which help to generate more insights of generic blockchains"
        github="https://github.com/yudus-labs/chainalytic-framework"
        image="chainalytic.png"
      />
      <ProjectItem
        title="ICX Contract Hub"
        status="UNMAINTAINED"
        intro="a developer-oriented explorer dedicated for smart contract development on ICON blockchain network"
        github="https://github.com/yudus-labs/icx-contract-hub"
        image="icon-contract-hub.png"
      />
      <ProjectItem
        title="Chainalytic ICON"
        status="UNMAINTAINED"
        intro="Chainalytic for ICON blockchain"
        github="https://github.com/yudus-labs/chainalytic-icon"
      />
      <Contact />
      <ContactDetail />
    </div>
  );
}
