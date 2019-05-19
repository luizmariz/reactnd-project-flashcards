import { createStackNavigator, createAppContainer } from 'react-navigation';
import Decks from './Decks';
import NewDeck from './NewDeck';


const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Decks
    },
    CreateDeck: {
      screen: NewDeck,
      headerBackTitleVisible: true,
      headerBackTitle: 'back'
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: { height: 0 },
          shadowRadius: 0,
          height: 45
      }
    }
  }
);

export default createAppContainer(MainNavigator);