
import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default class AccountScreen extends React.Component {
    render() {

        const status = this.props.navigation.getParam('status', 0);

        if (status == 0) {

            return (
                <View style={styles.container}>

                <TouchableHighlight style={styles.bgIcon}>
                    <Icon name='sad-cry' size={60} color='#ededed' />
                </TouchableHighlight>

                    <Text style={styles.TextTitle}>
                        Sorry, You must Login or Register New Account.
                    </Text>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Register', {role : 2})} style={styles.btnRegister}>
                        <Text style={styles.textBtn}>Register User Account</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')} style={styles.btnLogin}>
                        <Text style={styles.textBtn}>Login Account</Text>
                    </TouchableHighlight>
                </View>
            )
        } else {
            return (
                <View style={{flex: 1}}>
                    <View style={styles.AccountHeader}>
                         <TouchableHighlight style={styles.AccountHeaderIcon}>
                            <Icon name='grin-beam' size={40} color='#fff' />
                        </TouchableHighlight>
                        <Text style={styles.AccountHeaderText}>Risman Abdilah</Text>
                    </View>
                    
                    <View style={{flex: 1,paddingHorizontal: 20}}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('List')} style={styles.MenuSearchKost}>
                            <Text style={styles.textMenu}>Search Kost</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.MenuChangePassword}>
                            <Text style={styles.textMenu}>Change Password</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Account', { status : 0})} style={styles.MenuLogout}>
                            <Text style={styles.textMenu}>Logout</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    bgIcon : {
        width: 100,
        height:100,
        borderRadius: 150/2,
        backgroundColor: '#cf0e04',
        borderColor: '#bfbfbf',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    TextTitle : {
        fontSize: 18,
        fontWeight: '500',
        color: '#00d',
        textAlign: 'center',
        marginBottom: 15,
    },
    btnRegister : {
        padding: 6,
        backgroundColor: '#cf0e04',
        borderRadius: 100/15,
        marginBottom: 15
    },
    btnLogin : {
        padding: 6,
        backgroundColor: '#cf0e04',
        borderRadius: 100/15,
    },
    textBtn : {
        color: '#fff', 
        fontWeight: 'bold', 
        textTransform: 'uppercase'
    },

    AccountHeader : {
        backgroundColor: '#212020',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    AccountHeaderIcon : {
        paddingHorizontal: 5,
        paddingVertical: 6,
        backgroundColor: '#cf0e04',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d4cfcf',
        borderWidth: 1.5,
        borderRadius: 8,
    },
    AccountHeaderText : {
        fontSize: 20,
        paddingHorizontal: 20,
        color: '#fff',
        fontWeight: 'bold',
        textShadowColor: '#cf0e04',
        textShadowRadius: 3
    },

    MenuSearchKost : {
        paddingHorizontal: 5,
        paddingVertical: 6,
        backgroundColor: '#cf0e04',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d4cfcf',
        borderWidth: 1.5,
        borderRadius: 100/15,
    },
    MenuChangePassword : {
        paddingHorizontal: 5,
        paddingVertical: 6,
        backgroundColor: '#cf0e04',
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d4cfcf',
        borderWidth: 1.5,
        borderRadius: 100/15,
    },
    MenuLogout : {
        paddingHorizontal: 5,
        paddingVertical: 6,
        backgroundColor: '#640dba',
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#d4cfcf',
        borderWidth: 1.5,
        borderRadius: 100/15,
    },
    textMenu : {
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 18
    }
})


// import React from 'react';
// import {View, Text, TouchableHighlight} from 'react-native';

// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// import LoginScreen from '../LoginScreen';
// import RegisterScreen from '../RegisterScreen';
// import HomeScreen from '../HomeScreen';

// class AccountScreen extends React.Component {
//     render() {

//         const status = this.props.navigation.getParam('status', 0);

//         if(status === 0) {
//             return (
//                 <View style={{
//                     flex: 1,
//                     justifyContent:'center',
//                     alignItems: 'center'
//                 }}>

//                 <TouchableHighlight style={{
//                     width: 100,
//                     height:100,
//                     borderRadius: 150/2,
//                     backgroundColor: '#cf0e04',
//                     borderColor: '#bfbfbf',
//                     borderWidth: 2,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     marginBottom: 12,
//                 }}>
//                     <Icon name='sad-cry' size={60} color='#ededed' />
//                 </TouchableHighlight>

//                     <Text style={{
//                         fontSize: 18,
//                         fontWeight: '500',
//                         color: '#00d',
//                         textAlign: 'center',
//                         marginBottom: 15,
//                     }}>
//                         Sorry, You must Login or Register New Account.
//                     </Text>

//                     <TouchableHighlight onPress={() => this.props.navigation.navigate('Register', {role : 1})} style={{
//                         padding: 6,
//                         backgroundColor: '#cf0e04',
//                         borderRadius: 100/15,
//                         marginBottom: 15
//                     }}>
//                         <Text style={{color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}>Register Owner Account</Text>
//                     </TouchableHighlight>

//                     <TouchableHighlight onPress={() => this.props.navigation.navigate('Register', {role : 2})} style={{
//                         padding: 6,
//                         backgroundColor: '#cf0e04',
//                         borderRadius: 100/15,
//                         marginBottom: 15
//                     }}>
//                         <Text style={{color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}>Register User Account</Text>
//                     </TouchableHighlight>
    
//                     <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')} style={{
//                         padding: 6,
//                         backgroundColor: '#cf0e04',
//                         borderRadius: 100/15,
//                     }}>
//                         <Text style={{color: '#fff', fontWeight: 'bold', textTransform: 'uppercase'}}>Login Account</Text>
//                     </TouchableHighlight>
//                 </View>
//             )
//         } else {
//             return (
//                 <View style={{
//                     flex: 1,
//                 }}>
//                     <View style={{
//                         backgroundColor: '#212020',
//                         alignItems: 'center',
//                         width: '100%',
//                         flexDirection: 'row',
//                         paddingHorizontal: 20,
//                     }}>
//                          <TouchableHighlight style={{
//                             paddingHorizontal: 5,
//                             paddingVertical: 6,
//                             backgroundColor: '#cf0e04',
//                             marginVertical: 15,
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             borderColor: '#d4cfcf',
//                             borderWidth: 1.5,
//                             borderRadius: 8,
//                         }}>
//                             <Icon name='grin-beam' size={40} color='#fff' />
//                         </TouchableHighlight>
//                         <Text style={{
//                             fontSize: 20,
//                             paddingHorizontal: 20,
//                             color: '#fff',
//                             fontWeight: 'bold',
//                             textShadowColor: '#cf0e04',
//                             textShadowRadius: 3
//                         }}>Risman Abdilah</Text>
//                     </View>
                    
//                     <View style={{
//                         flex: 1,
//                         paddingHorizontal: 20
//                     }}>
//                         <TouchableHighlight style={{
//                             paddingHorizontal: 5,
//                             paddingVertical: 6,
//                             backgroundColor: '#cf0e04',
//                             marginVertical: 15,
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             borderColor: '#d4cfcf',
//                             borderWidth: 1.5,
//                             borderRadius: 100/15,
//                         }}>
//                             <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Search Kost</Text>
//                         </TouchableHighlight>

//                         <TouchableHighlight style={{
//                             paddingHorizontal: 5,
//                             paddingVertical: 6,
//                             backgroundColor: '#cf0e04',
//                             marginVertical: 5,
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             borderColor: '#d4cfcf',
//                             borderWidth: 1.5,
//                             borderRadius: 100/15,
//                         }}>
//                             <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Change Password</Text>
//                         </TouchableHighlight>

//                         <TouchableHighlight onPress={() => this.props.navigation.navigate('Account', { status : 0})} style={{
//                             paddingHorizontal: 5,
//                             paddingVertical: 6,
//                             backgroundColor: '#640dba',
//                             marginVertical: 15,
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             borderColor: '#d4cfcf',
//                             borderWidth: 1.5,
//                             borderRadius: 100/15,
//                         }}>
//                             <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>Logout</Text>
//                         </TouchableHighlight>
//                     </View>
//                 </View>
//             )
//         }
//     }
// }

// const AppNavigator = createStackNavigator({
//     Account: {
//         screen: AccountScreen
//     },
//     Login: {
//         screen: LoginScreen
//     },
//     Register: {
//         screen: RegisterScreen
//     },
//     Home: {
//         screen: HomeScreen
//     }
// },
// {
//     initialRouteName: 'Account',
//     headerMode: 'none'
// });

// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

