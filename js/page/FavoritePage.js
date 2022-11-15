import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function FavoritePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>FavoritePag</Text>
    </View>
  );
}

export default FavoritePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});
