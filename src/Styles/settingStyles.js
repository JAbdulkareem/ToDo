import React from "react";
import { StyleSheet } from "react-native";

const settingStyles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#393C49',
            flex: 1
        },
        topContainer:
        {
            width: 240,
            flexDirection: 'row',
            marginTop: '3%'
        },
        menuBackground:
        {
            height: 53,
            width: 53,
            backgroundColor: '#1F1D2B',
            borderRadius: 50,
            justifyContent: 'center',
            marginTop: '20%',
            marginLeft: '5%'
        },
        menuIcon:
        {
            alignSelf: "center",
        },
        heading:
        {
            fontSize: 30,
            marginTop: 20,
            alignSelf: "center",
            color: '#dbd7d2',
            marginLeft: 90,
            fontWeight: 600,
        },
        profile: {
            marginTop: 5,
            alignSelf: 'center',
            borderColor: '#EAFCD7',
            borderWidth: 5,
        },
        hyperlink:
        {
            color: '#00A3FF',
            fontSize: 20,
            fontWeight: 600,
            paddingTop:15,
            marginLeft:'auto',
            paddingRight:20
        },
        view:
        {
            marginHorizontal:15,
            backgroundColor: '#2D303E',
            borderRadius: 20,
            borderColor: 'rgba(0,0,0,0.5)',
            borderWidth: 3,
        },
        text:
        {
            fontSize: 22,
            fontWeight: 600,
            color: '#dbd7d2',
            padding: 5,
            paddingLeft: 15

        },
        label:
        {
            fontFamily: 'arial',
            fontSize: 22,
            color: '#dbd7d2',
            padding: 15,
        },
    }
)
export default settingStyles