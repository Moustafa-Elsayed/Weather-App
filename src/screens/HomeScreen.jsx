import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MapIcon from 'react-native-vector-icons/FontAwesome';
import Windy from 'react-native-vector-icons/MaterialCommunityIcons';
import Rainy from 'react-native-vector-icons/MaterialCommunityIcons';
import Sunny from 'react-native-vector-icons/MaterialCommunityIcons';
import Dialy from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3, 4]);
  const handleLocations = loc => {
    console.log('location', loc);
  };
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
          <View
            className="flex-row justify-end items-center rounded-full "
            style={{backgroundColor: showSearch ? 'white' : null}}>
            {showSearch ? (
              <TextInput
                placeholder="Search City "
                className="text-black pl-6 h-10 flex-1 "
              />
            ) : null}

            <TouchableOpacity
              className="rounded-full p-3 m-1 bg-slate-300"
              onPress={() => {
                setShowSearch(!showSearch);
              }}>
              <FontAwesomeIcon name="search" size={25} color="black" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className="bg-white rounded-3xl absolute top-16 w-full ">
              {locations.map((loc, index) => {
                let showBaorder = index + 1 != locations.length;
                let borderClass = showBaorder
                  ? 'border-b-2 border-b-gray-400 '
                  : '';
                return (
                  <TouchableOpacity
                    key={index}
                    className={
                      'flex-row items-center p-3 px-4 mb-1 border-0  ' +
                      borderClass
                    }
                    onPress={handleLocations(loc)}>
                    <MapIcon name="map-marker" size={25} color="black" />
                    <Text className="ml-2 text-xl text-black">
                      londong , united Kingdom
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        {/* forecast section */}
        <View className="mx-4 justify-around flex-1 mb-2">
          {/* location */}
          <Text className="text-center text-white text-2xl font-bold">
            London
            <Text className="text-lg font-semibold text-gray-300">
              ,united kindom
            </Text>
          </Text>
          {/* weather image */}
          <View className="flex-row justify-center">
            <Image
              source={require('../images/banner.png')}
              className="w-52 h-52"
            />
          </View>

          {/* degree */}
          <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
              23&#176;
            </Text>
            <Text className="text-center tracking-widest text-white text-xl ml-5">
              partly cloud
            </Text>
          </View>
          {/* other states */}
          <View className="mx-4 flex-row justify-between">
            <View className="flex flex-row items-center space-x-2">
              <Windy name="weather-windy" size={25} color="white" />
              <Text className="text-white">22Km</Text>
            </View>
            <View className="flex flex-row items-center space-x-2">
              <Rainy name="weather-rainy" size={25} color="white" />
              <Text className="text-white">23%</Text>
            </View>
            <View className="flex flex-row items-center space-x-2">
              <Sunny name="white-balance-sunny" size={25} color="white" />
              <Text className="text-white">6:05Am</Text>
            </View>
          </View>
          {/* daily weather */}
          <View className="mb-2 space-y-3">
            <View className="flex flex-row items-center space-x-2">
              <Dialy name="calendar-today" size={25} color="white" />
              <Text className="text-white text-xl">Daily Forecast</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
