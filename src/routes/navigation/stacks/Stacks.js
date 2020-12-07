import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../../../theme';
import Home from '../../../screens/community/home';
import Profile from '../../../screens/community/profile';
import Details from '../../../screens/community/details';
import Budgeting from '../../../screens/community/budgeting';
import ComNavigator from '../../../screens/community/community';
import HeaderLeft from './HeaderLeft';
import HeaderTitle from './HeaderTitle';

import LeaderDetail from '../../../screens/community/details/LeaderDetail.js';
import EventDetail from '../../../screens/community/details/EventDetail.js';

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
};

export const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: LeaderDetail,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
});

export const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
});

export const BudgetingNavigator = createStackNavigator({
  Budgeting: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
});

export const CommunityNavigator = createStackNavigator({
  Community: {
    screen: ComNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Community',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  LeaderboardDetails: {
    screen: LeaderDetail,
    navigationOptions: () => ({
      title: 'DLeaderboardDetails',
      ...navigationProps,
    }),
  },
  EventDetails: {
    screen: EventDetail,
    navigationOptions: () => ({
      title: 'DLeaderboardDetails',
      ...navigationProps,
    }),
  },
});
