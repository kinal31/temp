import {  Text, View } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SecondTab = () => {
  return (
   <Animated.View
           entering={FadeIn.duration(500)}
           exiting={FadeOut.duration(500)}
           className='flex-1 justify-center items-center'
       >   
           <Ionicons  name="information-circle" size={30} color={"purple"}/>
           <Text className="text-2xl text-cyan-700 ">Welcome to second tab</Text>
       </Animated.View>
  )
}

export default SecondTab

