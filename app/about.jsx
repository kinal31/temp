import { View, Text, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Animated, { FadeInLeft, FadeInRight, SlideInLeft, SlideInRight, SlideOutLeft, ZoomIn, ZoomOut } from 'react-native-reanimated';

const about = () => {
  const router = useRouter();
  return (
    <>
      <Animated.View
        // entering={SlideInRight.duration(500)}
        // exiting={SlideOutLeft.duration(500)}
        // entering={FadeInRight.duration(500)}
        // exiting={FadeInLeft.duration(500)}
        entering={ZoomIn.duration(500)}
        exiting={ZoomOut.duration(500)}
        className="flex-1 items-center justify-center "
      >
        <Text className="text-3xl ">About page </Text>
        {/* <Link href='/' asChild>
        <Pressable className="bg-red-400 p-4 rounded-xl">
          <Text>Go to home</Text>
        </Pressable>
      </Link> */}
        <Pressable
          onPress={() => router.push('/')}
          className="bg-purple-400 p-4 rounded-xl"
        >
          <Text>Go to Home</Text>
        </Pressable>
      </Animated.View>

      <StatusBar />
    </>


  )
}

export default about