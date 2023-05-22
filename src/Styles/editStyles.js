const { StyleSheet } = require("react-native");

const editStyles = StyleSheet.create(
    {

        container:
        {
            backgroundColor: '#393C49',
            flex: 1
        },
        topContainer:
        {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '2%',
            paddingBottom: '5%',
            paddingLeft: '2%',
            paddingRight: '5%',
        },
        menuBackground:
        {
            height: 50,
            width: 50,
            backgroundColor: '#1F1D2B',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        heading:
        {
            fontSize: 27,
            color: '#dbd7d2',
            fontWeight: 600,
            flex: 1,
            fontWeight: 'bold',
            textAlign: 'center',


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
        catContainer:
        {
            backgroundColor: 'rgba(255,255,255,0.5)',
            marginHorizontal: 5,
            width:100,
            borderRadius: 10,
            // height:100,
            // marginTop: 10,
            marginLeft: 20
        },
        catimage:
        {
            height: 50,
            width: 50,
            alignSelf: 'center',
            marginLeft: 5,
            borderRadius: 50,
            padding: 20
        },
        catname:
        {
            color: '#343434',
            padding: 10,
            paddingRight: 15,
            fontSize: 20,
            fontWeight: 400,
            alignSelf: 'center'
        },
        hyperlinkDiv:
        {
            flexDirection: "row",
            justifyContent: 'space-between',
            paddingLeft:'60%',
            paddingRight:'5%'
        },
        hyperlink:
        {
            color: '#00A3FF',
            fontSize: 20,
        },
    }
)

export default editStyles