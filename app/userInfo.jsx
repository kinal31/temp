import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';

const UserInfo = () => {
    const [name , setName] = useState('');
    const router = useRouter();

    const handleNavigation = () => {
        const username = name.trim();
        if(username){
            router.push(`/${username}`)
        }
    }

    const handleSubmit = () =>{
        console.log("Inside handles submit ");
        
    }

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl">UserInfo</Text>
      <TextInput  placeholder='Enter your name' value={name} onChangeText={(text) => setName(text)} className="border border-gray-500 w-full rounded-md p-3 text-lg "/>
        {/* <Text>{name}</Text> */}

        <Pressable className="bg-orange-300 w-full m-4 p-4 rounded-xl border border-orange-700 " onPress={handleNavigation}>
            <Text className="text-center text-xl ">Submit</Text>
        </Pressable>
    </View>     
  )
}

export default UserInfo