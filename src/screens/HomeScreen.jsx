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
            <Image source={require('../images/banner.png')} className="w-52 h-52" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
