import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-big-calendar/lib/less/styles.less';
import "react-toggle-switch/dist/css/switch.min.css";
import 'rmc-drawer/assets/index.css';
import '../styles/bootstrap.scss'
import '../styles/app.scss';
import '../styles/app-rtl.scss';

import AppLocale from '../lngProvider';

import MainApp from '../app/index';
import {setDarkTheme} from '../actions/Setting';
import asyncComponent from "../util/asyncComponent";

class App extends Component {

    render() {
        const {match, location, locale, darkTheme, isDirectionRTL} = this.props;
        if (location.pathname === '/') {
            return ( <Redirect to={'/app/dashboard/default'}/> );
        }

        // for RTL Support
        if (isDirectionRTL) {
            document.body.classList.add('rtl')
        } else {
            document.body.classList.remove('rtl');
        }

        if (darkTheme) {
            document.body.classList.add('dark-theme');
        }

        const currentAppLocale = AppLocale[locale.locale];
        return (
            <IntlProvider
                locale={currentAppLocale.locale}
                messages={currentAppLocale.messages}
            >
                <div className="app-main">
                    <Switch>
                        <Route path={`${match.url}app`} component={MainApp}/>
                        <Route
                            component={asyncComponent(() => import('../components/Error404'))}/>
                    </Switch>
                </div>
            </IntlProvider>
        );
    }
}

const mapStateToProps = ({settings}) => {
    const {locale, isDirectionRTL, darkTheme} = settings;
    return {locale, isDirectionRTL, darkTheme}
};

export default connect(mapStateToProps, {setDarkTheme})(App);
