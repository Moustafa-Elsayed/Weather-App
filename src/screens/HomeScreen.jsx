import {
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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
          <View className="">
            <TextInput
              placeholder="search"
              className="p-2 bg-white rounded-full h-10"
            />
            <FontAwesomeIcon name="heart-o" size={30} color="white" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
