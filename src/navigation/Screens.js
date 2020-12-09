import React from 'react';
import { Easing, Animated, Dimensions } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Block } from 'galio-framework';

// screens
import Home from '../screens/argon/Home';
import Onboarding from '../screens/argon/Onboarding';
import Pro from '../screens/argon/Pro';
import Profile from '../screens/argon/Profile';
import Register from '../screens/argon/Register';
import Elements from '../screens/argon/Elements';
import Articles from '../screens/argon/Articles';

import Login from '../screens/Login';

import Leaderboard from '../screens/community/Leaderboard';
import EventsScreen from '../screens/community/Challenge';
import EventDetail from '../screens/community/EventDetail';
import LeaderDetail from '../screens/community/LeaderDetail';
import BudgetHome from '../screens/BudgetHome';

import BudgetScreens from '../screens/budget';

import RewardsScreen from '../screens/Rewards/Rewards';

// drawer
import CustomDrawerContent from './Menu';

//import TabNavigator from '../routes/navigation/tabs';

// header for screens
import { Icon, Header } from '../components/argon';
import { argonTheme, tabs } from '../constants';

const { width } = Dimensions.get('screen');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Elements"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elements" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articles" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Profile"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function BudgetStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="BudgetHome"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="BudgetHome"
        component={BudgetScreens.Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="My Budget"
              options
              optionLeft="Expense"
              optionRight="Transactions"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="Expense"
        component={BudgetScreens.expense}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              back
              title="Expenses"
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Transactions"
        component={BudgetScreens.transactions}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              back
              title="Transactions"
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Categories"
        component={BudgetScreens.categories}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Categories"
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function RewardsStack(props) {
  return (
    <Stack.Navigator initialRouteName="Rewards" mode="card" headerMode="screen">
      <Stack.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              back
              title="Rewards"
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      />
      <Stack.Screen
        name="ScratchScreen"
        component={BudgetScreens.expense}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              back
              title="Scratch"
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: '#F8F9FE' },
        }}
      />
      <Stack.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              back
              title="LeaderBoard"
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Events"
        component={EventsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              back
              title="Events"
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="LeaderboardDetails"
        component={LeaderDetail}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              back
              title="Leaderboard Details"
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetail}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              back
              title="Event Details"
              bgColor={argonTheme.COLORS.ACTIVE}
              titleColor="white"
              iconColor="white"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const AppTabs = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}
    >
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ChatScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: 'white',
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: 'white',
        inactiveTintColor: '#000',
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="My Budget" component={BudgetStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Payments" component={RewardsStack} />
      <Drawer.Screen name="Rewards" component={ElementsStack} />
      <Drawer.Screen name="Saved Articles" component={ArticlesStack} />
    </Drawer.Navigator>
  );
}
