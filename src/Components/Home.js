import React, { useContext, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ToastAndroid } from "react-native";
import { ThemeConsumer, SearchBar, FAB, Overlay } from "react-native-elements";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { ScrollView, FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import Loader from 'react-native-skeleton-placeholder';
import AppContext from "../context/AppContext";
import Confirmation from "./Confirmation";

const Home = ({ navigation }) => {

    //local state used to manage search data from SearchBar
    const [search, setSearch] = useState('')
    //context used to manage User data globally
    const { user, setUser } = useContext(AppContext)
    //context used to manage Available Categories data globally
    const { catData, setCatData } = useContext(AppContext)
    //context used to manage Main Task data globally
    const { data, setData } = useContext(AppContext)
    //context used to manage Deleted task data globally
    const { bin, setBin } = useContext(AppContext)
    //context used to manage Favourites task data globally
    const { fav, setFav } = useContext(AppContext)
    //local state to manage selected categories to display task accordingly
    const [select, setSelect] = useState('All')
    //local state to manage selected task for Bulk delete
    const [taskSelect, setTaskSelect] = useState([])
    //context used to manage locked task data globally
    const { lock, setLock } = useContext(AppContext)
    //local state used to open and close confirmation message
    const [confirm, setConfirm] = useState(false)
    //local state used to manage Skeleton loader operatio 
    const [loader, setLoader] = useState(true)


    //useEffect function to perform Skeleton loader operation
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 1200);
    }, [])

    //function to switch between Categories to display task accordingly
    const changeCategory = (item,index) => {
        let arr = [...catData];
        if (item.select == false) {
            let index = arr.findIndex(i => i.select == true);
            arr[index].select = false;
            let index2 = arr.findIndex(i => i.id == item.id);
            arr[index2].select = true;
            setCatData(arr);
        }
    }

    //function to display Toast messages
    const Toast = msg => (
        ToastAndroid.showWithGravity(msg,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM)
    )

    //function to manage Favourites task data
    const heartChange = (item) => {

        if (item.fav == false) {
            item.fav = true
            setFav(prev => [...prev, item])
            Toast('Added to Favourites')
        }
        else {
            item.fav = false
            let arr = [...fav]
            let i = arr.filter(i => i.id != item.id)
            setFav(i)
            Toast('Removed from Favourites')

        }
    }


    //function to delete particular task
    const deleteTask = (item) => {
        let arr = [...data]
        let filter = arr.filter(i => i.id != item.id)
        Toast('Task Deleted')
        setData(filter)
        setBin(prev => [...prev, item])

    }

    //function to delete all the task
    const deleteAll = () => {
        setBin(prev => [...prev, ...data])
        setData([])
        setConfirm(!confirm)
    }

    //function to unlock the locked task
    const unLock = (item) => {
        item.lock = false
        let arr = [...lock]
        let filter = arr.filter(i => i.id != item.id)
        setLock(filter)
        Toast("Task Unlocked")
    }

    //function to select task 
    const selectTask = (item) => {
        let arr = [...taskSelect]
        if (item.select == false) {
            item.select = true
            setTaskSelect(prev => [...prev, item])
        }
        else {
            item.select = false
            let filter = arr.filter(i => i.id != item.id)
            setTaskSelect(filter)
        }

    }

    //function to delete only the selected task
    const deleteSelected = () => {
        let arr = [...data]
        taskSelect.map(l => {
            arr = arr.filter(i => i.id != l.id)
            bin.push(l)
            l.select=false
        })
        setData(arr)
        setTaskSelect([])

    }

    const Task = ({ item }) => {
        return (
            <ThemeConsumer>
                {
                    ({ theme }) => (
                        <TouchableOpacity onPress={() => { taskSelect.length != 0 ? selectTask(item) : item.lock == false && navigation.navigate('Editnotes', item) }} onLongPress={() => selectTask(item)}>
                            <View style={item.select ? theme.homeStyles.taskContainer2 : theme.homeStyles.taskContainer1} key={item.id}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={item.image} style={theme.homeStyles.taskImage} />
                                    <View style={{ width: 250, flexWrap: 'wrap', overflow: 'hidden' }}>
                                        <Text style={theme.homeStyles.taskTitle}>{item.title}</Text>
                                    </View>
                                    {item.lock ? <EvilIcons name='lock' color='#202020' size={40} style={theme.homeStyles.heart}
                                        onPress={() => unLock(item)} />
                                        :

                                        <Icon name={item.fav ? 'heart' : 'heart-outline'} size={33}
                                            onPress={() => heartChange(item)} color={item.fav ? '#ED3232' : '#343434'}
                                            style={theme.homeStyles.heart} />}
                                </View>
                                <View style={{ overflow: 'hidden', height: 30, width: 310, marginHorizontal: 10 }}>
                                    <Text style={theme.homeStyles.taskDesc}>{item.description}</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={theme.homeStyles.taskDate}>{item.date}</Text>
                                    <Text style={theme.homeStyles.taskTime}>{item.time}</Text>
                                </View>
                                {item.lock ? null : <EvilIcons name="trash" size={40} style={theme.homeStyles.trash} onPress={() => deleteTask(item)} />}

                            </View>
                        </TouchableOpacity>
                    )
                }
            </ThemeConsumer>
        )
    }
    return (
        <ThemeConsumer>
            {
                ({ theme }) => (
                    <View style={theme.homeStyles.container}>
                        <View style={theme.homeStyles.topContainer}>
                            <View>
                                <Text style={theme.homeStyles.heading}>Hai<Image source={require('../assets/handicon.png')} /></Text>
                                <Text style={theme.homeStyles.headname}>{user?.username}</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <View style={theme.homeStyles.menuBackground}>
                                    <Icon name="grid-outline" color='white' size={25} style={theme.homeStyles.menuIcon}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <SearchBar
                            placeholder="Search your Task"
                            containerStyle={theme.homeStyles.search}
                            inputContainerStyle={theme.homeStyles.searchinput}
                            inputStyle={{ color: '#202020' }}
                            onChangeText={setSearch}
                            value={search}
                        />


                        {loader ?
                            <Loader backgroundColor="grey" highlightColor="#E2DFD2">
                                <Loader.Item>
                                    <Loader.Item flexDirection="row" alignItems="center" justifyContent="space-between" marginHorizontal={20} marginVertical={5} marginTop={30}>
                                        <Loader.Item width={100} height={45} borderRadius={15} />
                                        <Loader.Item width={100} height={45} borderRadius={15} />
                                        <Loader.Item width={100} height={45} borderRadius={15} />
                                    </Loader.Item>
                                    {Array.from({ length: 4 }).map(item => (
                                        <Loader.Item
                                            height={110}
                                            borderRadius={20}
                                            marginHorizontal={15}
                                            marginVertical={10}
                                        />
                                    ))}

                                </Loader.Item>
                            </Loader>

                            : <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>

                                <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: 20, paddingVertical: 5, justifyContent: 'space-between', alignItems: "center" }}>
                                    <Text style={theme.homeStyles.heading2}>Your Tasks</Text>
                                    <TouchableOpacity>
                                        {taskSelect == 0 ? <Text style={theme.homeStyles.hyperlink} onPress={() => setConfirm(!confirm)}>Delete All</Text> :
                                            <Text style={theme.homeStyles.hyperlink} onPress={() => deleteSelected()}>Delete Selected</Text>}
                                    </TouchableOpacity>
                                </View>

                                <Overlay animationType="fade" visible={confirm} onBackdropPress={() => setConfirm(!confirm)}
                                    overlayStyle={theme.homeStyles.overlay} >
                                    <Confirmation close={setConfirm} action={() => deleteAll()} />
                                </Overlay>

                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ flex: 1, padding: 5 }}>
                                    {
                                        catData.map((item, i) => (
                                            <TouchableOpacity key={i} onPress={() => { changeCategory(item); setSelect(item.name) }}>
                                                <View style={item.select ? theme.homeStyles.catContainer1 : theme.homeStyles.catContainer2}>
                                                    <Image source={item.image} style={theme.homeStyles.catImage} />
                                                    <Text style={theme.homeStyles.catText}>{item.name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </ScrollView>

                                <View>

                                    <FlatList
                                        data={data}
                                        style={theme.homeStyles.flatlist}
                                        keyExtractor={item => item.id}
                                        renderItem={({ item }) => {
                                            let searchval = search?.toLowerCase().trim().replace(/\s/g, "")
                                            let outval = item.title?.toLowerCase().trim().replace(/\s/g, "")
                                            if (outval?.includes(searchval)) {
                                                if (item.category == select) {
                                                    return (

                                                        <Task item={item} />


                                                    )
                                                }
                                                else if (select == 'All') {
                                                    return (

                                                        <Task item={item} />
                                                    )
                                                }
                                            }
                                        }} />


                                </View>

                            </ScrollView>}
                        <FAB
                            icon={{ name: 'add', color: 'white' }}
                            color='#1F1D2B'
                            size={30}
                            style={theme.homeStyles.addFab}
                            onPress={() => navigation.navigate('AddNotes')} />
                    </View>
                )
            }
        </ThemeConsumer >

    )
}

export default Home