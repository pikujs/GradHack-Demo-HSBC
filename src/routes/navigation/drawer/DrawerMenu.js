import React from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView, Text, PanResponder } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import FontIcon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../../theme';
import { Menu } from 'react-native-paper';

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const DrawerMenu = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.gray}
        backgroundColor="white"
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer());
        }}
      />
    </View>
    <View style={styles.main}>
      <Menu>
        <Menu.Item title="Reward" />
      </Menu>
    </View>
  </SafeAreaView>
);

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
};

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
};

export default DrawerMenu;
