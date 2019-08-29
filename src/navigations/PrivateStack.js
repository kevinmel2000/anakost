import { createStackNavigator } from 'react-navigation';

import PrivateNav from './PrivateNav';
import Advertisement from '../screens/Dorm/Advertisement'
import Booking from '../screens/Booking';
import BookingList from '../screens/Booking/List';
import List from '../screens/Dorm/List';
import Detail from '../screens/Dorm/Detail';
import Filter from '../screens/Dorm/Filter';
import Profile from '../screens/User/Profile';

const PrivateStack = createStackNavigator({
    PrivateNav : PrivateNav,
    Advertisement : Advertisement,
    Booking : Booking,
    BookingList: BookingList,
    List : List,
    Detail : Detail,
    Filter : Filter,
    Profile: Profile
},
{
    headerMode: 'none'
})

export default PrivateStack;