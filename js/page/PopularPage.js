import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function PopularPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>PopularPage</Text>
    </View>
  );
}

export default PopularPage;

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
