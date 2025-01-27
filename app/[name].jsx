import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const UserName = () => {
    const {name} = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center ">
      <Text className="text-2xl text-green-800 ">Welcome ,{name}</Text>
      <Text className="text-xl" >This is your personalized screen</Text>
    </View>
  )
}

export default UserName