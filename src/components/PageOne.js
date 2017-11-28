import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import SubView from './SubView'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const PageOne = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SubView navigation={navigation}/>
        </View>
    );
};

PageOne.propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

PageOne.navigationOptions = {
    tabBarVisible: true,
    title: 'One',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
});

export default connect()(PageOne);
