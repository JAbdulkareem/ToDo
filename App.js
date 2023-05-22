import React, { useState, useEffect } from "react";
import { View,Image,Text } from "react-native";
import { Overlay, ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useNetInfo} from '@react-native-community/netinfo'
import Splash from "./src/Components/Splash";
import Login from "./src/Components/Login";
import Signup from "./src/Components/Signup";
import DrawerNavigator from "./src/Components/DrawerNavigator";
import Theme from "./src/Theme";
import AppContext from "./src/context/AppContext";
import CategoriesData from "./src/Datas/CategoriesData";
import Data from "./src/Datas/Data";
import AddNotes from "./src/Components/AddNotes";
import Editnotes from "./src/Components/Editnotes";


const App = () => {
  //the local state used to manage types of Categories data 
  const [catData, setCatData] = useState(CategoriesData)
  //the local state used to manage user details while signup
  const [user, setUser] = useState({})
  //the local state used to manage main task data
  const [data, setData] = useState(Data)
  //the local state used to manage favourites data 
  const [fav, setFav] = useState([])
  //the local state used to manage locked task data
  const [lock, setLock] = useState([])
  //the local state used to manage the Deleted task data
  const [bin, setBin] = useState([])
  //the local state used to manage to change the rendering of Splash 
  const [splash, setSplash] = useState(true)
  //the local state used to manage the Async login
  const [login, setLogin] = useState(false)
  //the local state used to manage the User key while login from Firebase
  const [userKey, setUserKey] = useState()
  const [load,setLoad] = useState(false)


  //variable used for Stack screen
  const Stack = createStackNavigator()
  const netinfo = useNetInfo()

  useEffect(() => {
    Async()
  }, [])


  //function used to fetch data from Async Storage
  const Async = async () => {
    let res
    await AsyncStorage.getItem('login')
      .then(async (val) => {
        if (val == 'true') {
          res = true
          await AsyncStorage.getItem('UD').then(val => setUser(JSON.parse(val)))
          await AsyncStorage.getItem('key').then(val => setUserKey(val))
        }
        else {
          res = false
        }
      })
    setLogin(res)
    setSplash(false)
   


  }

  if (splash) {
    return (
      <ThemeProvider theme={Theme}>
        <Splash />
      </ThemeProvider>
    )
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        catData,
        setCatData,
        data,
        setData,
        fav,
        setFav,
        lock,
        setLock,
        bin,
        setBin,
        userKey,
        setUserKey,
        load,
        setLoad
      }}>
        <Overlay visible={netinfo.isConnected == false} overlayStyle={{height:200,width:300,borderRadius:20,alignItems:'center',backgroundColor: '#ffffff'}}>
          <View>
            <Image source={require('./src/assets/wifi.png')} style={{height:100,width:100,resizeMode:'contain',alignSelf:"center"}} />
            <Text style={{fontSize:18,textAlign:'center',color: '#343434'}}>Check your Internet Connection and Try Again</Text>
          </View>
        </Overlay>
      <ThemeProvider theme={Theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={login ? "DrawerNavigator" : 'Login'}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen name="AddNotes" component={AddNotes} />
            <Stack.Screen name="Editnotes" component={Editnotes} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App