import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';

function WelcomePage() {
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => {
      // todo
    }, 3000);

    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>WelcomePage</Text>
    </View>
  );
}

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
