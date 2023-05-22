import React from "react";
import { StyleSheet } from "react-native";

const catStyles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#393C49',
            flex: 1
        },
      
        flatlist:
        {
            marginTop: 30,
            alignSelf: "center"
        },
       
        image:
        {
            height: 70,
            width: 70,
            alignSelf: 'center',
            marginLeft: 5,
            padding: 20
        },
        name:
        {
            color: '#343434',
            padding: 5,
            fontSize: 20,
            fontWeight: 500,
            alignSelf: 'center'
        },

        catContainer:
        {
            backgroundColor: 'rgba(255,255,255,0.8)',
            marginHorizontal: 7,
            borderRadius: 10,
            marginVertical: 7,
            width: 100,
            height: 130,
            alignSelf: 'center',
            marginTop: 10
        },
        overlay:
        {
            width: 330,
            borderRadius: 20,
            backgroundColor: '#70808E',
        },
        overheading:
        {
            fontSize: 25,
            marginVertical: 10,
            alignSelf: "center",
            color: '#dbd7d2',
            marginLeft: 20,
            fontWeight: 600,
        },
        overimage:
        {
            height: 50,
            width: 50,
            alignSelf: 'center',
            marginLeft: 5,
            padding: 20
        },
        overname:
        {
            color: '#343434',
            padding: 10,
            paddingRight: 15,
            fontSize: 20,
            fontWeight: 400,
            alignSelf: 'center',
            textAlign: 'center'
        },
        catContainer1:
        {
            backgroundColor: 'rgba(255,255,255,0.5)',
            marginHorizontal: 5,
            borderRadius: 10,
            marginVertical: 5,
            width: 95,
            alignSelf: 'center',
            marginTop: 10,
            height: 110,
        },
        catContainer2:
        {
            backgroundColor: 'white',
            marginHorizontal: 5,
            borderRadius: 10,
            marginVertical: 5,
            width: 95,
            alignSelf: 'center',
            marginTop: 10,
            height: 110,

        },
        btnContainer:
        {
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        overbtn1:
        {
            marginTop: '10%',
            width: 120,
            height: 50,
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: '#1F1B1B',
            borderWidth: 3,
            backgroundColor: 'rgba(255,255,255,0.8)'
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
        overbtntitle1:
        {
            color: '#202020',
            fontSize: 18,

        },
        overbtn2:
        {
            marginTop: '10%',
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
export default catStyles