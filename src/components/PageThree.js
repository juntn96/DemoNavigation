import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, ToastAndroid
} from 'react-native';
import SubView from './SubView';
import PropTypes from 'prop-types'

const PageThree = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SubView navigation={navigation}/>
        </View>
    );
};

PageThree.propTypes = {
    navigation: PropTypes.object.isRequired
};

PageThree.navigationOptions = {
    tabBarVisible: false,
    title: 'Three'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue'
    },
});

export default PageThree;
