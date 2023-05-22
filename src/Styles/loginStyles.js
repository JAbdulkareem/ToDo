
import { StyleSheet } from "react-native"

const loginStyles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#70808E',
            flex: 1,
        },
        heading:
        {
            color: '#ffffff',
            fontWeight: 400,
            fontSize: 30,
            fontStyle: 'italic',
            marginTop:'7%',
            alignSelf:"center",
        },
        image:
        {
            height:200,
            width:200,
            resizeMode:'contain',
            alignSelf:'center'
        },
        text:
        {
            fontSize: 22,
            color:'#ffffff',
            padding: 15,

        },
        input:
        {
            height: 50,
            width: '90%',
            color: '#202020',
            fontSize:18,
            marginLeft: 20,
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderRadius: 10,
            paddingLeft:10

        },
        eye:
        {
            position:'absolute',
            right:'8%',
            padding:10
        },
        errormsg:
        {
            color:'#C84343',
            fontWeight:500,
            fontSize:15,
            marginTop:'1%',
            marginLeft:'6%'
        },
        btn:
        {
            width:250,
            height:50,
            alignSelf:'center',
            borderRadius:20,
            backgroundColor:'#1F1B1B'
        },
        btntitle:
        {
            color:'#ffffff',
            fontSize:22,

        },
        signup:
        {
            marginTop:'5%',
            fontSize: 18,
            color:'#ffffff',
            alignSelf:'center'
        },
        hyperlink:
        {
            color: '#00A3FF',
            fontWeight:500
        }

    }
)
export default loginStyles