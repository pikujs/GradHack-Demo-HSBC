import { Avatar, Button, Card, Title, Paragraph, Divider, Surface, Text } from 'react-native-paper';
import {
  StyleSheet, View, StatusBar, FlatList, SafeAreaView, ScrollView, ViewBase
} from 'react-native'
import React, { Component } from 'react';


const styles = StyleSheet.create(
  {
  root: {
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  
  card: {
    margin: 15,
    elevation: 2,
  },
})
const LeaderboardScreen = ({ navigation }) => (
  <SafeAreaView>
  <ScrollView>
        <View>
        <Card style={styles.card}>
          <Card.Cover source={require('./pic/money.jpg')} />
          <Card.Content>

          </Card.Content>
          <Card.Actions>
            <Button color="black"  onPress={() => {
         navigation.navigate('LeaderboardDetails', { from: 'LeaderboardScreen' })
        }}>Best Budget Manager</Button>

          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Cover source={require('./pic/budgetmanager.jpg')} />
          <Card.Content>

          </Card.Content>
          <Card.Actions>
            <Button color="black" onPress={() => {
         navigation.navigate('LeaderboardDetails', { from: 'LeaderboardScreen' })
        }}>Best Goal Crusher</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Cover source={require('./pic/resource8.jpeg')} />
          <Card.Content>

          </Card.Content>
          <Card.Actions>
            <Button color="black" onPress={() => {
         navigation.navigate('LeaderboardDetails', { from: 'LeaderboardScreen' })
        }}>Best planner</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Cover source={require('./pic/challenge.jpg')} />
          <Card.Content>

          </Card.Content>
          <Card.Actions>
            <Button color="black" onPress={() => {
         navigation.navigate('LeaderboardDetails', { from: 'LeaderboardScreen' })
        }}>Best Challenge taker</Button>
          </Card.Actions>
        </Card>
       
        </View>
        </ScrollView>
        </SafeAreaView>
    
   
)

export default LeaderboardScreen;