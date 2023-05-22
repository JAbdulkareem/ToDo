import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text, Image, Modal } from "react-native";
import { ThemeConsumer } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome'
import AppContext from "../context/AppContext";
import AddNotes from "./AddNotes";

const Editnotes = ({ route, navigation }) => {
    //variable used for params
    const item = route.params
    //local state to manag open and close Edit Profile Modal
    const [open, setOPen] = useState(false)
    //context used to manage main task data globally
    const { data, setData } = useContext(AppContext)
    //context used to manage locked  task data globally
    const { lock, setLock } = useContext(AppContext)


    //function to manage locked task data
    const locked = (item) => {
        let arr = [...data]
        let i = arr.findIndex(i => i.id == item.id)
        if (arr[i].lock == false) {
            arr[i].lock = true
            setLock(prev => [...prev, item])
        }
        else {
            arr[i].lock = false
            let lockarr = [...lock]
            let filter = lockarr.filter(i => i.id != item.id)
            setLock(filter)
        }
        setData(arr)
    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.editStyles.container}>
                        <View style={theme.editStyles.topContainer}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={theme.editStyles.menuBackground}>
                                    <Icon name="arrow-left" color='white' size={23} 
                                    />
                                </View>
                            </TouchableOpacity>
                                <Text style={theme.editStyles.heading}>Your Task</Text>

                        </View>
                        <View style={theme.editStyles.hyperlinkDiv}>
                            <TouchableOpacity>
                                <Text style={theme.editStyles.hyperlink} onPress={() => locked(item)}>{item?.lock == true ? 'Unlock' : 'Lock'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={theme.editStyles.hyperlink} onPress={() => setOPen(!open)}>Edit</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: -10 }} >
                            <Text style={theme.editStyles.label}>Title :</Text>
                            <View style={theme.editStyles.view}><Text style={theme.editStyles.text}>{item?.title}</Text></View>
                            <Text style={theme.editStyles.label}>Short Description : </Text>
                            <View style={theme.editStyles.view}><Text style={theme.editStyles.text}>{item?.description}</Text></View>
                            <Text style={theme.editStyles.label}>Description : </Text>
                            <View style={theme.editStyles.view}><Text style={theme.editStyles.text}>{item?.content}</Text></View>
                            <Text style={theme.editStyles.label}>Category : </Text>
                            <View style={theme.editStyles.catContainer}>
                                <Image source={item?.image} style={theme.editStyles.catimage} />
                                <Text style={theme.editStyles.catname} >{item?.category}</Text>
                            </View>
                        </View>

                        <Modal visible={open} animationType="slide">
                            <AddNotes edit={true} item={item} />
                        </Modal>
                    </View>
                )
            }
        </ThemeConsumer>
    )
}

export default Editnotes