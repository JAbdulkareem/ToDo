import React, { useContext, useState } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { ThemeConsumer, Button } from "react-native-elements";
import { Formik } from "formik";
import * as yup from 'yup'
import Icon from "react-native-vector-icons/FontAwesome";
import axios from 'axios'
import AppContext from "../context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Signup = ({ navigation, edit, close }) => {
    //local state used to manage password visibility
    const [showPassword, setShowpassword] = useState(true)
    //local state used to manage confirm password visibility
    const [showConfirmPassword, setShowConfirmpassword] = useState(true)
    //context used to manage User data globally
    const { user, setUser } = useContext(AppContext)
    const{userKey,setUserKey} = useContext(AppContext)
    const{load,setLoad} = useContext(AppContext)


    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <KeyboardAvoidingView style={theme.signupStyles.container}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style={theme.signupStyles.heading}>{edit ? 'Edit Profile' : 'Sign Up'}</Text>
                            <Image source={require('../assets/signup.png')} style={theme.signupStyles.image} />

                            <View style={theme.signupStyles.formik}>
                                <Formik
                                    initialValues={{ username: edit ? user.username : '', email: edit ? user.email : '', password: edit ? user.password : '', confirmPassword: edit ? user.confirmPassword : '', }}
                                    validationSchema={validation}
                                    onSubmit={async (val) => {
                                        let UD = user
                                        if (edit) {
                                            let updatedData = {username: val.username, email: val.email, password: val.password, confirmPassword: val.confirmPassword}
                                            setUser(prev => ({ ...prev,username: val.username, email: val.email, password: val.password, confirmPassword: val.confirmPassword}))
                                            await axios.put(`https://to-do-bb195-default-rtdb.firebaseio.com/data/${userKey}.json`,updatedData)
                                            await AsyncStorage.removeItem('UD')
                                            await AsyncStorage.setItem('UD',JSON.stringify(updatedData))
                                            close(false)

                                        }
                                        else {
                                            val.username = val.username.trim()
                                            await axios.post('https://to-do-bb195-default-rtdb.firebaseio.com/data.json',val)
                                            setUser(val)
                                            setLoad(!load)
                                            navigation.navigate('Login')

                                        }
                                    }}>

                                    {({ handleBlur, handleChange, values, errors, handleSubmit, isValid, touched }) => (
                                        <View>

                                            <Text style={theme.signupStyles.text}>Username</Text>
                                            <TextInput
                                                name="username"
                                                style={theme.signupStyles.input}
                                                placeholder="Enter Username"
                                                placeholderTextColor='rgba(0,0,0,0.5)'
                                                onChangeText={handleChange('username')}
                                                onBlur={handleBlur('username')}
                                                value={values.username}
                                            />

                                            {(errors.username && touched.username) &&
                                                <Text style={theme.signupStyles.errormsg}>{errors.username}</Text>
                                            }

                                            <Text style={theme.signupStyles.text}>E-mail</Text>
                                            <TextInput
                                                name="email"
                                                style={theme.signupStyles.input}
                                                placeholder="Enter Email"
                                                placeholderTextColor='rgba(0,0,0,0.5)'
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
                                                keyboardType="email-address"
                                            />

                                            {(errors.email && touched.email) &&
                                                <Text style={theme.signupStyles.errormsg}>{errors.email}</Text>
                                            }

                                            <Text style={theme.signupStyles.text} >Password</Text>
                                            <View style={{ height: 50 }}>
                                                <TextInput
                                                    style={theme.signupStyles.input}
                                                    name='password'
                                                    placeholder="Enter the Password"
                                                    placeholderTextColor='rgba(0,0,0,0.5)'
                                                    onChangeText={handleChange('password')}
                                                    onBlur={handleBlur('password')}
                                                    secureTextEntry={showPassword}
                                                    value={values.password} />

                                                <Icon name={showPassword ? 'eye-slash' : 'eye'} size={25} color='#202020' style={theme.loginStyles.eye} onPress={() => setShowpassword(!showPassword)} />

                                            </View>
                                            {errors.password && touched.password &&
                                                <Text style={theme.signupStyles.errormsg}>{errors.password}</Text>}

                                            <Text style={theme.signupStyles.text} >Confirm Password</Text>
                                            <View style={{ height: 50 }}>
                                                <TextInput
                                                    name='confirmPassword'
                                                    style={theme.signupStyles.input}
                                                    placeholderTextColor='rgba(0,0,0,0.5)'
                                                    placeholder='Enter the Confirm Password'
                                                    onChangeText={handleChange('confirmPassword')}
                                                    onBlur={handleBlur('confirmPassword')}
                                                    secureTextEntry={showConfirmPassword}
                                                    value={values.confirmPassword}
                                                />
                                                <Icon name={showConfirmPassword ? 'eye-slash' : 'eye'} color='#202020' size={25} style={theme.signupStyles.eye} onPress={() => setShowConfirmpassword(!showConfirmPassword)} />

                                            </View>
                                            {errors.confirmPassword && touched.confirmPassword &&
                                                <Text style={theme.signupStyles.errormsg}>{errors.confirmPassword}</Text>}


                                            {edit ? <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                                <Button title='Cancel'
                                                    onPress={() => close(false)}
                                                    containerStyle={{ marginTop: '10%' }}
                                                    buttonStyle={theme.signupStyles.btn1} titleStyle={theme.signupStyles.btntitle1} />
                                                <Button title='OK'
                                                    onPress={handleSubmit}
                                                    containerStyle={{ marginTop: '10%' }}
                                                    buttonStyle={theme.signupStyles.btn2} titleStyle={theme.signupStyles.btntitle2} />
                                            </View> :
                                                <Button title='Signup'
                                                    disabled={!isValid}
                                                    onPress={handleSubmit}
                                                    containerStyle={{ marginTop: '13%' }}
                                                    buttonStyle={theme.signupStyles.btn} titleStyle={theme.signupStyles.btntitle} />}
                                        </View>
                                    )}

                                </Formik>
                                {edit ? null : <Text style={theme.signupStyles.signup}>Already have an Account ?, <Text style={theme.signupStyles.hyperlink} onPress={() => navigation.navigate('Login')}>Login</Text></Text>}
                            </View>


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
            .max(8, ({ max }) => `Username may not more than ${max} Characters`)
            .required('UserName is Required'),

        email: yup
            .string()
            .email('Please enter a valid Email')
            .required('Email is Required'),

        password: yup
            .string()
            .matches(/\w*[a-z]\w*/, "Password must have atleast one LowerCase letter")
            .matches(/\w*[A-Z]\w*/, 'Password must have atleast one Uppercase letter')
            .matches(/\d/, 'Password must have atleast one Digit')
            .matches(/[!@#$%^&*()\-_=+{}"'<>,.;:]/, 'Password must have atleast one Special Character')
            .min(8, ({ min }) => `Password must have atleast ${min} Characters`)
            .required('Password is Required'),

        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Password must be Same')
            .required('Confirm Password is Required')
    }
)
export default Signup