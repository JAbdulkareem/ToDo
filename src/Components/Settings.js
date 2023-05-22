import { React, useContext, useState } from "react";
import { View, TouchableOpacity, Text, Modal } from "react-native";
import { ThemeConsumer, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OpenDrawer from "./header";
import AppContext from "../context/AppContext";
import Signup from "./Signup";
import Header from "./header";


const Settings = ({ navigation }) => {
    //context used to manage User data globally
    const { user, setUser } = useContext(AppContext)
    //local state to manage Modal visibility
    const [open, setOpen] = useState(false)
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.settingStyles.container}>
                       
                        <Header title='Settings' drawer={() => navigation.openDrawer()} close={() => navigation.goBack()} />


                        <TouchableOpacity>
                            <Text style={theme.settingStyles.hyperlink} onPress={() => setOpen(!open)}>Edit</Text>
                        </TouchableOpacity>
                        <Avatar rounded source={require('../assets/splash.png')}
                            size={120}
                            containerStyle={theme.settingStyles.profile} />


                        <View style={{ marginTop: -10 }} >
                            <Text style={theme.settingStyles.label}>User Name :</Text>
                            <View style={theme.settingStyles.view}><Text style={theme.settingStyles.text}>{user?.username}</Text></View>
                            <Text style={theme.settingStyles.label}>E-mail : </Text>
                            <View style={theme.settingStyles.view}><Text style={theme.settingStyles.text}>{user?.email}</Text></View>
                            <Text style={theme.settingStyles.label}>Password : </Text>
                            <View style={theme.settingStyles.view}><Text style={theme.settingStyles.text}>{user?.password}</Text></View>
                        </View>

                        <Modal visible={open} animationType="fade">
                            <Signup edit={true} close={setOpen} />

                        </Modal>






                    </View>
                )
            }
        </ThemeConsumer>

    )
}

export default Settings