import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
  Surface,
  Text,
} from 'react-native-paper';
import {
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ViewBase,
} from 'react-native';
import React from 'react';

import { Block, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  root: {
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  home: {
    width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  card: {
    margin: 15,
    elevation: 2,
  },
});
const LeaderboardScreen = ({ navigation }) => (
  <Block flex centre style={styles.home}>
    <ScrollView>
      <View>
        <Card style={styles.card}>
          <Card.Cover source={require('./pic/money.jpg')} />
          <Card.Content></Card.Content>
          <Card.Actions>
            <Button
              color="black"
              onPress={() => {
                navigation.navigate('LeaderboardDetails', {
                  from: 'Leaderboard',
                });
              }}
            >
              Best Budget
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Cover source={require('./pic/budgetmanager.jpg')} />
          <Card.Content></Card.Content>
          <Card.Actions>
            <Button
              color="black"
              onPress={() => {
                navigation.navigate('LeaderboardDetails', {
                  from: 'Leaderboard',
                });
              }}
            >
              Best Goal Crusher
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Cover source={require('./pic/resource8.jpeg')} />
          <Card.Content></Card.Content>
          <Card.Actions>
            <Button
              color="black"
              onPress={() => {
                navigation.navigate('LeaderboardDetails', {
                  from: 'Leaderboard',
                });
              }}
            >
              Best planner
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Cover source={require('./pic/challenge.jpg')} />
          <Card.Content></Card.Content>
          <Card.Actions>
            <Button
              color="black"
              onPress={() => {
                navigation.navigate('LeaderboardDetails', {
                  from: 'Leaderboard',
                });
              }}
            >
              Best Challenge taker
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  </Block>
);

export default LeaderboardScreen;
