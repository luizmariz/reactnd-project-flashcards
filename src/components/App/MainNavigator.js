import { createStackNavigator, createAppContainer } from 'react-navigation';
import Decks from './Decks';
import Cards from './Cards';
import NewDeck from './NewDeck';
import NewCard from './NewCard';
import Quiz from './Quiz';


const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Decks
    },
    Cards: {
      screen: Cards
    },
    CreateCard: {
      screen: NewCard
    },
    CreateDeck: {
      screen: NewDeck
    },
    Quiz: {
      screen: Quiz
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