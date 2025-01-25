import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-3xl ">About page </Text>
      <Link href='/' asChild>
        <Pressable className="bg-blue-400 p-4 rounded-xl">
          <Text>Go to home</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export default about