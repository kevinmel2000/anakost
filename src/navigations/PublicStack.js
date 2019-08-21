import { createStackNavigator } from 'react-navigation';

import PublicNav from './PublicNav';
import Account from '../screens/Authorization/Account';
import Login from '../screens/Authorization/Login';
import Register from '../screens/Authorization/Register';
import List from '../screens/Kost/List';
import Detail from '../screens/Kost/Detail';
import Booking from '../screens/Booking/Booking';

const PublicStack = createStackNavigator({
    PublicNav : PublicNav,
    Account : Account,
    Login : Login,
    Register : Register,
    List : List,
    Detail : Detail,
    Booking : Booking,
},
{
    headerMode: 'none'
})

export default PublicStack;