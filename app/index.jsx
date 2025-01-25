import { View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Link, useRouter } from 'expo-router';
// import Animated, {SlideInLeft, SlideInRight}from 'react-native-reanimated';

const index = () => {
    const router = useRouter();

    return (
        <>
            <View className="flex-1 items-center justify-center ">
                <Text className="text-3xl ">Home </Text>
                <Link href='/about' asChild>
                    <Pressable className="bg-blue-400 p-4 rounded-xl">
                        <Text>Go to about</Text>
                    </Pressable>
                </Link>
                {/* <Pressable
                    onPress={() => router.push('/about')}
                >
                    <Text>Go to about</Text>
                </Pressable> */}
            </View>
            <StatusBar />
        </>
    )
}

export default index