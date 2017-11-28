import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import SubView from './SubView';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PageFour = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SubView navigation={navigation}/>
        </View>
    );
};

PageFour.propTypes = {
    navigation: PropTypes.object.isRequired
};

PageFour.navigationOptions = {
    tabBarVisible: false,
    title: 'Four'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
});

export default connect()(PageFour);
