import {
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  const[showSearch,setShowSearch]=useState(false);
  return (
    <View className="flex-1 relative">
      <StatusBar
        style="light"
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      <Image
        blurRadius={10}
        source={require('../images/bg.jpg')}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1 pt-10">
        {/* search section */}
        <View style={{height: '7%'}} className="mx-4 relative z-50">
          <View className="flex-row justify-end items-center bg-white rounded-full ">
            <TextInput
              placeholder="Search City "
              className="text-black pl-6 h-10 flex-1 "
            />
            <TouchableOpacity className="rounded-full p-3 m-1 bg-slate-300">
              <FontAwesomeIcon name="search" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
