import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './overview.component.css';
import TabComponent from '../tab/tab.component';
import Lease from '../lease/lease.component';
import Metrics from '../metrics/metrics.component';
import Bottom from '../bottom/bottom.component';
import Summary from '../summary/summary.component';

const Overview = () => {
    return(
        <div className='overview'>
            <div className="overview-top">
                <h1>Deal Overview</h1>
                <div className="right">
                    <p>Understanding Model</p>
                    <span className='industrial'>Industrial Template</span>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Lease Agreement</Tab>
                </TabList>
                <TabPanel>
                    <TabComponent />
                    <hr />
                    <Summary />
                    <Metrics />
                    <Bottom />
                </TabPanel>
                <TabPanel>
                    <Lease />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Overview;