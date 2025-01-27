import { View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Link, useRouter } from 'expo-router';
import Animated, { FadeInLeft, FadeInRight, SlideInRight, SlideOutLeft, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { useDrawerStatus } from '@react-navigation/drawer';

const index = () => {
    const router = useRouter();
    const isDrawerOpen  = useDrawerStatus() === "open";
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
                <Text className="text-3xl ">Home </Text>
                {/* <Link href='/about' asChild>
                    <Pressable className="bg-blue-400 p-4 rounded-xl">
                        <Text>Go to about</Text>
                    </Pressable>
                </Link> */}
                <Pressable
                    onPress={() => router.push('/about')}
                    className="bg-blue-400 p-4 rounded-xl"
                >
                    <Text>Go to about</Text>
                </Pressable>
                <Text>-------------------------------------------------------------------------------------------------</Text>

                <Pressable
                    onPress={() => router.push('/tabs')}
                    className="bg-yellow-600 p-4 rounded-xl"
                >
                    <Text>Go to Tab</Text>
                </Pressable>

                <Text>-------------------------------------------------------------------------------------------------</Text>
                <Pressable
                    onPress={() => router.push('/userInfo')}
                    className="bg-indigo-300 p-4 rounded-xl"
                >
                    <Text>Go to User</Text>
                </Pressable>

                
                <Text>-------------------------------------------------------------------------------------------------</Text>

                <Pressable
                    onPress={() => router.push('/profile')}
                    className="bg-teal-300 p-4 rounded-xl"
                >
                    <Text>Go to Profile</Text>
                </Pressable>


                <Text>-------------------------------------------------------------------------------------------------</Text>

                { 
                    isDrawerOpen ? (
                        <Text className="text-green-600">Drawer is open</Text>
                    ): (
                        <Text className="text-red-600">Drawer is close</Text>
                    )
                }

            </Animated.View>
            <StatusBar />
        </>
    )
}

export default index