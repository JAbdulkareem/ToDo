import React from "react";
import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#393C49',
            flex: 1
        },
        topContainer:
        {
            width: '100%',
            flexDirection:'row',
            justifyContent:'space-between',
            paddingRight:20,
            alignItems:'center'
        },
        menuBackground:
        {
            height: 55,
            width: 55,
            backgroundColor: '#1F1D2B',
            borderRadius: 50,
            justifyContent: 'center',
        },
        menuIcon:
        {
            alignSelf: "center",
        },
        heading:
        {
            fontSize: 30,
            marginTop: 10,
            marginLeft: 20,
            color: '#dbd7d2',
            fontWeight: 400,
        },
        heading2:
        {
            fontSize: 25,
            color: '#dbd7d2',
            fontWeight: 400,
        },
        headname:
        {
            fontSize: 30,
            marginLeft: 20,
            fontWeight: 800,
            color: '#dbd7d2',
        },
        search:
        {
            marginTop: '3%',
            backgroundColor: null,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            width: '95%',
            alignSelf: "center"

        },
        searchinput:
        {
            backgroundColor: '#E2DFD2',
            borderRadius: 15,
            height: 45,

        },
        catContainer1:
        {
            backgroundColor: '#7374C3',
            height: 45,
            width: 'auto',
            marginHorizontal: 7,
            borderRadius: 30,
            flexDirection: 'row'
        },
        catContainer2:
        {
            backgroundColor: '#1F1D2B',
            height: 45,
            width: 'auto',
            marginHorizontal: 7,
            borderRadius: 30,
            flexDirection: 'row'
        },
        catImage:
        {
            height: 30,
            width: 30,
            alignSelf: 'center',
            marginLeft: 5,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 50,
            padding: 20

        },
        catText:
        {
            color: '#dbd7d2',
            padding: 8,
            paddingRight: 10,
            fontSize: 20,
            fontWeight: 400,
        },
        flatlist:
        {
            marginTop: 10,
            marginBottom: 80
        },
        taskContainer1:
        {
            backgroundColor: '#75ABA0',
            padding: 5,
            marginHorizontal: 15,
            marginVertical: 10,
            borderRadius: 20,
            elevation: 5
        },
        taskContainer2:
        {
            backgroundColor: 'rgba(255,255,255,0.6)',
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
            color: '#ffffff',
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
            color: '#343434',
            position: 'absolute',
            marginTop: 80,
            right: '1%'
        },
        addFab:
        {
            position: 'absolute',
            marginLeft: '75%',
            marginTop: '165%'

        },
        hyperlink:
        {
            color: '#00A3FF',
            fontSize: 20,
            fontWeight: 600,
            alignSelf: "baseline"
        },

        heart:
        {

            marginTop: '1%',
            right: '1%',
            position: 'absolute'

        },
        overlay:
        {
            width: 300,
            borderRadius: 20,
            backgroundColor: '#70808E',
        },
    }
)

export default homeStyles