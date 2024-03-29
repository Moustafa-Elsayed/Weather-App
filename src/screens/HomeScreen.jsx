import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MapIcon from 'react-native-vector-icons/FontAwesome';
import Windy from 'react-native-vector-icons/MaterialCommunityIcons';
import Rainy from 'react-native-vector-icons/MaterialCommunityIcons';
import Sunny from 'react-native-vector-icons/MaterialCommunityIcons';
import Dialy from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../constants/theme';
import _ from 'lodash';
import {fetchForecastData, fetchSearchEndPoint} from '../api/weather';
import {weatherIcon} from '../api/constant';
import * as Progress from 'react-native-progress';

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const handleLocations = loc => {
    // console.log('location', loc);
    setLocations([]);
    setLoading(true)
    fetchForecastData({
      cityName: loc.name,
      days: '7',
    }).then(data => {
      setWeather(data);
      setLoading(false)
      console.log(data, 'forecast');
    });
  };

  const handleSearch = value => {
    if (value.length > 2) {
      fetchSearchEndPoint({cityName: value}).then(data => {
        setLocations(data);
      });
    }
  };

  const handleChangeDebounce = useCallback(_.debounce(handleSearch, 1200), []);
  const {current, location} = weather;
  // call api
  useEffect(() => {
    fetchDataWeather();
  }, []);
  const fetchDataWeather = async () => {
    fetchForecastData({
      cityName: 'Egypt',
      days: '7',
    }).then(data => {
      setWeather(data);
    });
  };
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <StatusBar
        style="light"
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      <ScrollView
        contentContainerStyle={{flex: 1, height: '100%'}}
        bounces={false}>
        <View className="flex-1 relative">
          <Image
            blurRadius={10}
            source={require('../images/bg.jpg')}
            className="absolute h-full w-full"
          />
          {loading? (

            <View className="flex flex-1 justify-center items-center">
            {/* <Progress.CircleSnail color="orange" thickness={12} size={160} /> */}

              <Text className="text-white text-3xl" >Loading...</Text>
            </View>
          ):( 
            <SafeAreaView className="flex flex-1 pt-10">
            {/* search section */}
            <View style={{height: '7%'}} className="mx-4 relative z-50">
              <View
                className="flex-row justify-end items-center rounded-full "
                style={{
                  backgroundColor: showSearch
                    ? theme.bgWhite(0.2)
                    : 'transparent',
                }}>
                {showSearch ? (
                  <TextInput
                    onChangeText={handleChangeDebounce}
                    placeholder="Search City "
                    placeholderTextColor={'white'}
                    style={{
                      padding: 10,
                      flex: 1,
                      color: 'white',
                      fontSize: 20,
                      paddingHorizontal: 15,
                    }}
                    className="text-black pl-6 h-10 flex-1 "
                  />
                ) : null}

                <TouchableOpacity
                  className="rounded-full p-3 m-1 bg-white"
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
                        onPress={() => handleLocations(loc)}>
                        <MapIcon name="map-marker" size={25} color="black" />
                        <Text className="ml-2 text-xl text-black">
                          {loc?.name},{loc?.country}
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

              <Text className="text-center text-white text-2xl font-bold ">
                {location?.name}
                <Text className="text-lg font-semibold text-gray-200">
                  {' , ' + location?.country}
                </Text>
              </Text>

              {/* weather image */}
              <View className="flex-row justify-center">
                <Image
                  source={weatherIcon[current?.condition?.text]}
                  className="w-52 h-52"
                />
              </View>

              {/* degree */}
              <View className="space-y-2">
                <Text className="text-center font-bold text-white text-6xl ml-5">
                  {current?.temp_c}&#176;
                </Text>
                <Text className="text-center tracking-widest text-white text-xl ml-5">
                  {current?.condition.text}
                </Text>
              </View>
              {/* other states */}
              <View className="mx-4 flex-row justify-between">
                <View className="flex flex-row items-center space-x-2">
                  <Windy name="weather-windy" size={25} color="white" />
                  <Text className="text-white">{current?.wind_kph}Km</Text>
                </View>
                <View className="flex flex-row items-center space-x-2">
                  <Rainy name="weather-rainy" size={25} color="white" />
                  <Text className="text-white">{current?.humidity}%</Text>
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
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  // contentContainerStyle={{paddingHorizontal: 15}}
                >
                  {weather?.forecast?.forecastday?.map((item, index) => {
                    let date = new Date(item.date);
                    let options = {weekday: 'long'}; // 'weekday' instead of 'weakend'
                    let dayName = date.toLocaleDateString('en-US', options);
                    dayName = dayName.split(',')[0].trim(); // Extracting and trimming the day name

                    return (
                      <View
                        className="flex justify-center items-center w-24 rounded-3xl space-y-3 py-3 mr-4"
                        style={{backgroundColor: theme.bgWhite(0.2)}}
                        key={index}>
                        <Image
                          source={{uri: 'http:' + item?.day?.condition?.icon}}
                          className="w-14 h-12"
                        />
                        <Text className="text-white text-lg">{dayName}</Text>
                        <Text className="text-white">
                          {item?.day?.avgtemp_c}&#176;
                        </Text>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </SafeAreaView>)
          }
         
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
