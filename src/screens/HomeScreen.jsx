import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import React from 'react';
import Search from '../components/Search';

const HomeScreen = () => {
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
      <SafeAreaView className="flex flex-1">
        {/* search section */}
        <View style={{height: '7%'}} className="mx-4 relative z-50">
          <Text>ndjjlflj</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
