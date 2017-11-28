import {combineReducers} from 'redux'
import {AppNavigator} from "../routers/AppNavigator"
import { NavigationActions } from 'react-navigation'
import { createStore } from 'redux'

const initState = {
    listButtons: [
        {
            page: 1,
            title: 'Page One',
            isShow: false,
            screen: 'One'
        },
        {
            page: 2,
            title: 'Page Two',
            isShow: true,
            screen: 'Two'
        },
        {
            page: 3,
            title: 'Page Three',
            isShow: false,
            screen: 'Three'
        },
        {
            page: 4,
            title: 'Page Four',
            isShow: false,
            screen: 'Four'
        },
        {
            page: 5,
            title: 'Page Five',
            isShow: false,
            screen: 'Five'
        }
    ],
};

const btn = (state = initState, action) => {
    switch (action.type) {
        case 'One': {
            return {
                ...state,
                listButtons: state.listButtons.map(btn => {
                    if (btn.page === 2) {
                        return {...btn, isShow: true}
                    }
                    return {...btn, isShow: false}
                })
            };
        }
        case 'Two': {
            return {
                ...state,
                listButtons: state.listButtons.map(btn => {
                    if (btn.page === 1 || btn.page === 3) {
                        return {...btn, isShow: true}
                    }
                    return {...btn, isShow: false}
                })
            };
        }
        case 'Three': {
            return {
                ...state,
                listButtons: state.listButtons.map(btn => {
                    if (btn.page < 3 || btn.page === 4) {
                        return {...btn, isShow: true}
                    }
                    return {...btn, isShow: false}
                })
            };
        }
        case 'Four': {
            return {
                ...state,
                listButtons: state.listButtons.map(btn => {
                    if (btn.page < 4 || btn.page === 5) {
                        return {...btn, isShow: true}
                    }
                    return {...btn, isShow: false}
                })
            };
        }
        case 'Five': {
            return {
                ...state,
                listButtons: state.listButtons.map(btn => {
                    if (btn.page < 5) {
                        return {...btn, isShow: true}
                    }
                    return {...btn, isShow: false}
                })
            };
        }
        default:
            return state
    }
};

const nav = (state, action) => {
    let nextState = AppNavigator.router.getStateForAction(action, state);
    // switch (action.routeName) {
    //     case 'One': {
    //         nextState = AppNavigator.router.getStateForAction(
    //             NavigationActions.navigate({ routeName: 'One' }),
    //             state.navigationState);
    //         break;
    //     }
    //     case 'Two': {
    //         nextState = AppNavigator.router.getStateForAction(
    //             NavigationActions.navigate({ routeName: 'Two' }),
    //             state.navigationState);
    //         break;
    //     }
    //     case 'Three': {
    //         nextState = AppNavigator.router.getStateForAction(
    //             NavigationActions.navigate({ routeName: 'Three' }),
    //             state.navigationState);
    //         break
    //     }
    //     case 'Four': {
    //         nextState = AppNavigator.router.getStateForAction(
    //             NavigationActions.navigate({ routeName: 'Four' }),
    //             state.navigationState);
    //         break;
    //     }
    //     case 'Five': {
    //         nextState = AppNavigator.router.getStateForAction(
    //             NavigationActions.navigate({ routeName: 'Five' }),
    //             state.navigationState);
    //         break;
    //     }
    //     default:
    //         return
    // }
    return nextState || state
};

const AppReducer = combineReducers({
    btn,
    nav
});

export default AppReducer;