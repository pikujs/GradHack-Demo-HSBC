import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { colors } from '../../theme';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Text,
  Divider,
} from 'react-native-paper';

import { Block, theme } from 'galio-framework';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  text: {
    padding: 8,
  },
  reward: {
    flexDirection: 'row',
  },
});

const EventDetail = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.root}>
          <StatusBar barStyle="light-content" />
        </View>

        <Card>
          <Card.Cover source={require('../community/pic/resource1.jpg')} />
          <Card.Actions></Card.Actions>
        </Card>

        <View style={{ paddingTop: 10 }}>
          <Title style={styles.text}>Challenge</Title>
          <Title style={styles.text}>Planing Smart Saving Smart</Title>
          <Text style={styles.text}>15 days left</Text>
          <Title style={styles.text}>Challenge Details</Title>
          <Text style={styles.text}>
            Time for setting up your December savign goal and earning reward
            points.{' '}
          </Text>
        </View>
        <View style={{ padding: 15 }}>
          <Button
            color="#8565c4"
            mode="contained"
            onPress={() => {
              navigation.navigate('LeaderboardDetails', {
                from: 'EventDetails',
              });
            }}
          >
            View LeaderBoard
          </Button>
        </View>

        <View styles={{ marginTop: 20 }}>
          <Title style={styles.text}>Unlock Reward</Title>
          <View style={styles.reward}>
            <Image
              source={require('../community/pic/reward.png')}
              style={{ width: 65, height: 65, marginLeft: 10 }}
            />
            <View style={{ flexDirection: 'column', padding: 5 }}>
              <Title>Decemnber Saving challenge </Title>
              <Text>1000 reward points</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 25,
          }}
        >
          <Button
            color="#f70d1a"
            mode="contained"
            onPress={() => console.log('Pressed')}
          >
            Join Challenge
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

EventDetail.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
};

EventDetail.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
};

export default EventDetail;
