import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import SubView from './SubView';
import PropTypes from 'prop-types'
import { connect }  from 'react-redux'

const PageFive = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SubView navigation={navigation}/>
        </View>
    );
};

PageFive.propTypes = {
    navigation: PropTypes.object.isRequired
};

PageFive.navigationOptions = {
    tabBarVisible: false,
    title: 'Five'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default connect()(PageFive);
