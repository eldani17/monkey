import React from 'react';
import { SafeAreaView, Image, Button } from 'react-native';
import logo from '@assets/logo.png';
import topLogin from '@assets/topLogin.png';

import styles from './styles';

interface props {
  navigation: any;
}

function Login({ navigation }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => navigation.navigate('Home')} title="Ir a Inicio" />
      <Image source={topLogin} style={styles.imageTopLogin} />
      <Image source={logo} style={styles.imageLogo} />
    </SafeAreaView>
  );
}

export default Login;
