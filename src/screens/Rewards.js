import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={{ fontSize: 30 }}>You have earned ₹ 947</Text>
      </View>
      <View style={styles.navBar1}></View>
      <View style={styles.body1}>
        <Image
          source={require('./Images/image2.jpg')}
          style={{
            width: 160,
            height: 160,
            borderWidth: 1,
            borderColor: '#EAE5E4',
          }}
        />
        <Image
          source={require('./Images/image0.jpg')}
          style={{
            width: 160,
            height: 160,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#EAE5E4',
          }}
        />
      </View>
      <View style={styles.body2}>
        <Image
          source={require('./Images/image3.jpeg')}
          style={{
            width: 160,
            height: 160,
            borderWidth: 1,
            borderColor: '#EAE5E4',
          }}
        />
        <Image
          source={require('./Images/image1.jpeg')}
          style={{
            width: 160,
            height: 160,
            borderWidth: 1,
            borderColor: '#EAE5E4',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    height: 130,
    backgroundColor: 'white',
    elevation: 4,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  navBar1: {
    height: 30,
    backgroundColor: 'white',
    elevation: 4,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  body1: {
    flex: 1,
    paddingHorizontal: 17,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body2: {
    flex: 1,
    paddingHorizontal: 17,
    paddingTop: 10,
    paddingBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
