import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TrendingPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>TrendingPage</Text>
    </View>
  );
}

export default TrendingPage;

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
