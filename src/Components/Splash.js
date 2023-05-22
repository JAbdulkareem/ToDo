import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { ThemeConsumer } from "react-native-elements";

const Splash = () => {
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.splahStyles.container}>
                        <Image source={require('../assets/splash.png')} style={theme.splahStyles.image} />
                        <Text style={theme.splahStyles.text}>Boost your Productivity with Our To-Do</Text>
                    </View>
                )
            }

        </ThemeConsumer>
    )
}


export default Splash