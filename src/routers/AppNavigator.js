import React from 'react';
import {StackNavigator, addNavigationHelpers} from 'react-navigation'
import TabRouter from './TabRouter';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const AppNavigator = StackNavigator({
        ListTab: {
            screen: TabRouter
        }
    },
);

const AppNavState = ({dispatch, nav}) => {
    return (
        <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
    )
};

AppNavState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        nav: state.nav,
    }
};

export default connect(mapStateToProps)(AppNavState);
