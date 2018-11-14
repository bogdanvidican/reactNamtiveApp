import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Account from './screens/Account';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import CreateUser from './screens/CreateUser';
import Loading from './screens/Loading';

const AppStack = createStackNavigator(
  {
    Dashboard,
    Account,
  },{
    navigationOptions:{ header: null }
  }
);

const LoginStack = createStackNavigator(
  {
    Login,
    CreateUser
  }
)

export default createSwitchNavigator(
  {
    AuthLoading: Loading,
    Dashboard: AppStack,
    Login: LoginStack,
  },
  {
    initialRouteName:  'AuthLoading'
  }
);
