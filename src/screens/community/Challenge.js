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
  toptab: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  card: {
    margin: 15,
    elevation: 2,
  },
})

const EventsScreen=({ navigation }) => (
    <SafeAreaView>
    <ScrollView>
    <View>
      <Card style={styles.card}>
          <Card.Cover source={require('./pic/resource1.jpg')} />
          <Card.Content>
          <Title>Planing Smart Saving Smart</Title>
          </Card.Content>
          <Card.Actions >
          <Button color="black" mode="contained" onPress={() => {
         navigation.navigate('EventDetails', { from: 'EventsScreen' })
        }}>Join Challenge</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('./pic/goalcrusher.jpg')} />
          <Card.Content>
          <Title>Goal Crusher</Title>
          </Card.Content>
          <Card.Actions >
          <Button color="black" mode="contained" onPress={() => {
         navigation.navigate('EventDetails', { from: 'EventsScreen' })
        }}>Join Challenge</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.card}>
          <Card.Cover source={require('./pic/budgetmaker.jpeg')} />
          <Card.Content>
          <Title>Budget Maker</Title>
          </Card.Content>
          <Card.Actions >
          <Button color="black" mode="contained" onPress={() => {
         navigation.navigate('EventDetails', { from: 'EventsScreen' })
        }}>Join Challenge</Button>
          </Card.Actions>
        </Card>
    </View>
    </ScrollView>
    </SafeAreaView>
   
  
)

export default EventsScreen;