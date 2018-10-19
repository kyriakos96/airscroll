import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../components/Header/index';
import Sidebar from '../containers/SideNav/index';
import Footer from '../components/Footer';
import Dashboard from './routes/dashboard';

import {
    ABOVE_THE_HEADER,
    BELOW_THE_HEADER,
    COLLAPSED_DRAWER,
    FIXED_DRAWER,
    HORIZONTAL_NAVIGATION,
    INSIDE_THE_HEADER
} from '../constants/ActionTypes';
import ColorOption from '../containers/Customizer/ColorOption';
import {isIOS, isMobile} from 'react-device-detect';
import TopNav from '../components/TopNav';
import Tour from "../components/Tour/index";

class App extends React.Component {

    render() {
        const {match, drawerType, navigationStyle, horizontalNavPosition} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';

        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            document.body.classList.add('ios-mobile-view-height')
        }
        else if (document.body.classList.contains('ios-mobile-view-height')) {
            document.body.classList.remove('ios-mobile-view-height')
        }
        return (
            <div className={`app-container ${drawerStyle}`}>
                <Tour/>

                <Sidebar/>
                <div
                    className={`app-main-container ${navigationStyle === HORIZONTAL_NAVIGATION ? 'app-main-container-horizontal' : ''}`}>
                    <div
                        className={`app-header ${navigationStyle === HORIZONTAL_NAVIGATION ? 'app-header-horizontal' : ''}
                            ${(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition !== INSIDE_THE_HEADER) ? ' app-header-horizontal-top-below' : ''}`}>

                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
                        <TopNav styleName="app-top-header"/>}
                        <Header/>
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
                        <TopNav/>}

                    </div>

                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Switch>
                                <Route path={`${match.url}/dashboard`} component={Dashboard}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </main>
                </div>
                <ColorOption/>
            </div>
        );
    }
}


const mapStateToProps = ({settings}) => {
    const {drawerType, navigationStyle, horizontalNavPosition} = settings;
    return {drawerType, navigationStyle, horizontalNavPosition}
};
export default withRouter(connect(mapStateToProps)(App));