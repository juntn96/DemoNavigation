import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View, FlatList, TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux'

class SubView extends Component<{}> {

    componentWillMount() {
        // console.log('route name 1: ', this.props.navigation)
       // console.log('route name 2: ', this.props.nav.navigation)
        this.props.dispatch({type: this.props.navigation.state.routeName})
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        //console.log('route name 1: ', this.props.navigation)
    }

    _renderItem = ({item}) => {
        if (item.isShow) {
            return (
                <TouchableOpacity style={{
                    margin: 4,
                    padding: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'green'
                }} onPress={() => {
                    this.props.navigation.navigate(item.screen);
                    this.props.dispatch({type: item.screen});
                }}>
                    <Text>{item.title}</Text>
                </TouchableOpacity>
            )
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.listButtons}
                    keyExtractor={(item, index) => item.page}
                    renderItem={this._renderItem.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => ({
    listButtons: state.btn.listButtons,
    nav: state.nav
});

export default connect(mapStateToProps)(SubView);