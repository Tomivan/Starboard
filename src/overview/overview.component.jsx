import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './overview.component.css';
import TabComponent from '../tab/tab.component';
import Lease from '../lease/lease.component';

const Overview = () => {
    return(
        <div className='overview'>
            <h1>Deal Overview</h1>
            <div className="right">
                <p>Understanding Model</p>
                <span>Industrial Template</span>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Lease Agreement</Tab>
                </TabList>
                <TabPanel>
                    <TabComponent />
                </TabPanel>
                <TabPanel>
                    <Lease />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Overview;