import React from 'react';
import './TPPediaSearchPage.scss';
import { Link } from 'react-router-dom';
import config from '../../../package.json';
import searchIcon from '../../image/search-icon.png';
import tpIcon from '../../image/tp-logo.png';

export default function TPPediaSearchPage() {
    return (
        <div className="tppedia-container-searchpage">
            <div className="tppedia-header-searchpage">
                <span className="tppedia-title">WFM Knowledge Base</span>
                <p>How can we help you?</p>
                <div className="tppedia-search">
                    <div className="tppedia-search-icon">
                        <img src={searchIcon} alt="" />
                    </div>
                    <input className="form-control" type="text" />
                </div>
            </div>
            <div className="tppedia-main-body-searchpage">
                <div className="tppedia-search-list">
                    <div className="tppedia-item">
                        <ul>
                            <li>
                                <Link className="item-li">
                                    <div className="tppedia-item-img">
                                        <img src={tpIcon} alt="" />
                                    </div>
                                    <div className="tppedia-item-title">
                                        <span className="item-title">Teleperformance</span>
                                        <span>Posted By: Angelo Zamora</span>
                                        <span>Position: Supervisor</span>
                                        <span>Date Posted: December 7 , 2020</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="item-li">
                                    <div className="tppedia-item-img">
                                        <img src={tpIcon} alt="" />
                                    </div>
                                    <div className="tppedia-item-title">
                                        <span className="item-title">Teleperformance</span>
                                        <span>Posted By: Angelo Zamora</span>
                                        <span>Position: Supervisor</span>
                                        <span>Date Posted: December 7 , 2020</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="item-li">
                                    <div className="tppedia-item-img">
                                        <img src={tpIcon} alt="" />
                                    </div>
                                    <div className="tppedia-item-title">
                                        <span className="item-title">Teleperformance</span>
                                        <span>Posted By: Angelo Zamora</span>
                                        <span>Position: Supervisor</span>
                                        <span>Date Posted: December 7 , 2020</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="item-li">
                                    <div className="tppedia-item-img">
                                        <img src={tpIcon} alt="" />
                                    </div>
                                    <div className="tppedia-item-title">
                                        <span className="item-title">Teleperformance</span>
                                        <span>Posted By: Angelo Zamora</span>
                                        <span>Position: Supervisor</span>
                                        <span>Date Posted: December 7 , 2020</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="item-li">
                                    <div className="tppedia-item-img">
                                        <img src={tpIcon} alt="" />
                                    </div>
                                    <div className="tppedia-item-title">
                                        <span className="item-title">Teleperformance</span>
                                        <span>Posted By: Angelo Zamora</span>
                                        <span>Position: Supervisor</span>
                                        <span>Date Posted: December 7 , 2020</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="item-li">
                                    <div className="tppedia-item-img">
                                        <img src={tpIcon} alt="" />
                                    </div>
                                    <div className="tppedia-item-title">
                                        <span className="item-title">Teleperformance</span>
                                        <span>Posted By: Angelo Zamora</span>
                                        <span>Position: Supervisor</span>
                                        <span>Date Posted: December 7 , 2020</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="item-li">
                                    <div className="tppedia-item-img">
                                        <img src={tpIcon} alt="" />
                                    </div>
                                    <div className="tppedia-item-title">
                                        <span className="item-title">Teleperformance</span>
                                        <span>Posted By: Angelo Zamora</span>
                                        <span>Position: Supervisor</span>
                                        <span>Date Posted: December 7 , 2020</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="item-li">
                                    <div className="tppedia-item-img">
                                        <img src={tpIcon} alt="" />
                                    </div>
                                    <div className="tppedia-item-title">
                                        <span className="item-title">Teleperformance</span>
                                        <span>Posted By: Angelo Zamora</span>
                                        <span>Position: Supervisor</span>
                                        <span>Date Posted: December 7 , 2020</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="item-li">
                                    <div className="tppedia-item-img">
                                        <img src={tpIcon} alt="" />
                                    </div>
                                    <div className="tppedia-item-title">
                                        <span className="item-title">Teleperformance</span>
                                        <span>Posted By: Angelo Zamora</span>
                                        <span>Position: Supervisor</span>
                                        <span>Date Posted: December 7 , 2020</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tppedia-feature-item-body">
                    <div className="tppedia-feature-item">
                        <div className="tppedia-feature-item-image">
                            <img src={tpIcon} alt="" />
                        </div>
                        <div className="tppedia-feature-item-details">
                            <Link to={config.configuration.IISFolder + "/tppediadata"}>
                                <span className="item-title">Teleperformance</span>
                            </Link>
                            <span>Posted By: Angelo Zamora</span>
                            <span>Position: Supervisor</span>
                            <span>Date Posted: December 7 , 2020</span>
                            <span className="item-description">Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media, and other services around the world.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

