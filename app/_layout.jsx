
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import {Drawer} from 'expo-router/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Layout = () => {
  return (
    <GestureHandlerRootView className="flex-1">
        <Drawer>
            <Drawer.Screen 
                name='index' 
                options={{
                    drawerLabel : "Home",
                    title : "Home Screen",
                    drawerIcon : ({color}) => {
                        return(
                            <Ionicons size={25} color={color} name="home"/>
                        )
                    }
                }}
            />
            <Drawer.Screen 
                name='about' 
                options={{
                    drawerLabel : "About",
                    title : "About Screen",
                    drawerIcon : ({color}) => {
                        return(
                            <Ionicons size={25} color={color} name="information-circle"/>
                        )
                    }
                }}
            />
            <Drawer.Screen 
                name='tabs' 
                options={{
                    drawerLabel : "Settings",
                    title : "Tab Screen",
                    drawerIcon : ({color}) => {
                        return(
                            <Ionicons size={25} color={color} name="settings"/>
                        )
                    }
                }}
            />
             <Drawer.Screen 
                name='userInfo' 
                options={{
                    drawerLabel : "Users",
                    title : "Users Screen",
                    drawerIcon : ({color}) => {
                        return(
                            <Ionicons size={25} color={color} name="person-circle"/>
                        )
                    }
                }}
            />
            
        </Drawer>
    </GestureHandlerRootView>
  )
}

export default Layout