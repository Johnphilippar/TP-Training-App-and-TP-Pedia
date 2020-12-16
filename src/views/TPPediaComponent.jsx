import React, { useState } from 'react';
import './TPPediaComponent.scss';
import searchIcon from '../image/search-icon.png';
import tpIcon from '../image/tp-logo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Link } from 'react-router-dom'
import config from '../../package.json';
import Modal from 'react-modal';
import TPPediaForm from '../components/TPPediaComponents/TPPediaForm';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
    {
        id: 1,
        articleName: 'Teleperformance',
        description: 'Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,'
    },
    {
        id: 2,
        articleName: 'Teleperformance',
        description: 'Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,'
    },
    {
        id: 3,
        articleName: 'Teleperformance',
        description: 'Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,'
    },
    {
        id: 4,
        articleName: 'Teleperformance',
        description: 'Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,'
    },
    {
        id: 5,
        articleName: 'Teleperformance',
        description: 'Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,'
    },{
        id: 6,
        articleName: 'Teleperformance',
        description: 'Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,'
    },
    {
        id: 7,
        articleName: 'Teleperformance',
        description: 'Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,'
    },
    {
        id: 8,
        articleName: 'Teleperformance',
        description: 'Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,'
    },
    {
        id: 9,
        articleName: 'Teleperformance',
        description: 'Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,'
    },
    {
        id: 10,
        articleName: 'Teleperformance',
        description: 'Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,Teleperformance SE is an omnichannel company headquartered in France. The company provides customer acquisition, customer care, technical support, debt collection, social media,'
    },
]



export default function TPPedia() {


    const [addArticleModal, setAddArticleModal] = useState(false)

    const closeModal = () => {
        setAddArticleModal(false)
    }



    return (
        <>
            <div className="tppedia-container">
                <div className="tppedia-add-article">
                    <button onClick={() => setAddArticleModal(true)}>
                        <span className="add-article-span">Add Article</span>
                    </button>
                    <Modal isOpen={addArticleModal}>
                        <TPPediaForm close={closeModal}/>
                    </Modal>
                </div>
                <div className="tppedia-header">
                    <span className="tppedia-title">WFM Knowledge Base</span>
                    <p>How can we help you?</p>
                    <div className="tppedia-search">
                        <div className="tppedia-search-icon">
                            <img src={searchIcon} alt="" />
                        </div>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="tppedia-main-body">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {data.map(user => (
                            <SwiperSlide key={user.id}>


                                <Link to={config.configuration.IISFolder + "/tppediasearchpage"}>
                                    <div className="tppedia-recent-upload">
                                        <div className="tppedia-recent-upload-image">
                                            <img src={tpIcon} alt="" />
                                        </div>

                                        <div className="tppedia-recent-upload-articlename">
                                            <span>
                                                {user.articleName}
                                            </span>
                                        </div>
                                        <div className="tppedia-recent-upload-description">
                                            <p>
                                                {user.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="tppedia-wfm">
                        <span>
                            <b style={{ letterSpacing: '1px' }}>Workforce Management</b> - Workforce management (WFM) is an integrated set of processes that a company uses to optimize the productivity of its employees. WFM involves effectively forecasting labor requirements and creating and managing staff schedules to accomplish a particular task on a day-to-day and hour-to-hour basis.
                        </span>
                        <span>
                            <b style={{ letterSpacing: '1px' }}>Business Process Outsourcing</b> - refers to the process of contracting standard business functions to be handled by a party outside of the company.
                        </span>

                    </div>
                </div>
            </div>

        </>
    )
}
