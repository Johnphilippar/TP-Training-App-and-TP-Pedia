import React from 'react';

import './TraningCardComponent.scss';

function TraningCardComponent(props) {
    return (
        <div className="TraningCardComponent"> 
            <img src={"https://thumbs.dreamstime.com/b/training-future-background-abstract-blue-concept-training-future-background-abstract-blue-concept-solution-125604539.jpg"} alt=""/>
            <div className="traning-wrapper">
                <div className="traning-title">
                    <img src="https://www.pikpng.com/pngl/m/357-3578548_owl-png-transparent-free-images-owl-clipart-transparent.png" alt=""/>
                    <div className="title-wrapper">
                        <p>WFM Traning 101 Title</p>
                        <p>@TPPH - Octagon Center</p>
                    </div>
                </div>
                <div className="traning-description">
                    <div className="traning-datetime">
                        <p><span>Date:</span> 10/02/2020 - 10/02/2020</p>
                        <p><span>Time:</span> 08:00 PM - 08:00 PM</p>
                    </div>
                    <p className="participants">20 Participants</p>
                    <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only five centuries
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only five centuries
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it to 
                        make a type specimen book. It has survived not only five centuries
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default TraningCardComponent;