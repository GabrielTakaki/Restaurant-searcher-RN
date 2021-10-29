import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreens';
import SearchBar from './src/components/SearchBar';

const navigator = createStackNavigator({
  Search: SearchScreen,
  SearchBar: SearchBar,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);

// Client ID
// 5R58iH3PC0RGo6enCXBz3w

// API Key
// JIj0NMxbuGNgc1wejB56VLEBrGW5SCYOgtaygQLEbY-DcaUMaXaxo_DWMRAciIKUyqu5BZSeAJz2FoGTMTGoCFzEo33HTnoLXro1VAYq4pQE4o0WsdgRFN-im9F7YXYx
