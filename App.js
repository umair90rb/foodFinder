import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator(
  {
    Home:SearchScreen,
    ResultShow:ResultShowScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Food Finder'
    }
  }
);

export default createAppContainer(navigator);
