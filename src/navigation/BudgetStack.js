import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './screens/Home';
import expense from './screens/expense';
import transactions from './screens/transactions';
import categories from './screens/categories';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const BudgetStack = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'My Expenses' }}
        />
        <Stack.Screen
          name="expense"
          component={expense}
          options={{ title: 'My Expenses' }}
        />
        <Stack.Screen
          name="transactions"
          component={transactions}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="categories"
          component={categories}
          options={{ title: 'Category' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BudgetStack;
