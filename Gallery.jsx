import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Gallery.css';

function Gallery() {
    return (
        <section id="Gallery">
        <div className="gallery-container">
            <Carousel interval={3000} controls={true} indicators={false} pause="hover">
                <Carousel.Item>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-6 gallery-item">
                            <a href="#link1" className="square-placeholder">
                                <div className="placeholder-content">1</div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                            <a href="#link2" className="square-placeholder">
                                <div className="placeholder-content">2</div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                            <a href="#link3" className="square-placeholder">
                                <div className="placeholder-content">3</div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                            <a href="#link4" className="square-placeholder">
                                <div className="placeholder-content">4</div>
                            </a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row justify-content-center">
                        <div className="col-md-3 col-6 gallery-item">
                            <a href="#link5" className="square-placeholder">
                                <div className="placeholder-content">5</div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                            <a href="#link6" className="square-placeholder">
                                <div className="placeholder-content">6</div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                            <a href="#link7" className="square-placeholder">
                                <div className="placeholder-content">7</div>
                            </a>
                        </div>
                        <div className="col-md-3 col-6 gallery-item">
                            <a href="#link8" className="square-placeholder">
                                <div className="placeholder-content">8</div>
                            </a>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
        </section>
    );
}

export default Gallery;

