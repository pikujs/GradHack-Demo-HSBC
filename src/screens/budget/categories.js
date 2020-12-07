import { Navigation, useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import { VictoryPie } from 'victory-native';

import { COLORS, FONTS, SIZES, icons, images } from '../../constants/budget';

const categories = ({ navigation }) => {
  return <Text>FORM</Text>;
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
export default categories;
