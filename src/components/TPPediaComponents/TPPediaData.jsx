import React from 'react';
import './TPPediaData.scss';
import config from '../../../package.json';
import searchIcon from '../../image/search-icon.png';
import tpIcon from '../../image/tp-logo.png';

export default function TPPediaData() {
    return (
        <>
            <div className="tppedia-container-data">
                <div className="tppedia-header-data">
                    <span className="tppedia-title">WFM Knowledge Base</span>
                    <p>How can we help you?</p>
                    <div className="tppedia-search">
                        <div className="tppedia-search-icon">
                            <img src={searchIcon} alt="" />
                        </div>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="tppedia-main-body-data">
                    <div className="details">
                        <img src={tpIcon} alt="" />
                        <div className="user-data">
                            <div className="item-title">
                                <span>TELEPERFORMANCE</span>
                            </div>
                            <span>Source Link: Angelo Zamora</span>
                            <span>Uploaded Date: 11/20/2020</span>
                            <span>Position: Supervisor</span>
                        </div>
                        <div className="actions">
                            <button className="btn primary">
                                <i className="fas fa-edit"></i>
                            </button>
                            <button className="btn primary">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                    <div className="description">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis adipisci repellat quam sint quod atque ad, reprehenderit suscipit accusamus ab repudiandae ipsam delectus. Voluptatem veniam praesentium assumenda laboriosam, voluptatibus maxime.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}