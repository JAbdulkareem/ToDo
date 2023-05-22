import React, { useContext } from "react";
import { View, Text,TouchableOpacity,Linking } from 'react-native';
import { Avatar, ThemeConsumer } from 'react-native-elements';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import AppContext from "../context/AppContext";

const CustomDrawer = (props) => {
    const navigation = useNavigation()
    //context used to manage main task data globally
    const { user, setUser } = useContext(AppContext)

    //function to manage Async logout operation
    const logout = async () => {
        await AsyncStorage.removeItem('login')
        await AsyncStorage.removeItem('UD')
        await AsyncStorage.removeItem('key')
        navigation.navigate('Login')

    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.customDrawerstyles.container}>
                        <DrawerContentScrollView {...props} >
                            <Avatar rounded source={require('../assets/splash.png')}
                                size={120}
                                containerStyle={theme.customDrawerstyles.profile} />
                            <Text style={theme.customDrawerstyles.username}>{user?.username}</Text>


                            <View style={{ marginTop:200}}>
                                <DrawerItemList {...props} />
                            </View>

                            <View style={{ marginTop: 150 }}>
                                <TouchableOpacity onPress={() => Linking.openURL('https://www.centizen.com/')}><Text style={theme.customDrawerstyles.last}>About US</Text></TouchableOpacity>
                                <TouchableOpacity  onPress={() => logout()}><Text style={theme.customDrawerstyles.last}>Logout</Text></TouchableOpacity>
                            </View>

                        </DrawerContentScrollView>
                    </View>
                )
            }

        </ThemeConsumer>
    )
}

export default CustomDrawer