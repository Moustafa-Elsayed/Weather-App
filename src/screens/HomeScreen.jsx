import {Image, StatusBar, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View className="bg-black h-full w-full">
      <StatusBar
        style="light"
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      {/* <Image blurRadius={20} source={require('../images/bg.jpg')} /> */}
      <Text className="text-yellow-400">kdkfhk;</Text>
      <Text className="text-white">kdkfhk;</Text>
    </View>
  );
};

export default HomeScreen;
