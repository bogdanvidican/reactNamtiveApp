import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import CreateUser from './screens/CreateUser';
import Loading from './screens/Loading';

const AuthStack = createStackNavigator(
  {
    Login,
    CreateUser
  }
)

export default createSwitchNavigator(
  {
    Loading,
    Dashboard,
    Auth: AuthStack,
  },
  {
    initialRouteName:  'Loading'
  }
);
