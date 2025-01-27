import { View, Text, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import FirstTab from './firstTab'
import SecondTab from './secondTab'
import Ionicons from "react-native-vector-icons/Ionicons";

const LayoutTab = () => {

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const routes = [
        { key: 'first', title: 'First', icon: 'home' },
        { key: 'second', title: 'Second', icon: 'information-circle' },
    ]
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={SceneMap({
                first: FirstTab,
                second: SecondTab,
            })}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            tabBarPosition='bottom'
            renderTabBar={props => (
                <TabBar
                    {...props}
                    indicatorStyle={{ backgroundColor: 'white' }}
                    renderIcon={({ route, focused }) => (
                        <Ionicons
                            name={route.icon} // Accessing the icon from the route
                            size={5}
                            color={focused ? "white" : "gray"}
                        />
                    )}
                    activeColor="black"
                    inactiveColor="white"
                    labelStyle={{ fontSize: 30 }}
                    
                />
            )}
        />
    )
}

export default LayoutTab