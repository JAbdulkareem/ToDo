import React from "react";
import { StyleSheet } from "react-native";

const favStyles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#393C49',
            flex: 1
        },
        image:
        {
            position: 'absolute',
            height: 100,
            width: 100,
            resizeMode: 'contain',
            marginLeft: '60%',
            marginTop: '5%'

        },
        taskContainer:
        {
            backgroundColor: '#75ABA0',
            padding: 5,
            marginHorizontal: 15,
            marginVertical: 10,
            borderRadius: 20,
            elevation: 5
        },
        taskImage:
        {
            height: 50,
            width: 50,
        },
        taskTitle:
        {
            fontSize: 25,
            fontWeight: 500,
            color: '#ffffff',
            alignSelf: "center",
            marginLeft: "3%"
        },
        taskDesc:
        {
            fontSize: 20,
            fontWeight: 400,
            marginLeft: '5%',
            color: '#ffffff'
        },
        taskDate:
        {
            paddingHorizontal: 15,
            paddingTop: 10,
            fontSize: 13,
            fontWeight: 400,
            color: '#202020',
        },
        taskTime:
        {
            paddingHorizontal: 5,
            paddingTop: 10,
            fontSize: 13,
            fontWeight: 400,
            color: '#202020',


        },
        trash:
        {
            color: 'black',
            position: 'absolute',
            marginTop: 80,
            right: '1%'
        },
        heart:
        {

            marginTop: 6, marginLeft: 320,
            position: 'absolute'

        },
        emptytext: {
            fontSize: 25,
            fontWeight: 600,
            marginTop: '10%',
            alignSelf: 'center',
            color: '#ABBBC2'
        },
        emptyimage: {
            height: 150,
            width: 150,
            resizeMode: 'contain',
            alignSelf: "center",
            marginTop: 100
        },
    }
)
export default favStyles