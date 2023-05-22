import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { ThemeConsumer, Overlay, Button } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import OpenDrawer from "./header";
import AppContext from "../context/AppContext";
import NewCat from "../Datas/newCat";
import Header from "./header";


const Categories = ({ navigation }) => {
    //context to manage Available Categories data globally
    const { catData, setCatData } = useContext(AppContext)
    //local state used to manage open and close of Overlay
    const [open, setOpen] = useState(false)
    //local state used to manage New Categories data
    const [newCat, setNewCat] = useState(NewCat)
    //local state used to manage selected Categories data
    const [select, setSelect] = useState([])

    //function to manage selected categoery
    const selectCategory = (item, index) => {
        if (item.select == false) {
            item.select = true
            setSelect(prev => [...prev, item])

        }
        else {
            item.select = false
            let array = [...select]
            let filter = array.filter(i => i.id != item.id)
            setSelect(filter)


        }
    }

    //function to perform submit operation to add new category data to available
    const onSubmit = () => {
        let arr = [...catData]
        let newarr = [...newCat]
        select.map(l => {
            l.id = arr.length + 1
            l.select = false
            arr.push(l)
            newarr = newarr.filter(i => i.id != l.id)
        })
        setCatData(arr)
        setNewCat(newarr)
        setSelect([])
        setOpen(!open)
    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.catStyles.container}>
                        
                        <Header title='Categories' drawer={() => navigation.openDrawer()} close={() => navigation.goBack()} />


                        <TouchableOpacity style={{ marginTop: 20 }}>
                            <Text style={theme.catStyles.hyperlink} onPress={() => setOpen(!open)}>Add</Text>
                        </TouchableOpacity>


                        <View style={theme.catStyles.flatlist}>
                            <FlatList
                                data={catData}
                                keyExtractor={item => item.id}
                                numColumns={3}
                                renderItem={({ item, index }) => {
                                    if (item.name != 'All') {
                                        return (
                                            <View key={index} style={theme.catStyles.catContainer}>
                                                <Image source={item.image} style={theme.catStyles.image} />
                                                <Text style={theme.catStyles.name} >{item.name}</Text>
                                            </View>
                                        )
                                    }
                                }}
                            />
                        </View>
                        <Overlay animationType="fade" isVisible={open} onBackdropPress={() => setOpen(!open)}
                            overlayStyle={theme.catStyles.overlay}>
                            <View >
                                <Text style={theme.catStyles.overheading}>Select the Category</Text>
                                <FlatList
                                    data={newCat}
                                    keyExtractor={item => item.id}
                                    numColumns={3}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <TouchableOpacity onPress={() => { selectCategory(item, index) }}>
                                                <View key={index} style={item.select ? theme.catStyles.catContainer2 : theme.catStyles.catContainer1}>
                                                    <Image source={item.image} style={theme.catStyles.overimage} />
                                                    <Text style={theme.catStyles.overname} >{item.name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                                <View style={theme.catStyles.btnContainer}>
                                    <Button title='Cancel'
                                        onPress={() => { setOpen(!open); setSelect([]) }}
                                        buttonStyle={theme.catStyles.overbtn1} titleStyle={theme.catStyles.overbtntitle1} />
                                    <Button title='OK'
                                        onPress={() => onSubmit()}
                                        buttonStyle={theme.catStyles.overbtn2} titleStyle={theme.catStyles.overbtntitle2} />
                                </View>


                            </View>
                        </Overlay>
                    </View>
                )
            }
        </ThemeConsumer>

    )
}

export default Categories