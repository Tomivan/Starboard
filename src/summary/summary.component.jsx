import React from 'react';
import Home from '../../assets/images/home.svg';
import Heights from '../../assets/images/height.svg';
import Column from '../../assets/images/column.svg';
import Parking from '../../assets/images/parking.svg';
import Tenant from '../../assets/images/person-standing.svg';
import Year from '../../assets/images/year.svg';
import Truck from '../../assets/images/truck.svg';
import Seaward from '../../assets/images/seaward.svg';
import './summary.component.css';

const Summary = () => {
    return(
        <div className='summary'>
            <div className="summary-left">
                <p>Deal Summary</p>
                <p>280 Richards, fully leased to Amazon, aligns with HUSPP’s strategy of acquiring prime logistics assets <br />
                in Brooklyn’s high-demand Red Hook submarket. With 13 years remaining on the lease and 3% annual rent <br />
                escalations, it offers stable, long-term cash flow. While single-tenant exposure is a risk, Amazon’s <br />
                investment-grade rating and renewal options enhance its resilience, making it a strong addition to HUSPP’s <br />
                portfolio.</p>
                <p> Personalised Insights</p>
                <li>Jake Klein viewed this deal in 2019, but decided not to proceed due to lack of potential upside.</li>
                <li>On 10/19/2021, your firm bid on 55 Bay St, Brooklyn, NY 11231, a larger site also occupied by Amazon 0.5<br /> 
                    miles away. Brookfield won the deal for $45M,cap rates in the area have compressed 45bps since then.</li>
                <li>On 01/19/2025, Tom, VP of Research, noted in the Investment Committee meeting that congestion<br /> 
                pricing has driven renewed demand for infill industrial in Brooklyn.</li>
            </div>
            <div className="summary-right">
                <p>Asset-Level Data</p>
                <div className="data-left">
                    <div className="data">
                        <img src={Heights} alt='' className='icon' />
                        <div className="data-info">
                            <p>Clear Heights</p>
                            <p><strong>36</strong></p>
                        </div>
                    </div>
                    <div className="data">
                        <img src={Column} alt='' className='icon' />
                        <div className="data-info">
                            <p>Column Spacing</p>
                            <p><strong>63' X 54'</strong></p>
                        </div>
                    </div>
                    <div className="data">
                        <img src={Parking} alt='' className='icon' />
                        <div className="data-info">
                            <p>Parking Spaces</p>
                            <p><strong>393</strong></p>
                        </div>
                    </div>
                    <div className="data">
                        <img src={Truck} alt='' className='icon' />
                        <div className="data-info">
                            <p># of Dock Doors</p>
                            <p><strong>28</strong></p>
                        </div>
                    </div>
                </div>
                <div className="data-right">
                    <div className="data">
                        <img src={Tenant} alt='' className='icon' />
                        <div className="data-info">
                            <p>Tenants</p>
                            <p><strong>Amazon</strong></p>
                        </div>
                    </div>
                    <div className="data">
                        <img src={Seaward} alt='' className='icon' />
                        <div className="data-info">
                            <p>Seaward Area</p>
                            <p><strong>357,151 sqft</strong></p>
                        </div>
                    </div>
                    <div className="data">
                        <img src={Year} alt='' className='icon' />
                        <div className="data-info">
                            <p>Year Built</p>
                            <p><strong>2021</strong></p>
                        </div>
                    </div>
                    <div className="data">
                        <img src={Home} alt='' className='icon' />
                        <div className="data-info">
                            <p>Occupancy Rate</p>
                            <p><strong>100%</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary;