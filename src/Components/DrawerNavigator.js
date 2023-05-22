import React from "react";
import 'react-native-gesture-handler'
import { createDrawerNavigator } from '@react-navigation/drawer';
import  Icon  from "react-native-vector-icons/Feather";
import Home from "./Home";
import Fav from "./Fav";
import LockedTask from "./LockedTask";
import RecycleBin from "./Recycle bin";
import Categories from "./Categories";
import Settings from "./Settings";
import CustomDrawer from "./CustomDrawer";


const DrawerNavigator = () => {

    //variable used to assign drawer screen
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{headerShown:false,
            drawerActiveTintColor: '#343434',
            drawerActiveBackgroundColor: '#87BDDC',
            drawerInactiveTintColor: '#f5f5f5',
        }} 
            initialRouteName="Home">

            <Drawer.Screen name="Home" component={Home} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='home' size={25} color='#202020'></Icon>
                    )
                }
            }}/>
            <Drawer.Screen name="Fav" component={Fav} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='heart' size={25} color='#202020'></Icon>
                    )
                }
            }} />
            <Drawer.Screen name="LockedTask" component={LockedTask} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='lock' size={25} color='#202020'></Icon>
                    )
                }
            }} />
            <Drawer.Screen name="RecycleBin" component={RecycleBin} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='trash' size={25} color='#202020'></Icon>
                    )
                }
            }}/>
            <Drawer.Screen name="Categories" component={Categories} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='package' size={25} color='#202020'></Icon>
                    )
                }
            }}/>
            <Drawer.Screen name="Settings" component={Settings} options={{
                drawerIcon: () => {
                    return (
                        <Icon name='settings' size={25} color='#202020'></Icon>
                    )
                }
            }}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator