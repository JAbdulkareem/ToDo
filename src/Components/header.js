import React from "react";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";


const Header = (props) => {
    return (
        <View style={style.topContainer}>
            <TouchableOpacity onPress={props.close}>
                <View style={style.arrowBackground}>
                    <Icon name="arrow-left" color='white' size={23} style={style.arrowIcon}
                    />
                </View>
            </TouchableOpacity>
            <Text style={style.heading}>{props.title}</Text>
            <TouchableOpacity onPress={props.drawer}>
                <View style={style.menuBackground}>
                    <Ionicons name="grid-outline" color='white' size={25} style={style.menuIcon}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create(
    {
        topContainer:
        {
            // width: 240,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '3%',
            paddingHorizontal: 5,
        },
        arrowBackground:
        {
            height: 53,
            width: 53,
            backgroundColor: '#1F1D2B',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        arrowIcon:
        {
            alignSelf: "center",
        },
        menuBackground:
        {
            height: 55,
            width: 55,
            backgroundColor: '#1F1D2B',
            borderRadius: 50,
            justifyContent: 'center',
            // marginTop: '-20%',
            // marginLeft: '83%'
        },
        menuIcon:
        {
            alignSelf: "center",
        },
        heading:
        {
            fontSize: 27,
            // marginTop: 20,
            // alignSelf: "center",
            color: '#dbd7d2',
            // marginLeft: 25,
            fontWeight: 600,
        },
    }
)
export default Header