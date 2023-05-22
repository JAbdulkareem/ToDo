import React, { useContext, useEffect, useState,useRef } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, Image, Alert, ScrollView } from "react-native";
import { ThemeConsumer, Button } from "react-native-elements";
import { Formik } from 'formik'
import * as yup from 'yup'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import AppContext from "../context/AppContext";



const Login = ({ navigation }) => {
    //local state used to manage password visibility
    const [showPassword, setShowpassword] = useState(true)
    //context used to manage User data globally
    const { user, setUser } = useContext(AppContext)
    //local state to manage userData from Firebase
    const [userData, setUserData] = useState([])
    //context used to manage userKey while login from Firebase
    const{userKey,setUserKey, load} = useContext(AppContext)
    //variable used for Formik Refernce to reset values


    const formikRef = useRef()

    useEffect(() => {
        getData()
    }, [load])
    
    console.log(Object.values(userData));
    //function to fetch user data from Firebase
    const getData =async () => {
        await axios.get('https://to-do-bb195-default-rtdb.firebaseio.com/data.json')
            .then(val => {
                setUserData(val.data)
            })
    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <KeyboardAvoidingView style={theme.loginStyles.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style={theme.loginStyles.heading}>Login</Text>
                            <Image source={require('../assets/login1.png')} style={theme.loginStyles.image} />


                            <Formik
                                innerRef={formikRef}
                                initialValues={{ username: '', password: '' }}
                                validationSchema={validation}
                                onSubmit={async val => {
                                    let valid = true

                                    Object.values(userData).map(async (l) => {
                                        if (val.username === l.username && val.password === l.password) {
                                            valid = false
                                            setUser(l)
                                            setUserKey(Object.keys(l))
                                            await AsyncStorage.setItem('login', 'true')
                                            await AsyncStorage.setItem('UD', JSON.stringify(l))
                                            navigation.navigate('DrawerNavigator')
                                        }
                                    })
                                    Object.keys(userData).map(async l =>{
                                        if(userData[l].username == val.username)
                                        {
                                            await AsyncStorage.setItem('key', l)
                                            setUserKey(l)

                                        }
                                    })

                                    if (valid) {
                                        Alert.alert("Invalid Credentials")
                                    }
                                }}>

                                {({ handleBlur, handleChange, values, errors, handleSubmit, isValid, touched }) => (
                                    <View>

                                        <Text style={theme.loginStyles.text}>Username</Text>
                                        <TextInput
                                            name="username"
                                            style={theme.loginStyles.input}
                                            placeholder="Enter Username"
                                            placeholderTextColor='rgba(0,0,0,0.5)'
                                            onChangeText={handleChange('username')}
                                            onBlur={handleBlur('username')}
                                            value={values.username}
                                        />

                                        {(errors.username && touched.username) &&
                                            <Text style={theme.loginStyles.errormsg}>{errors.username}</Text>
                                        }

                                        <Text style={theme.loginStyles.text} >Password</Text>
                                        <View style={{ height: 50 }}>
                                            <TextInput
                                                name='password'
                                                style={theme.loginStyles.input}
                                                placeholderTextColor='rgba(0,0,0,0.5)'
                                                placeholder='Enter the Password'
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                secureTextEntry={showPassword}
                                                values={values.password}
                                            />
                                            <Icon name={showPassword ? 'eye-slash' : 'eye'} color='#202020' size={25} style={theme.loginStyles.eye} onPress={() => setShowpassword(!showPassword)} />

                                        </View>
                                        {errors.password && touched.password &&
                                            <Text style={theme.loginStyles.errormsg}>{errors.password}</Text>}


                                        <Button title='Login'
                                            disabled={!isValid}
                                            onPress={handleSubmit}
                                            containerStyle={{ marginTop: '13%' }}
                                            buttonStyle={theme.loginStyles.btn} titleStyle={theme.loginStyles.btntitle} />
                                    </View>
                                )}

                            </Formik>
                            <Text style={theme.loginStyles.signup}>Don't have an Account ?, <Text style={theme.loginStyles.hyperlink} onPress={() => {formikRef?.current?.resetForm();navigation.navigate('Signup')}}>Sign Up</Text></Text>
                        </ScrollView>
                    </KeyboardAvoidingView>
                )
            }
        </ThemeConsumer>

    )
}

const validation = yup.object().shape(
    {
        username: yup
            .string()
            .required('UserName is Required'),

        password: yup
            .string()
            .required('Password is Required')
    }
)
export default Login