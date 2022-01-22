import React from "react";
import { useNavigate } from "react-router-dom";
import boxDefiSwap from "../assets/img/box-deFi-swap.svg";
import boxDocuSign from "../assets/img/box-docu-sign.svg";

const PopularCategories = () => {
  const navigate = useNavigate();

  const goToDocuSign = () => {
    navigate("/docu-sign");
  };
  return (
    <div className="wrapper">
      <div className="row row-search">
        <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-10">
          <input type="text" title="" placeholder="Search experiences" className="icon-search" />
        </div>
        <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-2">
          <div className="icon-filter">
            <a href="#" title="" />
          </div>
        </div>
      </div>

      <article className="popular-categories-scroll">
        <div className="row-rec-exp">
          <h2>Recent Experiences</h2>
          <div className="row">
            <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <img src={boxDefiSwap} alt="" title="" />
            </div>
            <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <h3>DeFi Swap</h3>
              <p className="icon-arrow-gray">
                Swap your digital assets
                <br />
                <span className="color-blue">+200 users</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <img src={boxDocuSign} alt="" title="" />
            </div>
            <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <h3>Docu sign</h3>
              <p className="icon-arrow-gray" onClick={goToDocuSign}>
                sign smart contracts seamlessly
                <br />
                <span className="color-blue">+1K users</span>
              </p>
            </div>
          </div>
        </div>
        <h2>
          Popular Categories{" "}
          <a className="link-see-all" href="#" title="See All">
            See All
          </a>
        </h2>
        <div className="row row-pop-cat">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="box-categ color-exc">
              <i className="icon icon-exchanges" />
              <h6>
                <a href="#" title="Exchanges">
                  Exchanges
                </a>
              </h6>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="box-categ color-gam">
              <i className="icon icon-games" />
              <h6>
                <a href="#" title="Games">
                  Games
                </a>
              </h6>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="box-categ color-mar">
              <i className="icon icon-marketplaces" />
              <h6>
                <a href="#" title="Marketplaces">
                  Marketplaces
                </a>
              </h6>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="box-categ color-def">
              <i className="icon icon-defi" />
              <h6>
                <a href="#" title="Defi">
                  Defi
                </a>
              </h6>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="box-categ color-col">
              <i className="icon icon-collectibles" />
              <h6>
                <a href="#" title="Collectibles">
                  Collectibles
                </a>
              </h6>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="box-categ color-uti">
              <i className="icon icon-utilities" />
              <h6>
                <a href="#" title="Utilities">
                  Utilities
                </a>
              </h6>
            </div>
          </div>
        </div>
        <div className="row-rec-exp">
          <h2>Trending Experiences </h2>
          <div className="row">
            <div className="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <img src={boxDocuSign} alt="" title="" />
            </div>
            <div className="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <h3>Docu sign</h3>
              <p className="icon-arrow-gray" onClick={goToDocuSign}>
                sign smart contracts seamlessly
                <br />
                <span className="color-blue">+1K users</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PopularCategories;
