import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, ToastAndroid
} from 'react-native';
import SubView from './SubView';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PageTwo = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SubView navigation={navigation}/>
        </View>
    );
};

PageTwo.propTypes = {
    navigation: PropTypes.object.isRequired,
};

PageTwo.navigationOptions = {
    tabBarVisible:  false,
    title: 'Two',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
});

export default connect()(PageTwo);
