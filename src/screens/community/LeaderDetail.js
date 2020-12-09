import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { colors } from '../../theme';
import Leaderboard from 'react-native-leaderboard';
import { Card, Title } from 'react-native-paper';
import { Block } from 'galio-framework';

const Leader = () => {
  let data = [
    { userName: 'Georgec', highScore: 2600 },
    { userName: 'Jenny.A', highScore: 4420 },
    { userName: 'NXT.A', highScore: 3220 },
    { userName: 'Alan.k', highScore: 4300 },
    { userName: 'nakada', highScore: 5000 },
    { userName: 'Will', highScore: 2920 },
    { userName: 'NSND', highScore: 5500 },
    { userName: 'Jf', highScore: 2750 },
    { userName: 'Suki', highScore: 4800 },
    { userName: 'JKK', highScore: 5100 },
  ];
  return <Leaderboard data={data} sortBy="highScore" labelBy="userName" />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

const LeaderDetail = ({ navigation }) => {
  return (
    <Block flex centre>
      <ScrollView>
        <View style={styles.root}>
          <StatusBar barStyle="light-content" />
          <Title style={{ padding: 15 }}>Leaderboard</Title>
          <Leader />
        </View>
      </ScrollView>
    </Block>
  );
};

LeaderDetail.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        from: PropTypes.string,
      }),
    }),
    goBack: PropTypes.func,
  }),
};

LeaderDetail.defaultProps = {
  navigation: {
    state: {
      params: {
        from: '',
      },
    },
    goBack: () => null,
  },
};

export default LeaderDetail;
