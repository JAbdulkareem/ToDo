import React, { useContext } from "react";
import { View, TouchableOpacity, Image, Text, VirtualizedList, ToastAndroid } from "react-native";
import { ThemeConsumer } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AppContext from "../context/AppContext";
import Header from "./header";




const Fav = ({ navigation }) => {
    //context used to manage Favourites task data globally
    const { fav, setFav } = useContext(AppContext)

    //function to display Toast Messages
    const Toast = msg => (
        ToastAndroid.showWithGravity(msg,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM)
    )

    //function used to delete task from Favourites task
    const deleteTask = (item) => {
        let arr = [...fav]
        item.fav = false
        let filter = arr.filter(i => i.id != item.id)
        Toast('Task Removed from Favourites')
        setFav(filter)
    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.favStyles.container}>
                       
                        <Header title='Your Favourites' drawer={()=>navigation.openDrawer()} close={()=>navigation.goBack()}/>


                        {fav.length == 0 ?
                            <View>
                                <Image source={require('../assets/brokenheart.png')} style={theme.favStyles.emptyimage} />
                                <Text style={theme.favStyles.emptytext}>No Task in Favourites</Text>
                            </View>
                            :
                            <View style={{ marginTop: 30 }}>
                                <VirtualizedList
                                    data={fav}
                                    initialNumToRender={5}
                                    getItem={(data, index) => data[index]}
                                    getItemCount={data => data.length}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity onPress={() => item.lock == false && navigation.navigate('Editnotes', item)}>
                                                <View style={theme.favStyles.taskContainer}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Image source={item.image} style={theme.favStyles.taskImage} />
                                                        <Text style={theme.favStyles.taskTitle}>{item.title}</Text>
                                                        {item.lock && <EvilIcons name='lock' color='#343434' size={40} style={theme.favStyles.heart} />}
                                                    </View>
                                                    <Text style={theme.favStyles.taskDesc}>{item.description}</Text>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Text style={theme.favStyles.taskDate}>{item.date}</Text>
                                                        <Text style={theme.favStyles.taskTime}>{item.time}</Text>
                                                    </View>
                                                    {item.lock ? null : <EvilIcons name="trash" size={40} style={theme.favStyles.trash} onPress={() => deleteTask(item)} />}

                                                </View>
                                            </TouchableOpacity>

                                        )
                                    }} />
                            </View>}
                    </View>
                )
            }
        </ThemeConsumer>

    )
}

export default Fav