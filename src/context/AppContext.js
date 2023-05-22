import React, { createContext } from "react";

const AppContext = createContext(
    {
        //context used to manage User data globally
        user:{},
        setUser:() =>{},
        //context used to manage Available Categories data globally
        catData:{},
        setCatData:() =>{},
        //context used to manage main task data globally
        data:{},
        setData:() =>{},
        //context used to manage Favourites task data globally
        fav:{},
        setFav:() =>{},
        //context used to manage locked task globally
        lock:{},
        setLock:() =>{},
        //context used to manage Deleted task data globally
        bin:{},
        setBin:() =>{},
        userKey:{},
        setUserKey:() =>{},
        load:{},
        setLoad:() =>{}
    }
)

export default AppContext