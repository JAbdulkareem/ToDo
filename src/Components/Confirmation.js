import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay, Button, ThemeConsumer } from "react-native-elements";

const Confirmation = (props) => {
    return (
        <ThemeConsumer>
            {
                ({ theme }) =>
                (
                    <View >
                        <Text style={theme.confirmationStyles.overheading}>Are you Sure ?</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Button title='Cancel'
                                onPress={() => props?.close(false)}
                                containerStyle={{ marginTop: '5%' }}
                                buttonStyle={theme.confirmationStyles.overbtn1} titleStyle={theme.confirmationStyles.overbtntitle1} />
                            <Button title='OK'
                                onPress={props?.action}
                                containerStyle={{ marginTop: '5%' }}
                                buttonStyle={theme.confirmationStyles.overbtn2} titleStyle={theme.confirmationStyles.overbtntitle2} />
                        </View>


                    </View>
                )
            }


        </ThemeConsumer>
    )
}



export default Confirmation