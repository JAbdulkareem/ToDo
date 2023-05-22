import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Image, Text, ToastAndroid } from "react-native";
import { ThemeConsumer, Overlay } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import OpenDrawer from "./header";
import AppContext from "../context/AppContext";
import OriginalData from "../Datas/OriginalData";
import Confirmation from "./Confirmation";
import Header from "./header";


const RecycleBin = ({ navigation }) => {
    //context used to manage Deleted task data globally
    const { bin, setBin } = useContext(AppContext)
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

    //function to restore deleted task
    const restoreTask = (item, index) => {
        let mainarr = [...data]
        let arr = [...bin]
        let filter = arr.filter(i => i.id != item.id)
        setBin(filter)
        let find = OriginalData.findIndex(i => i.id == item.id)
        mainarr.splice(find, 0, item)
        console.log(mainarr);
        setData(mainarr)
        Toast("Task Restored")
    }

    //function to delete particular task permenantly
    const deleteTask = (item) => {
        let arr = [...bin]
        let filter = arr.filter(i => i.id != item.id)
        Toast('Task Deleted Permenantly')
        setBin(filter)

    }
    //function to delete all task permenantly
    const deleteAll = () => {
        setBin([])
        setConfirm(!confirm)
    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.binStyles.container}>
                  
                        <Header title='Recycle Bin' drawer={() => navigation.openDrawer()} close={() => navigation.goBack()} />


                        <TouchableOpacity style={{ marginTop: 20 }}>
                            {bin.length != 0 && <Text style={theme.binStyles.hyperlink} onPress={() => setConfirm(!confirm)}>Delete All</Text>}
                        </TouchableOpacity>

                        <Overlay animationType="fade" visible={confirm} onBackdropPress={() => setConfirm(!confirm)}
                            overlayStyle={theme.homeStyles.overlay} >
                            <Confirmation close={setConfirm} action={() => deleteAll()} />
                        </Overlay>


                        {bin.length == 0 ?
                            <View>
                                <Image source={require('../assets/bin.png')} style={theme.binStyles.emptyimage} />
                                <Text style={theme.binStyles.emptytext}>No Task in Recycle Bin</Text>
                            </View>
                            :
                            <View>
                                <FlatList
                                    data={bin}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity onPress={() => item.lock == false && navigation.navigate('Editnotes', item)}>
                                                <View style={theme.binStyles.taskContainer}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Image source={item.image} style={theme.favStyles.taskImage} />
                                                        <Text style={theme.binStyles.taskTitle}>{item.title}</Text>
                                                        <EvilIcons name='undo' color='#343434' size={40} style={theme.binStyles.heart} onPress={() => restoreTask(item, index)} />

                                                    </View>
                                                    <Text style={theme.binStyles.taskDesc}>{item.description}</Text>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Text style={theme.binStyles.taskDate}>{item.date}</Text>
                                                        <Text style={theme.binStyles.taskTime}>{item.time}</Text>
                                                    </View>
                                                    <EvilIcons name="trash" size={40} style={theme.binStyles.trash} onPress={() => deleteTask(item)} />

                                                </View>
                                            </TouchableOpacity>

                                        )
                                    }
                                    } />
                            </View>}

                    </View>
                )
            }
        </ThemeConsumer>

    )
}

export default RecycleBin