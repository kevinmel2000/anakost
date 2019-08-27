import { createStackNavigator } from 'react-navigation';

import PublicNav from './PublicNav';
import Blocked from '../screens/Authentication/Blocked';
import Login from '../screens/Authentication/Login';
import Register from '../screens/Authentication/Register';
import List from '../screens/Dorm/List';
import Detail from '../screens/Dorm/Detail';
import Booking from '../screens/Booking';

const PublicStack = createStackNavigator({
    PublicNav : PublicNav,
    Blocked : Blocked,
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