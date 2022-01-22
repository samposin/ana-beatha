import React, { useState } from "react";
import boxDocuSign from "../assets/img/box-docu-sign.svg";
import circleColourful from "../assets/img/circle-colorful-01.svg";
import circleColourful_2 from "../assets/img/circle-colorful-02.svg";

const DocuSign = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <div className="wrapper page-docu">
      <header />
      <article>
        <div className="row-docu-sign">
          <a href="#" title="">
            <img src={boxDocuSign} alt="" title="" />
          </a>
          <a href="#" title="Share" className="icon-share">
            Share
          </a>
        </div>
        <h3>Docu sign</h3>
        <p>
          sign smart contracts seamlessly
          <br />
          <span className="color-blue">Utilities</span>
        </p>
        <a href="#" title="Open" className="btn btn-open">
          Open
        </a>
        <span className="icon-multi-user">24,000+ users</span>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              //   className={selectedTab === "home" ? "nav-link active" : "nav-link"}
              //   onClick={() => setSelectedTab("home")}
              className="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              title="Details"
            >
              Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              //   className={selectedTab === "profile" ? "nav-link active" : "nav-link"}
              //   onClick={() => setSelectedTab("profile")}
              className="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              title="Activities"
            >
              Activities
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <h5 className="icon-arrow-top">Overview</h5>
            <p>
              it is easy to electronically sign, manage and distribute all your contracts and documents safely,
              securely, anywhere, anytime- paperlessly.{" "}
            </p>
            <a href="#" title="" className="link-globe">
              https://docusignn.io
            </a>
          </div>

          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="al-center">
              <span className="not-activity">12 activity found </span>
            </div>
            <div className="box-activity">
              <div className="row">
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-2">
                  <img src={circleColourful} alt="" title="" />
                </div>
                <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-10">
                  <p>
                    <span>johndoe.near</span> signed the contract successfully
                  </p>
                  <em>2 days ago</em>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-2">
                  <img src={circleColourful_2} alt="" title="" />
                </div>
                <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-10">
                  <p>
                    <span>CryptoKing.near</span> requested to sign the contract{" "}
                  </p>
                  <em>3 days ago</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default DocuSign;
