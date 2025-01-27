import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const ProfileScreen = () => {
    const router = useRouter();
    return (
        <View className="flex-1 justify-center items-center">
            <Text>My Profile</Text>

            <Pressable
                onPress={() => router.push('/profile/update')}
                className="bg-lime-400 p-4 rounded-xl"
            >
                <Text>Go to Update page </Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen