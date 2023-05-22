import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Image, Text, ToastAndroid } from "react-native";
import { ThemeConsumer, Overlay } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import OpenDrawer from "./header";
import AppContext from "../context/AppContext";
import Confirmation from "./Confirmation";
import Header from "./header";


const LockedTask = ({ navigation }) => {
    //context used to manage locked task data globally
    const { lock, setLock } = useContext(AppContext)
    //context used to manage Main Task data globally
    const { data, setData } = useContext(AppContext)
    //local state used to open and close confirmation message
    const [confirm, setConfirm] = useState(false)


    //function to display Toast messages
    const Toast = msg => (
        ToastAndroid.showWithGravity(msg,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM)
    )

    //function to unlock particular task
    const unLock = (item) => {
        item.lock = false
        let arr = [...lock]
        let filter = arr.filter(i => i.id != item.id)
        setLock(filter)
        Toast("Task Unlocked")
    }

    //function to unlock all task in locked task
    const unlockAll = () => {
        let arr = [...data]
        arr.map(l => {
            l.lock = false
        })
        setData(arr)
        setLock([])
        setConfirm(!confirm)

    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.lockStyles.container}>
                       
                        <Header title='Locked Tasks' drawer={() => navigation.openDrawer()} close={() => navigation.goBack()} />

                        {lock.length != 0 && <Text style={theme.lockStyles.hyperlink} onPress={() => setConfirm(!confirm)}>Unlock All</Text>}


                        <Overlay animationType="fade" visible={confirm} onBackdropPress={() => setConfirm(!confirm)}
                            overlayStyle={theme.homeStyles.overlay} >
                            <Confirmation close={setConfirm} action={() => unlockAll()} />
                        </Overlay>

                        {lock.length == 0 ?
                            <View>
                                <Image source={require('../assets/lock.png')} style={theme.lockStyles.emptyimage} />
                                <Text style={theme.lockStyles.emptytext}>No Task is Locked</Text>
                            </View>
                            :

                            <View style={{ marginTop: 20 }}>
                                <FlatList
                                    data={lock}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity onPress={() => item.lock == false && navigation.navigate('Editnotes', item)}>
                                                <View style={theme.lockStyles.taskContainer}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Image source={item.image} style={theme.favStyles.taskImage} />
                                                        <Text style={theme.lockStyles.taskTitle}>{item.title}</Text>
                                                        <EvilIcons name='unlock' color='#343434' size={40} style={theme.lockStyles.heart} onPress={() => unLock(item)} />

                                                    </View>
                                                    <Text style={theme.lockStyles.taskDesc}>{item.description}</Text>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Text style={theme.lockStyles.taskDate}>{item.date}</Text>
                                                        <Text style={theme.lockStyles.taskTime}>{item.time}</Text>
                                                    </View>

                                                </View>
                                            </TouchableOpacity>

                                        )
                                    }}
                                />
                            </View>}

                    </View>
                )
            }
        </ThemeConsumer>

    )
}

export default LockedTask