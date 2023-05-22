import React from "react";
import { StyleSheet } from "react-native";

const addStyles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#393C49',
            flex: 1
        },
        topContainer:
        {
            flexDirection: 'row',
            alignItems: "center"
        },
        menuBackground:
        {
            height: 50,
            width: 50,
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
            fontSize: 27,
            marginTop: 20,
            color: '#dbd7d2',
            marginLeft: 20,
            fontWeight: 600,
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
        label:
        {
            fontSize: 22,
            color: '#ffffff',
            padding: 15,

        },
        input:
        {
            height: 50,
            // width: '90%',
            marginHorizontal:20,
            color: '#202020',
            fontSize: 18,
            marginLeft: 20,
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: 10,
            paddingLeft:10
         
        },
       
        richEditorView:
        {
            // width: '95%',
            // alignSelf: "center",
            marginHorizontal:10,


        },
        richEditor:
        {
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius:10,
            placeholderColor:'#3b3c36',
            fontSize:18,
            color:'#202020'

        },
        richToolbar:
        {
            // width: '90%', 
            // alignSelf: 'center'
            marginHorizontal:20,

        },
        btn:
        {
            
            width: 150,
            height: 50,
            alignSelf: 'center',
            borderRadius: 20,
            backgroundColor: '#1F1B1B'
        },
        btntitle:
        {
            color: '#ffffff',
            fontSize: 22,

        },
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
        overimage:
        {
            height: 50,
            width: 50,
            alignSelf: 'center',
            marginLeft: 5,
            borderRadius: 50,
            padding: 20
        },
        overname:
        {
            color: '#343434',
            padding: 10,
            paddingRight: 15,
            fontSize: 20,
            fontWeight: 400,
            alignSelf: 'center'
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
        errormsg:
        {
            color:'#C84343',
            fontWeight:500,
            fontSize:15,
            marginTop:'1%',
            marginLeft:'6%'
        },
    }
)

export default addStyles