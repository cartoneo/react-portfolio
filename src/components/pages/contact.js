import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactPicture from "../../../static/assets/images/auth/bio/IMG_0097.jpg"

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column"
                style={{
                    background: "url(" + contactPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: '75vh',
                }}
            />
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">
                            888-888-8888
                        </div>
                    </div>
                </div>
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">
                            eddy@example.com
                        </div>
                    </div>
                </div>
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>

                        <div className="text">
                            Layton, UT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}