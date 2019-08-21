import { createStackNavigator } from 'react-navigation';

import PrivateNav from './PrivateNav';
import Ads from '../screens/Kost/Ads'
import Booking from '../screens/Booking/Booking';
import BookingList from '../screens/Booking/List';
import List from '../screens/Kost/List';
import Detail from '../screens/Kost/Detail';
import Filter from '../screens/Kost/Filter';
import Profile from '../screens/Authorization/Profile';

const PrivateStack = createStackNavigator({
    PrivateNav : PrivateNav,
    Iklan : Ads,
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

export default PrivateStack