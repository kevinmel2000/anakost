/* React Native Applications
 * React Native, React Navigation, Redux & dll
 */
import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './src/_redux/store';
import CheckUser from './src/navigations/CheckUser';
import PublicStack from './src/navigations/PublicStack';
import PrivateStack from './src/navigations/PrivateStack';

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    CheckUser: CheckUser,
    PublicStack: PublicStack,
    PrivateStack: PrivateStack,
  },
  {
    initialRouteName: 'CheckUser',
  }
));

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App;