import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';
import PageThree from '../components/PageThree';
import PageFour from '../components/PageFour';
import PageFive from '../components/PageFive';
import {TabNavigator} from 'react-navigation';

const TabRouter = TabNavigator({
        One: {
            screen: PageOne
        },
        Two: {
            screen: PageTwo
        },
        Three: {
            screen: PageThree
        },
        Four: {
            screen: PageFour
        },
        Five: {
            screen: PageFive
        },
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: '#EEEEEE',
        },

        navigationOptions: {
            tabBarVisible: true,
        }
    }
);

export default TabRouter;