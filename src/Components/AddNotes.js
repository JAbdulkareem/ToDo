import React, { useContext, useState } from "react";
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from "react-native";
import { ThemeConsumer, Button, Overlay } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { actions, RichEditor, RichToolbar } from "react-native-pell-rich-editor";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as yup from 'yup'
import AppContext from "../context/AppContext";


const AddNotes = (props) => {
    const navigation = useNavigation()
    //variable for assigning the props data
    const val = props?.item
    const richText = React.useRef();
    //local state used to manage string data from Pell-Rich-Editor
    const [text, setText] = useState('')
    //local state used to manage current date 
    const [date, setDate] = useState(new Date())
    //local state used to manage current Time
    const [time, setTime] = useState(new Date(Date.now()))
    //local state used to manage open and close the Overlay
    const [open, setOpen] = useState(false)
    //local state used to manage selected categories data
    const [select, setSelect] = useState({id:2,name:'Office',image:require('../assets/office.png'),select:true})
    //context used to manage Main task data globally
    const { data, setData } = useContext(AppContext)
    //context used to manage available Categories data globally
    const { catData, setCatData } = useContext(AppContext)

    //function to convert html from Editor to String
    const Store = (text) => {
        const HTML = text.replace(/<(.|\n)*?>/g, "").trim();
        const replace = HTML.replace(/&nbsp;/g, "").trim();
        setText(replace)
    }

    //function to perform adding new task
    const onSubmit1 = (value) => {
            setData(prev => [...prev, {
                id: data.length + 1,
                title: value.title,
                description: value.shortDescription,
                content: text,
                date: date.toDateString(),
                time: time.toLocaleTimeString('en-US'),
                category: select.name,
                image: select.image,
                lock: false,
                fav: false,
                select: false
            }])
            setOpen(!open)
            navigation.navigate('DrawerNavigator')
    }

    //function to modify already added data
    const onSubmit2 = (value) => {
        let arr = [...data]
        let i = arr.findIndex(i => i.id == val?.id)
        arr[i].id = val?.id
        arr[i].title = value.title,
            arr[i].description = value.shortDescription,
            arr[i].content = text,
            arr[i].date = date.toDateString(),
            arr[i].time = time.toLocaleTimeString('en-US'),
            arr[i].category = select.name,
            arr[i].image = select.image,
            arr[i].lock = false
        arr[i].select = false
        arr[i].fav = false
        setData(arr)
        setOpen(!open)
        navigation.navigate('Home')
    }

    //function to manage selected Category data
    const selectCategory = (item) => {
        let arr = [...catData];
        if (item.select == false) {
            let index = arr.findIndex(i => i.select == true);
            if (index > -1) {
                arr[index].select = false;
            }
            let index2 = arr.findIndex(i => i.id == item.id);
            arr[index2].select = true;
            setCatData(arr);
        }
    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <KeyboardAvoidingView style={theme.addStyles.container}>
                        <ScrollView>
                            <View style={theme.addStyles.topContainer}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <View style={theme.addStyles.menuBackground}>
                                        <Icon name="arrow-left" color='white' size={23} style={theme.addStyles.menuIcon}
                                        />
                                    </View>
                                </TouchableOpacity>
                                <Text style={theme.addStyles.heading}>{props?.edit ? 'Edit Task' : 'Add Task'}</Text>

                            </View>
                            <Image source={require('../assets/addtask.png')} style={theme.addStyles.image} />

                            <Formik
                                initialValues={{ title: props.edit ? val.title : '', shortDescription: props.edit ? val.description : '', }}
                                validationSchema={validation}
                                onSubmit={(value) => {
                                    props?.edit ? onSubmit2(value) : onSubmit1(value)
                                }}>

                                {({ handleBlur, handleChange, values, errors, handleSubmit, isValid, touched }) => (


                                    <View style={{ marginTop: '10%' }}>
                                        <Text style={theme.addStyles.label}>Title :</Text>

                                        <TextInput 
                                        name='title'
                                        placeholder="Enter the Title"
                                        placeholderTextColor='#3b3c36'
                                        onChangeText={handleChange('title')}
                                        onBlur={handleBlur('title')}
                                        value={values.title}
                                        style={theme.addStyles.input}
                                        />

                                        {errors.title && touched.title &&
                                            <Text style={theme.addStyles.errormsg}>{errors.title}</Text>}

                                        <Text style={theme.addStyles.label} >Short Description :</Text>

                                        <TextInput
                                            style={theme.addStyles.input}
                                            name='shortDescription'
                                            placeholderTextColor='#3b3c36'
                                            placeholder='Enter the Description'
                                            onChangeText={handleChange('shortDescription')}
                                            onBlur={handleBlur('shortDescription')}
                                            value={values.shortDescription}
                                        />
                                        {errors.shortDescription && touched.shortDescription &&
                                            <Text style={theme.addStyles.errormsg}>{errors.shortDescription}</Text>}

                                        <Text style={theme.addStyles.label} >Description :</Text>

                                        <View>
                                            <RichEditor ref={richText} style={theme.addStyles.richEditorView}
                                                editorStyle={theme.addStyles.richEditor}
                                                placeholder="Add your Task Here......"
                                                initialHeight={200}
                                                onChange={text => Store(text)} />
                                        </View>

                                        <View style={theme.addStyles.richToolbar}>
                                            <RichToolbar
                                                editor={richText}
                                                actions=
                                                {[
                                                    actions.setBold,
                                                    actions.setItalic,
                                                    actions.removeFormat,
                                                    actions.insertBulletsList,
                                                    actions.insertOrderedList,
                                                    actions.insertLink,
                                                    actions.setStrikethrough,
                                                    actions.keyboard,
                                                    actions.setUnderline,
                                                    actions.undo,
                                                    actions.redo,
                                                    actions.checkboxList,
                                                ]}
                                            />
                                        </View>


                                        <Button title={props?.edit ? 'Edit' : 'Add'}
                                        containerStyle={{marginTop: '13%'}}
                                            disabled={!isValid}
                                            onPress={() => setOpen(!open)}
                                            buttonStyle={theme.addStyles.btn} titleStyle={theme.addStyles.btntitle} />
                                    

                            <Overlay animationType="fade" isVisible={open} onBackdropPress={() => setOpen(!open)}
                                overlayStyle={theme.addStyles.overlay}>
                                <View >
                                    <Text style={theme.addStyles.overheading}>Select the Category</Text>
                                    <FlatList
                                        data={catData}
                                        keyExtractor={item => item.id}
                                        numColumns={3}
                                        renderItem={({ item, index }) => {
                                            if (item.name != 'All') {
                                                return (
                                                    <TouchableOpacity onPress={() => { selectCategory(item); setSelect(item) }}>
                                                        <View key={index} style={item.select ? theme.addStyles.catContainer2 : theme.addStyles.catContainer1}>
                                                            <Image source={item.image} style={theme.addStyles.overimage} />
                                                            <Text style={theme.addStyles.overname} >{item.name}</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            }
                                        }}
                                    />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                        <Button title='Cancel'
                                            onPress={() => setOpen(!open)}
                                            buttonStyle={theme.addStyles.overbtn1} titleStyle={theme.addStyles.overbtntitle1} />
                                        <Button title='OK'
                                            onPress={ handleSubmit}
                                            buttonStyle={theme.addStyles.overbtn2} titleStyle={theme.addStyles.overbtntitle2} />
                                    </View>


                                </View>
                            </Overlay>
                            </View>
                                )}

                            </Formik>


                        </ScrollView>
                    </KeyboardAvoidingView>



                )
            }
        </ThemeConsumer>

    )
}

const validation = yup.object().shape(
    {
        title: yup
            .string()
            .required('Title is Required'),

        shortDescription: yup
            .string()
            .required('Short Desscription is Required')
    }
)
export default AddNotes