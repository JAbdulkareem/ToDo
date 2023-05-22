import React from "react"
import { StyleSheet } from "react-native"
const customDrawerstyles = StyleSheet.create(
    {
        container:{ 
            flex: 1, 
            backgroundColor: '#8294A4',
        },
        profile: {
            position: 'absolute',
            marginTop: 45,
            alignSelf: 'center',
            borderColor: '#EAFCD7',
            borderWidth: 5,
        },
        username: {
            fontSize: 25,
            position: 'absolute',
            marginTop: 165,
            alignSelf: "center",
            color: '#202020',
            fontWeight: 600,
        },
        last:
        {
            fontSize:15,
            fontWeight:500,
            padding:10,
            marginLeft:20,
            color:'#f5f5f5',

        }
    }
)

export default customDrawerstyles