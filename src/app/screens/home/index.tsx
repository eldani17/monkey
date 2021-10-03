import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

import styles from './styles';

interface props {
  navigation: any;
}

function Home({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Screen Home</Text>
      <Button onPress={() => navigation.navigate('Login')} title="Ir a Login" />
      <Button
        onPress={() => navigation.navigate('Splash')}
        title="Ir a Splash"
      />
    </SafeAreaView>
  );
}

export default Home;
