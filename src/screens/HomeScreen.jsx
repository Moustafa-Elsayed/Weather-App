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
  const [locations, setLocations] = useState([1, 2, 3]);
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
            <View className="bg-white rounded-lg ">
              {locations.map((loc, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    className="flex-row items-center p-3 px-4 mb-1 border-0 border-b-2 border-b-gray-400 ">
                    <MapIcon name="map-marker" size={25} color="black" />
                    <Text>lonadong</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
