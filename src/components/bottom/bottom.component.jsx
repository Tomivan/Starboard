import React from 'react';
import Columbia from '../../assets/images/Columbia.svg';
import Mason from '../../assets/images/mason.svg';
import Debaun from '../../assets/images/debaun.svg';
import Edgeboro from '../../assets/images/edegboro.svg';
import Baylis from '../../assets/images/baylis.svg';
import Terminal from '../../assets/images/terminal.svg';
import './bottom.component.css';

const Bottom = () => {
    return (
        <div className="bottom">
            <div className="bottom-left">
                <h2>Supply Pipeline</h2>
                <div className="supply-pipeline">
                    <div className="address">
                        <img src={Columbia} alt='' className='bottom-image' />
                        <div className="address-details">
                            <p><strong>Address:</strong> 640 Columbia</p>
                            <p><strong>Submarket:</strong> Brooklyn</p>
                            <p><strong>Delivery Date:</strong> Jun - 25</p>
                            <p><strong>Owner:</strong> CBREI</p>
                            <p><strong>SF:</strong> 336,350</p>
                        </div>
                    </div>
                    <div className="address">
                        <img src={Mason} alt='' className='bottom-image' />
                        <div className="address-details">
                            <p><strong>Address:</strong> WB Mason</p>
                            <p><strong>Submarket:</strong> Bronx</p>
                            <p><strong>Delivery Date:</strong> May - 25</p>
                            <p><strong>Owner:</strong> Link Logisitics</p>
                            <p><strong>SF:</strong> 150,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-right">
                <h2>Sale Comparables</h2>
                <div className="sales-comparables">
                    <div className="sales-left">
                        <div className="address">
                            <img src={Debaun} alt='' className='bottom-image' />
                            <div className="address-details">
                                <p><strong>Address: </strong> 1, Debaun Road</p>
                                <div className="address-details-1">
                                    <div className="address-left">
                                        <p><strong>Submarket: </strong> Millstone, NJ</p>
                                        <p><strong>SF:</strong>132,930</p>
                                        <p><strong>Owner:</strong>Cabot</p>
                                    </div>
                                    <div className="address-right">
                                        <p><strong>Date: </strong>Jun-24</p>
                                        <p><strong>PP:</strong>$41,903,580</p>
                                        <p><strong>Tenant:</strong>Berry Plastics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="address">
                                <img src={Edgeboro} alt='' className='bottom-image' />
                                <div className="address-details">
                                    <p><strong>Address: </strong> 39, Edgeboro Road</p>
                                   <div className="address-details-1">
                                    <div className="address-left">
                                            <p><strong>Submarket: </strong> Millstone, NJ</p>
                                            <p><strong>SF:</strong>513,240</p>
                                            <p><strong>Owner:</strong>Blackstone</p>
                                        </div>
                                        <div className="address-right">
                                            <p><strong>Date: </strong>Oct-23</p>
                                            <p><strong>PP:</strong>$165,7776,520</p>
                                            <p><strong>Tenant:</strong>FedEx</p>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sales-right">
                        <div className="address">
                            <img src={Baylis} alt='' className='bottom-image' />
                            <div className="address-details">
                                <p><strong>Address: </strong> Baylis 495 Business Park</p>
                                <div className="address-details-1">
                                    <div className="address-left">
                                        <p><strong>Submarket: </strong> Melville, NY</p>
                                        <p><strong>SF:</strong>103,500</p>
                                        <p><strong>Owner:</strong>Betnal Green</p>
                                    </div>
                                    <div className="address-right">
                                        <p><strong>Date: </strong>May-24</p>
                                        <p><strong>PP:</strong>$44,000,000</p>
                                        <p><strong>Tenant:</strong>Dr Pepper</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="address">
                            <img src={Terminal} alt='' className='bottom-image' />
                            <div className="address-details">
                                <p><strong>Address: </strong> Terminal Logisitics Center</p>
                                <div className="address-details-1">
                                    <div className="address-left">
                                        <p><strong>Submarket: </strong> Queens, NY</p>
                                        <p><strong>SF:</strong>336,000</p>
                                        <p><strong>Owner:</strong>Goldman</p>
                                    </div>
                                    <div className="address-right">
                                        <p><strong>Date: </strong>Mar-23</p>
                                        <p><strong>PP:</strong>$136,000,000</p>
                                        <p><strong>Tenant:</strong>Do & Co</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom;