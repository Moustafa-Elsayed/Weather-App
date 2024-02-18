import {Image, StatusBar, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View>
      <StatusBar
        style="light"
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      <Image blurRadius={30} source={require('../images/bg.jpg')} />
    </View>
  );
};

export default HomeScreen;
