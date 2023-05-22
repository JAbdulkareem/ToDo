import React from "react";
import { StyleSheet } from "react-native";

const confirmationStyles = StyleSheet.create(
    {
        overlay:
        {
            width: 300,
            borderRadius: 20,
            backgroundColor: '#70808E',
        },
        overheading:
        {
            fontSize: 25,
            color: '#dbd7d2',
            marginLeft: 20,
            fontWeight: 600,
        },
        overbtn1:
        {
            width: 120,
            height: 50,
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: '#1F1B1B',
            borderWidth: 3,
            backgroundColor: 'rgba(255,255,255,0.8)'
        },
        overbtntitle1:
        {
            color: '#202020',
            fontSize: 18,

        },
        overbtn2:
        {
            width: 120,
            height: 50,
            alignSelf: 'center',
            borderRadius: 20,
            backgroundColor: '#1F1B1B'
        },
        overbtntitle2:
        {
            color: '#ffffff',
            fontSize: 18,

        },
    }
)

export default confirmationStyles