
import { StyleSheet } from "react-native"

const signupStyles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#70808E',
            flex: 1,
        },
        formik:
        {
            flex: 1,
            position: "absolute",
            width: '100%',
            marginTop: '15%',
            height: '100%'
        },
        heading:
        {
            color: '#ffffff',
            fontWeight: 400,
            fontSize: 30,
            fontStyle: 'italic',
            marginTop: '7%',
            alignSelf: "center",
        },
        text:
        {
            fontSize: 22,
            color: '#ffffff',
            padding: 15,

        },
        input:
        {
            height: 50,
            width: '90%',
            color: '#202020',
            fontSize: 18,
            marginLeft: 20,
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: 10,
            paddingLeft:10


        },
        image:
        {
            marginTop: 570,
            left: '-10%',
            opacity: 0.6,
            zIndex: -10
        },
        eye:
        {
            position: 'absolute',
            right:'8%',
            padding:10
        },
        errormsg:
        {
            color: '#CA3737',
            fontWeight: 500,
            fontSize: 15,
            marginTop: '1%',
            marginLeft: '6%'
        },
        btn:
        {
            width: 250,
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
        signup:
        {
            marginTop: '5%',
            fontSize: 18,
            color: '#ffffff',
            alignSelf: 'center'
        },
        hyperlink:
        {
            color: '#00A3FF',
            fontWeight: 500
        },
        btn1:
        {
            width: 120,
            height: 50,
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: '#1F1B1B',
            borderWidth: 3,
            backgroundColor: 'rgba(255,255,255,0.8)'
        },
        btntitle1:
        {
            color: '#202020',
            fontSize: 18,

        },
        btn2:
        {
            width: 120,
            height: 50,
            alignSelf: 'center',
            borderRadius: 20,
            backgroundColor: '#1F1B1B'
        },
        btntitle2:
        {
            color: '#ffffff',
            fontSize: 18,

        },

    }
)
export default signupStyles