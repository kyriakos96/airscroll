import React, {Component} from 'react';
import {Line, LineChart, ResponsiveContainer} from 'recharts';
import MonthlyRevenue from '../../../../../components/dashboard/default/MonthlyRevenue';
import {cardData, cardData1, cardData2, data1, expanseData} from '../data'
import InfoCard from '../../../../../components/InfoCard';
import InFoWithBgImage from '../../../../../components/InFoWithBgImage';
import ContainerHeader from '../../../../../components/ContainerHeader/index';
import IntlMessages from '../../../../../util/IntlMessages';

class Default extends Component {

    constructor() {
        super();
        this.state = {
            activeTab: '1'
        };
        this.toggle = this.toggle.bind(this);
    }


    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div className="dashboard animated slideInUpTiny animation-duration-3">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="sidebar.dashboard"/>}/>

                <div className="row">
                    <div className="col-xl-5 col-12">
                        <div className="jr-card p-0 overflow-hidden">
                            <div className="jr-card-header pt-3 px-4">
                                <h3><IntlMessages id="dashboard.userStatstics"/></h3>
                            </div>
                            <MonthlyRevenue chartData={expanseData}/>
                        </div>
                    </div>

                    <div className="col-xl-7 col-12">
                        <div className="row">
                            <div className="col-xl-8 col-lg-6 col-md-7 col-12">
                                <div className="row">
                                    <div className="col-sm-6 col-12">
                                        <InfoCard data={cardData} styleName="bg-secondary"/>
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <InfoCard data={cardData1} styleName="bg-cyan darken-2"/>
                                    </div>
                                    <div className="col-12">
                                        <InFoWithBgImage data={cardData2}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-5 col-12">
                                <div
                                    className="card jr-chart-or jr-card-full-height d-flex flex-column justify-content-between">
                                    <div className="chart-header">
                                        <div className="chart-title">
                                            <h3>Orders</h3>
                                            <span className="d-block mb-1 text-muted">25 New Placed</span>
                                            <span className="d-block mb-1 text-muted">13 Processed</span>
                                            <span className="d-block text-muted">07 Pending</span>
                                        </div>
                                    </div>
                                    <ResponsiveContainer width="100%" height={62}>
                                        <LineChart data={data1}>
                                            <Line type="monotone" dataKey="uv" stroke="#3f51b5" fillOpacity={0.8}
                                                  activeDot={{r: 8}}/>
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Default;