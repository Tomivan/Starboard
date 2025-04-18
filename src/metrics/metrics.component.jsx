import React from 'react';
import IRR from '../../assets/images/irr.svg';
import Equity from '../../assets/images/equity.svg';
import Return from '../../assets/images/return.svg';
import Exit from '../../assets/images/exit.svg';
import CapRate from '../../assets/images/cap.svg';
import Rental from '../../assets/images/rental.svg';
import Year from '../../assets/images/year.svg';
import Urban from '../../assets/images/height.svg';
import Income from '../../assets/images/income.svg';
import Unemployment from '../../assets/images/unemployment.svg';
import Rent from '../../assets/images/escalations.svg';
import './metrics.component.css';

const Metrics = () => {
    return(
        <div className='metrics'>
            <div className="financial-metrics">
                <p>Projected Financial Metrics</p>
                <div className="data">
                    <img src={IRR} alt='' className='icon' />
                    <div className="data-info">
                        <p>IRR</p>
                        <p><strong>13.9%</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={Equity} alt='' className='icon' />
                    <div className="data-info">
                        <p>Equity Multiple</p>
                        <p><strong>2.3x</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={Return} alt='' className='icon' />
                    <div className="data-info">
                        <p>Return on Equity</p>
                        <p><strong>18.5%</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={IRR} alt='' className='icon' />
                    <div className="data-info">
                        <p>Return on Cost</p>
                        <p><strong>19.2%</strong></p>
                    </div>
                </div>
            </div>
            <div className="key-assumptions">
                <p>Key Assumptions</p>
                <div className="data">
                    <img src={Exit} alt='' className='icon' />
                    <div className="data-info">
                        <p>Exit Price</p>
                        <p><strong>$195,000,000</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={CapRate} alt='' className='icon' />
                    <div className="data-info">
                        <p>Exit Cap Rate</p>
                        <p><strong>5.0%</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={Rental} alt='' className='icon' />
                    <div className="data-info">
                        <p>Rental Growth</p>
                        <p><strong>3.5%</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={Year} alt='' className='icon' />
                    <div className="data-info">
                        <p>Hold Period</p>
                        <p><strong>16 Years</strong></p>
                    </div>
                </div>
            </div>
            <div className="market-analysis">
                <p>Market Analysis</p>
                <div className="data">
                    <img src={Urban} alt='' className='icon' />
                    <div className="data-info">
                        <p>Nearest Urban Center</p>
                        <p><strong>Brooklyn, NY</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={Rental} alt='' className='icon' />
                    <div className="data-info">
                        <p>Popluation Growth Rate</p>
                        <p><strong>1.2%</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={Income} alt='' className='icon' />
                    <div className="data-info">
                        <p>Median Household Income</p>
                        <p><strong>$76,912</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={Unemployment} alt='' className='icon' />
                    <div className="data-info">
                        <p>Umemployment Rate</p>
                        <p><strong>7.2%</strong></p>
                    </div>
                </div>
            </div>
            <div className="lease-analysis">
                <p>Lease Analysis</p>
                <div className="data">
                    <img src={IRR} alt='' className='icon' />
                    <div className="data-info">
                        <p>Rent PSF</p>
                        <p><strong>$24.40</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={Year} alt='' className='icon' />
                    <div className="data-info">
                        <p>WALT</p>
                        <p><strong>13 yrs(Sep 37)</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={Rent} alt='' className='icon' />
                    <div className="data-info">
                        <p>Rent Escalations</p>
                        <p><strong>3%</strong></p>
                    </div>
                </div>
                <div className="data">
                    <img src={Rental} alt='' className='icon' />
                    <div className="data-info">
                        <p>Mark-to-Market Opportunity</p>
                        <p><strong>30+</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Metrics;