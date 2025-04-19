import React from 'react';
import Image from '../../assets/images/image.svg';
import Person from '../../assets/images/person-standing.svg';
import Dollar from '../../assets/images/dollar-sign.svg';
import Ruler from '../../assets/images/ruler.svg';
import Scan from '../../assets/images/scan.svg';
import Hammer from '../../assets/images/hammer.svg';
import './tab.component.css';

const TabComponent = () => {
    return(
        <div className='tab'>
            <img src={Image} alt='' className='image' />
            <div className="details">
                <div className="details-top">
                    <div className="house-detail">
                        <p><strong>280, Richards, Brooklyn, NY</strong></p>
                        <p>Date Uploaded: 11/06/2024</p>
                        <p>Warehouse</p>
                    </div>
                    <div className="buttons">
                        <button className='export'>Export to Excel</button>
                        <button className='generate'>Generate Powerpoint</button>
                    </div>
                </div>
                <div className="details-bottom">
                    <div className="info">
                        <div className="top">
                            <img src={Person} alt='' className='info-image' />
                            <p>Seller</p>
                        </div>
                        <p>Thor Equities</p>
                    </div>
                    <div className="info">
                        <div className="top">
                            <img src={Dollar} alt='' className='info-image' />
                            <p>Guidance Price</p>
                        </div>
                        <p>$143,000,000</p>
                    </div>
                    <div className="info">
                        <div className="top">
                            <img src={Dollar} alt='' className='info-image' />
                            <p>Guidance Price PSF</p>
                        </div>
                        <p>$23.92</p>
                    </div>
                    <div className="info">
                        <div className="top">
                            <img src={Ruler} alt='' className='info-image' />
                            <p>Cap Rate</p>
                        </div>
                        <p>5.0%</p>
                    </div>
                    <div className="info">
                        <div className="top">
                            <img src={Ruler} alt='' className='info-image' />
                            <p>Property Size</p>
                        </div>
                        <p>312,000 sqft</p>
                    </div>
                    <div className="info">
                        <div className="top">
                            <img src={Scan} alt='' className='info-image' />
                            <p>Land Area</p>
                        </div>
                        <p>16 acres</p>
                    </div>
                    <div className="info">
                        <div className="top">
                            <img src={Hammer} alt='' className='info-image' />
                            <p>Zoning</p>
                        </div>
                        <p>M-Z</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabComponent;